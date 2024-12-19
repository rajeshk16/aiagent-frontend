import { MoreHorizontal } from 'lucide-react'
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

interface AgentCardProps {
  id: string
  name: string
  description: string
  image: string
  isOnline?: boolean
}

export function AgentCard({ id, name, description, image, isOnline = false }: AgentCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={image}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            {isOnline && (
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
            )}
          </div>
          <Link href={`/agents/${id}`} className="font-semibold hover:text-blue-600">
            {name}
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/agents/${id}`}>View details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Assign Project</DropdownMenuItem>
            <DropdownMenuItem>Configure</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

