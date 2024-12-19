'use client'

import { CollapsedSidebar } from "@/components/layout/collapsed-sidebar"
import { ExpandedSidebar } from "@/components/layout/expanded-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Bell, ChevronRight, HelpCircle } from 'lucide-react'
import Link from "next/link"

export default function AdditionalInstructions() {
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
              <h1 className="text-2xl font-semibold mb-2">Additional Instructions</h1>
              <p className="text-slate-600">
                Describe how your agent should work. It's recommended to provide examples of tasks it might receive and what to do.
              </p>
            </div>

            <div className="space-y-6">
              <Textarea 
                className="min-h-[300px] text-base bg-slate-50"
                placeholder="eg. you are an helpful agent, if you do not know an answer do not provide false information"
              />
              
              <Button 
                variant="outline" 
                className="w-full justify-start text-slate-600 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                Need Prompt Help
              </Button>
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

