'use client'

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MoreHorizontal } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'

const teamMembers = [
  { id: '1', name: 'Sandeep Maurya', initial: 'S', color: 'bg-yellow-100 text-yellow-800' },
  { id: '2', name: 'Kashish Mali', initial: 'K', color: 'bg-green-100 text-green-800' },
  { id: '3', name: 'Kate Johnson', initial: 'S', color: 'bg-blue-100 text-blue-800' },
]

export default function ProjectDetails() {
  const router = useRouter()

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-2">Project 1</h1>
            <p className="text-slate-600">Add description here description This helps our team review your application quickly.</p>
          </div>
          <Button>Edit Project</Button>
        </div>

        {/* Project Details */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold">Project Details</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Project Name*</label>
              <Input defaultValue="Project 1" readOnly />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Project Phase*</label>
              <Select defaultValue="planning">
                <SelectTrigger>
                  <SelectValue />
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
              <label className="text-sm font-medium">Project Description</label>
              <Textarea defaultValue="This is a description" />
            </div>
          </div>
        </section>

        {/* AI Agents */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold mb-6">AI Agents</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-6 rounded-lg border bg-white">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium">Profile AI</span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Configure</DropdownMenuItem>
                    <DropdownMenuItem>Remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Add description here description description here heredescription hered escription here
              </p>
              <div className="mt-4 flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => router.push('/agents/profile-ai/edit')}
                >
                  Edit
                </Button>
                <Button size="sm" variant="secondary">Use Agent</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold mb-6">Team Members</h2>
          <p className="text-sm text-slate-600 mb-4">
            Shared with {teamMembers.length} members
          </p>
          <div className="flex flex-wrap gap-2">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100"
              >
                <span className={`flex items-center justify-center w-6 h-6 rounded-full ${member.color}`}>
                  {member.initial}
                </span>
                <span>{member.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Connected Data Source */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold mb-6">Connected Data Source</h2>
          <div className="rounded-lg border bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center">
                  🐘
                </div>
                <div>
                  <div className="font-medium">refij5873@testme.com</div>
                  <div className="text-sm text-slate-600">PostgreSQL</div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit connection</DropdownMenuItem>
                  <DropdownMenuItem>View details</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

