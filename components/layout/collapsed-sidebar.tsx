'use client'

import { cn } from "@/lib/utils"
import { Home, LayoutGrid, FileText, Settings, LineChart, Bot } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function CollapsedSidebar() {
  const pathname = usePathname()
  
  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: LayoutGrid },
    { name: "Agents", href: "/agents", icon: Bot },
    { name: "Documents", href: "/documents", icon: FileText },
    { name: "Analytics", href: "/analytics", icon: LineChart },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <div className="w-16 bg-slate-900 text-white flex flex-col fixed inset-y-0">
      <nav className="flex-1 py-4">
        <div className="px-2 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-center h-10 w-12 rounded-lg transition-colors",
                pathname === item.href 
                  ? "bg-blue-600 text-white" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="sr-only">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      <div className="p-2 mt-auto">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

