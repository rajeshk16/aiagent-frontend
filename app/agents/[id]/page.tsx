"use client"

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Upload } from 'lucide-react'
import Image from "next/image"

export default function AgentProfile({ params }: { params: { id: string } }) {
  // Add a null check for params
  const agentId = params?.id

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-8">
          <span>My Project</span>
          <ChevronRight className="h-4 w-4" />
          <span>Create Project</span>
          <ChevronRight className="h-4 w-4" />
          <span>Agents</span>
        </div>

        {/* Configure Agent Section */}
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Configure Agent</h1>
            <p className="text-slate-600">Set the next block in the workflow</p>
          </div>

          {/* Agent Profile Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium mb-6">Agent Profile</h2>
              <div className="mb-8">
                <Image
                  src="/placeholder.svg"
                  alt="Agent avatar"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="grid gap-6 max-w-2xl">
                <div className="space-y-2">
                  <label htmlFor="agent-name" className="text-sm font-medium">
                    Agent Name*
                  </label>
                  <Input
                    id="agent-name"
                    defaultValue={agentId ? `Profile AI (${agentId})` : "Profile AI"}
                    className="bg-slate-50"
                    readOnly
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="agent-description" className="text-sm font-medium">
                    Agent Description
                  </label>
                  <Input
                    id="agent-description"
                    defaultValue="Analyzes source data to provide statistical information"
                    className="bg-slate-50"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Select Data Source */}
            <div>
              <h2 className="text-lg font-medium mb-6">Select Data Source</h2>

              {/* Upload Files */}
              <div className="mb-8">
                <h3 className="font-medium mb-2">Upload Files</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Add your documents here, and you can upload up to 50 mb
                </p>
                <div className="border-2 border-dashed rounded-lg p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                      <Upload className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-medium mb-1">
                      Drag your file(s) to start uploading
                    </p>
                    <p className="text-sm text-slate-600 mb-4">OR</p>
                    <Button variant="link" className="text-blue-600">
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
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <DataSourceButton icon="📦" name="S3" />
                  <DataSourceButton icon="🐘" name="Postgresql" />
                  <DataSourceButton icon="🐬" name="MySQL" />
                  <DataSourceButton icon="🏛️" name="Oracle" />
                  <DataSourceButton icon="🔌" name="API" />
                  <button className="aspect-square rounded-lg border bg-white p-4 hover:border-blue-600 hover:text-blue-600 transition-colors">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl">➕</span>
                      <span className="text-sm font-medium">Add other Data Source</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <Button variant="outline">Discard</Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function DataSourceButton({ icon, name }: { icon: string; name: string }) {
  return (
    <button className="aspect-square rounded-lg border bg-white p-4 hover:border-blue-600 hover:text-blue-600 transition-colors">
      <div className="flex flex-col items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <span className="text-sm font-medium">{name}</span>
      </div>
    </button>
  )
}

