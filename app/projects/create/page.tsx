'use client'

import { useState, useCallback } from "react"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Upload, Database } from 'lucide-react'
import { cn } from "@/lib/utils"
import { createProject, uploadProjectFile, searchTeamMembers } from "@/app/actions"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useDropzone } from 'react-dropzone'
import { Agent, TeamMember } from "@/lib/supabase/types"

export default function CreateProject() {
  const router = useRouter()
  const [selectedAgents, setSelectedAgents] = useState<string[]>([])
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [searchResults, setSearchResults] = useState<TeamMember[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDataSources, setSelectedDataSources] = useState<string[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFiles(prev => [...prev, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
    },
    maxSize: 50 * 1024 * 1024 // 50MB
  })

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    if (query.length < 2) {
      setSearchResults([])
      return
    }

    setIsSearching(true)
    try {
      const results = await searchTeamMembers(query)
      setSearchResults(results)
    } catch (error) {
      console.error('Error searching members:', error)
      toast.error('Failed to search team members')
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const addTeamMember = (member: TeamMember) => {
    if (!teamMembers.find(m => m.id === member.id)) {
      setTeamMembers(prev => [...prev, member])
    }
    setSearchQuery("")
    setSearchResults([])
  }

  const removeTeamMember = (memberId: string) => {
    setTeamMembers(prev => prev.filter(m => m.id !== memberId))
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const toggleDataSource = (sourceId: string) => {
    setSelectedDataSources(prev => 
      prev.includes(sourceId)
        ? prev.filter(id => id !== sourceId)
        : [...prev, sourceId]
    )
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      formData.append('selectedAgents', JSON.stringify(selectedAgents))
      formData.append('teamMembers', JSON.stringify(teamMembers))
      formData.append('dataSources', JSON.stringify(selectedDataSources))

      const result = await createProject(formData)
      
      if (result.success && result.project) {
        // Upload files if any
        if (selectedFiles.length > 0) {
          const uploadPromises = selectedFiles.map(file => 
            uploadProjectFile(result.project.id, file)
          )
          
          const uploadResults = await Promise.all(uploadPromises)
          const failedUploads = uploadResults.filter(r => !r.success)
          
          if (failedUploads.length > 0) {
            toast.error(`Failed to upload ${failedUploads.length} files`)
          }
        }

        toast.success('Project created successfully')
        router.push('/projects')
      } else {
        toast.error(result.error || 'Failed to create project')
      }
    } catch (error) {
      console.error('Error creating project:', error)
      toast.error('An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-8">
          <span>My Projects</span>
          <span>/</span>
          <span>Create Project</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Project Details */}
          <section>
            <h2 className="text-lg font-semibold mb-6">Project Details</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name*</Label>
                <Input id="name" name="name" placeholder="Add here" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phase">Project Phase*</Label>
                <Select name="phase" required defaultValue="planning">
                  <SelectTrigger>
                    <SelectValue placeholder="Select phase" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planning">Planning</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="testing">Testing</SelectItem>
                    <SelectItem value="production">Production</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea id="description" name="description" placeholder="Add here" />
              </div>
            </div>
          </section>

          {/* Select Required Agents */}
          <section>
            <h2 className="text-lg font-semibold mb-6">Select Required Agents</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {agents.map((agent) => (
                <div
                  key={agent.id}
                  className="p-6 rounded-lg border bg-white"
                >
                  <div className="flex items-start">
                    <div className="flex items-center gap-3 flex-1">
                      <img
                        src={agent.avatar_url}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="font-medium">{agent.name}</span>
                    </div>
                    <Checkbox
                      checked={selectedAgents.includes(agent.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedAgents([...selectedAgents, agent.id])
                        } else {
                          setSelectedAgents(selectedAgents.filter(id => id !== agent.id))
                        }
                      }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{agent.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Add Team Members */}
          <section>
            <h2 className="text-lg font-semibold mb-6">Add Team Members</h2>
            <div className="relative">
              <div className="flex gap-2 mb-4">
                <Input
                  type="search"
                  placeholder="Search for a member to add"
                  className="max-w-md"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <Button type="button" variant="secondary">Invite</Button>
              </div>
              
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 w-full max-w-md mt-1 p-2 bg-white rounded-lg border shadow-lg z-10">
                  {searchResults.map((member) => (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => addTeamMember(member)}
                      className="w-full px-3 py-2 text-left hover:bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200">
                          {member.name[0]}
                        </span>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-slate-500">{member.email}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="text-sm text-slate-600 mb-3">
              Shared with {teamMembers.length} members
            </div>
            
            <div className="flex flex-wrap gap-2">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200">
                    {member.name[0]}
                  </span>
                  <span>{member.name}</span>
                  <button
                    type="button"
                    onClick={() => removeTeamMember(member.id)}
                    className="ml-1 p-1 hover:bg-slate-200 rounded-full"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {member.name}</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Select Data Source */}
          <section>
            <h2 className="text-lg font-semibold mb-6">Select Data Source</h2>
            
            {/* Upload Files */}
            <div className="mb-8">
              <h3 className="font-medium mb-2">Upload Files</h3>
              <p className="text-sm text-slate-600 mb-4">
                Add your documents here, and you can upload up to 50 mb
              </p>
              
              <div
                {...getRootProps()}
                className={cn(
                  "border-2 border-dashed rounded-lg p-8 transition-colors",
                  isDragActive ? "border-blue-600 bg-blue-50" : "border-slate-200"
                )}
              >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center text-center">
                  <div className="mx-auto w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Upload className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium mb-1">
                    {isDragActive
                      ? "Drop the files here"
                      : "Drag your file(s) to start uploading"}
                  </p>
                  <p className="text-sm text-slate-600 mb-4">OR</p>
                  <Button type="button" variant="link" className="text-blue-600">
                    Browse files
                  </Button>
                </div>
              </div>

              {selectedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  {selectedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-slate-200 flex items-center justify-center">
                          📄
                        </div>
                        <div>
                          <div className="font-medium">{file.name}</div>
                          <div className="text-sm text-slate-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </div>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Add Data Source */}
            <div>
              <h3 className="font-medium mb-2">Add Data Source</h3>
              <p className="text-sm text-slate-600 mb-4">
                Select the data sources you want to connect to your project
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {dataSources.map((source) => (
                  <button
                    key={source.id}
                    type="button"
                    onClick={() => toggleDataSource(source.id)}
                    className={cn(
                      "aspect-square rounded-lg border bg-white p-4 transition-colors",
                      selectedDataSources.includes(source.id)
                        ? "border-blue-600 text-blue-600"
                        : "hover:border-blue-600 hover:text-blue-600"
                    )}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl">{source.icon}</span>
                      <span className="text-sm font-medium">{source.name}</span>
                    </div>
                  </button>
                ))}
                <button
                  type="button"
                  className="aspect-squarerounded-lg border bg-white p-4 hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl">➕</span>
                    <span className="text-sm font-medium">Add other Data Source</span>
                  </div>
                </button>
              </div>
            </div>
          </section>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push('/projects')}
            >
              Discard
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create'}
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

const agents = [
  {
    id: 'profile-ai',
    name: 'Profile AI',
    description: 'Add description here description description here heredescription hered escription here',
    avatar_url: '/placeholder.svg'
  },
  {
    id: 'map-ai',
    name: 'Map AI',
    description: 'Add description here description description here heredescription hered escription here',
    avatar_url: '/placeholder.svg'
  }
]

const dataSources = [
  { id: 's3', name: 'S3', icon: '📦' },
  { id: 'postgresql', name: 'PostgreSQL', icon: '🐘' },
  { id: 'mysql', name: 'MySQL', icon: '🐬' },
  { id: 'oracle', name: 'Oracle', icon: '🏛️' },
  { id: 'salesforce', name: 'Salesforce', icon: '☁️' },
  { id: 'api', name: 'API', icon: '🔌' },
  { id: 'supabase', name: 'Supabase', icon: '🔄' },
]

