import { Button } from '@/components/ui/button'
import { Plus, FileText, Users } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DragButton() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <div className="absolute bottom-20 right-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" className="rounded-full h-12 w-12 bg-blue-600 hover:bg-blue-700">
            <Plus className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem 
            onDragStart={(event) => onDragStart(event, 'instructional')} 
            draggable 
            className="gap-2 cursor-grab"
          >
            <FileText className="h-4 w-4" />
            Instructional
          </DropdownMenuItem>
          <DropdownMenuItem 
            onDragStart={(event) => onDragStart(event, 'conditional')} 
            draggable 
            className="gap-2 cursor-grab"
          >
            <Users className="h-4 w-4" />
            Conditional
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

