"use client"

import { Bell, ChevronDown, Home, LayoutGrid, Settings, LineChart, FileText, HelpCircle } from 'lucide-react'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { usePathname } from "next/navigation"

interface LayoutProps {
  children: React.ReactNode
}

interface Project {
  id: string
  name: string
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname()
  const [projects, setProjects] = useState<Project[]>([])

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col fixed inset-y-0">
        <div className="p-4">
          <Link href="/" className="text-xl font-semibold hover:text-slate-200 transition-colors">
            DataMigration.AI
          </Link>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Link 
              href="/"
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors",
                pathname === "/" && "text-white bg-slate-800"
              )}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            
            <Link 
              href="/projects"
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors",
                pathname?.startsWith("/projects") && "text-white bg-slate-800"
              )}
            >
              <LayoutGrid className="h-5 w-5" />
              My Projects
            </Link>

            <Link 
              href="/agents"
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors",
                pathname === "/agents" && "text-white bg-slate-800"
              )}
            >
              <FileText className="h-5 w-5" />
              Agent Catalog
            </Link>
            <Link 
              href="/logs"
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors",
                pathname === "/logs" && "text-white bg-slate-800"
              )}
            >
              <FileText className="h-5 w-5" />
              Logs
            </Link>
            <Link 
              href="/analytics"
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors",
                pathname === "/analytics" && "text-white bg-slate-800"
              )}
            >
              <LineChart className="h-5 w-5" />
              Analytics
            </Link>
            <Link 
              href="/settings"
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors",
                pathname === "/settings" && "text-white bg-slate-800"
              )}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Michael Smith</p>
              <p className="text-xs text-slate-400 truncate">michaelsm12@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <header className="h-16 border-b flex items-center justify-between px-6">
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <div className="w-72">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full"
              />
            </div>
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
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

