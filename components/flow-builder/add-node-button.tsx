import { Button } from '@/components/ui/button'
import { Plus, FileText, Users } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AddNodeButton() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <div className="absolute bottom-8 right-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700">
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
            Additional Instructions
          </DropdownMenuItem>
          <DropdownMenuItem 
            onDragStart={(event) => onDragStart(event, 'conditional')} 
            draggable 
            className="gap-2 cursor-grab"
          >
            <Users className="h-4 w-4" />
            Condition
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

