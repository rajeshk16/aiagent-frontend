import { MoreHorizontal, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  badges: Array<{
    label: string
    color: string
  }>
}

export function ProjectCard({ id, title, description, badges }: ProjectCardProps) {
  return (
    <Card className="group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Project</p>
          <h3 className="font-medium">{title}</h3>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit project</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete project</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-medium text-white ring-2 ring-white"
                style={{ backgroundColor: badge.color }}
              >
                {badge.label}
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="opacity-0 group-hover:opacity-100"
            asChild
          >
            <Link href={`/projects/${id}`}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">View project</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

