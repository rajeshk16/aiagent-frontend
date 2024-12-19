'use client'

import { cn } from "@/lib/utils"
import { FileText, Settings } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function ExpandedSidebar() {
  const pathname = usePathname()
  const agentId = pathname?.split('/')[2]

  return (
    <div className="w-64 bg-white border-r flex flex-col fixed inset-y-0 left-16">
      <div className="p-6">
        <h2 className="text-xl font-semibold">Configure Agent</h2>
        <p className="text-sm text-slate-600">Set the next block in the workflow</p>
      </div>
      
      <div className="px-6">
        <p className="text-sm text-slate-500 mb-4">Untitled Agent</p>
      </div>

      <div className="px-3">
        <div className="space-y-1">
          <p className="px-3 text-xs font-medium text-slate-500 mb-2">Agent Instructions</p>
          <Link
            href={`/agents/${agentId}/edit`}
            className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg bg-blue-50 text-blue-600"
          >
            <Settings className="h-4 w-4" />
            Agent Profile
          </Link>
          <Link
            href={`/agents/${agentId}/edit/additional-instructions`}
            className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-slate-600 hover:bg-slate-50"
          >
            <FileText className="h-4 w-4" />
            Additional Instructions
          </Link>
          <Link
            href={`/agents/${agentId}/edit/task-steps`}
            className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-slate-600 hover:bg-slate-50"
          >
            <FileText className="h-4 w-4" />
            Task Steps
          </Link>
        </div>
      </div>
    </div>
  )
}

