import { Handle, Position } from 'reactflow'
import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'

export function StartingPointNode({ data }: { data: { label: string } }) {
  return (
    <div className="bg-white rounded-lg border shadow-sm p-4 min-w-[240px]">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
          <span className="text-blue-600 text-sm font-medium">1</span>
        </div>
        <span className="font-medium text-sm">{data.label}</span>
      </div>
      <Button 
        variant="outline" 
        className="w-full justify-between text-sm font-normal"
      >
        Choose
        <ChevronDown className="h-4 w-4 opacity-50" />
      </Button>
      <Handle 
        type="source" 
        position={Position.Bottom} 
        className="!bg-blue-600 !w-3 !h-3 !border-2"
      />
    </div>
  )
}

