'use client'

import { CollapsedSidebar } from "@/components/layout/collapsed-sidebar"
import { ExpandedSidebar } from "@/components/layout/expanded-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, ChevronRight, HelpCircle, Search } from 'lucide-react'
import Link from "next/link"

const dataSources = [
  { id: 's3', name: 'S3', icon: '📦' },
  { id: 'postgresql', name: 'PostgreSQL', icon: '🐘' },
  { id: 'mysql', name: 'MySQL', icon: '🐬' },
  { id: 'oracle', name: 'Oracle', icon: '🏛️' },
  { id: 'api', name: 'API', icon: '🔌' },
]

export default function AgentProfile() {
  return (
    <div className="min-h-screen">
      <CollapsedSidebar />
      <ExpandedSidebar />
      
      <div className="ml-80">
        {/* Header */}
        <header className="h-16 border-b flex items-center justify-between px-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="#" className="hover:text-slate-900">My Project</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="#" className="hover:text-slate-900">Create Project</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="#" className="hover:text-slate-900">Agents</Link>
          </div>
          <div className="flex items-center gap-4">
            <Input
              type="search"
              placeholder="Search..."
              className="w-72"
            />
            <Button
              size="icon"
              variant="ghost"
              className="relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-600 rounded-full" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
            >
              <HelpCircle className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold mb-2">Agent Profile</h1>
              <p className="text-slate-600">This helps our team review your application quickly. This</p>
            </div>

            <div className="space-y-8">
              {/* Profile Image */}
              <div className="mb-8">
                <img
                  src="/placeholder.svg"
                  alt="Agent Profile"
                  className="w-24 h-24 rounded-full"
                />
              </div>

              {/* Form Fields */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Agent Name*
                  </label>
                  <Input defaultValue="Profile AI" className="bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Agent Description
                  </label>
                  <Input 
                    defaultValue="Analyzes source data to provide statistical information" 
                    className="bg-slate-50"
                  />
                </div>
              </div>

              {/* Select Data Source */}
              <div className="mt-12">
                <h2 className="text-lg font-semibold mb-6">Select Data Source</h2>
                
                {/* Upload Files */}
                <div className="mb-8">
                  <h3 className="font-medium mb-2">Upload Files</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Add your documents here, and you can upload up to 50 mb
                  </p>
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-8">
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-sm mb-1">
                          Drag your file(s) to start uploading
                        </p>
                        <p className="text-sm text-slate-400">OR</p>
                      </div>
                      <Button variant="outline" className="text-blue-600">
                        Browse files
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Add Data Source */}
                <div>
                  <h3 className="font-medium mb-2">Add Data Source</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Add your documents here, and you can upload up to 5 files max
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {dataSources.map((source) => (
                      <Button
                        key={source.id}
                        variant="outline"
                        className="h-10 px-4"
                      >
                        <span className="mr-2">{source.icon}</span>
                        {source.name}
                      </Button>
                    ))}
                    <Button variant="outline" className="h-10">
                      Add other Data Source
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-end gap-4 mt-8">
              <Button variant="outline">Discard</Button>
              <Button>Save</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

