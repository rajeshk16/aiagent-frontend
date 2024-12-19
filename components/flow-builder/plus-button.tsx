import { Button } from '@/components/ui/button'
import { Plus, FileText, Users } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface PlusButtonProps {
  onAdd: (type: 'instructional' | 'conditional', sourceNodeId: string) => void
}

export function PlusButton({ onAdd }: PlusButtonProps) {
  return (
    <div className="absolute bottom-20 right-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" className="rounded-full h-12 w-12 bg-blue-600 hover:bg-blue-700">
            <Plus className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => onAdd('instructional', 'start')} className="gap-2">
            <FileText className="h-4 w-4" />
            Instructional
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onAdd('conditional', 'start')} className="gap-2">
            <Users className="h-4 w-4" />
            Conditional
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

