import { cn } from "@/lib/utils"
import { Settings, FileText } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function ConfigureSidebar() {
  const pathname = usePathname()
  const agentId = pathname?.split('/')[2]

  const navigation = [
    {
      name: "Agent Profile",
      href: `/agents/${agentId}/edit`,
      icon: Settings,
    },
    {
      name: "Additional Instructions",
      href: `/agents/${agentId}/edit/additional-instructions`,
      icon: FileText,
    },
    {
      name: "Task Steps",
      href: `/agents/${agentId}/edit/task-steps`,
      icon: FileText,
    }
  ]

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
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                pathname === item.href 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-slate-600 hover:bg-slate-50"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

