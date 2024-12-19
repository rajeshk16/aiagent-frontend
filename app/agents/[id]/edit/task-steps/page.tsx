'use client'

import { Sidebar } from "@/components/layout/sidebar"
import { ConfigureSidebar } from "@/components/layout/configure-sidebar"
import { FlowBuilder } from "@/components/flow-builder"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, ChevronRight, HelpCircle, Check, Pause, Play } from 'lucide-react'
import Link from "next/link"

export default function TaskSteps() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Sidebar />
      <ConfigureSidebar />
      
      <div className="ml-80">
        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
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
              className="w-[400px]"
            />
            <Button 
              variant="outline" 
              size="sm"
              className="gap-2"
            >
              <Check className="h-4 w-4" />
              Mark as Complete
            </Button>
            <Button 
              variant="outline"
              size="sm"
              className="gap-2 text-red-600 hover:text-red-600 hover:border-red-600"
            >
              <Pause className="h-4 w-4" />
              Pause Task
            </Button>
            <Button size="sm" className="gap-2">
              <Play className="h-4 w-4" />
              Run Task
            </Button>
          </div>
        </header>

        {/* Flow Builder */}
        <main className="h-[calc(100vh-4rem)]">
          <FlowBuilder />
        </main>
      </div>
    </div>
  )
}

