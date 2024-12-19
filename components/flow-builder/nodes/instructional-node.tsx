import { Handle, Position } from 'reactflow'
import { FileText, Trash2, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export function InstructionalNode({ data }: { data: { label: string; content: string } }) {
  return (
    <div className="bg-white rounded-lg border shadow-sm p-4 min-w-[320px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-slate-600" />
          <span className="font-medium text-sm">Additional Instructions</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-green-600">
            <Play className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
            <Pause className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Textarea
        value={data.content}
        placeholder="Type a message...."
        className="min-h-[120px] bg-slate-50 border-slate-200 resize-none text-sm"
      />
      <Handle 
        type="target" 
        position={Position.Top}
        className="!bg-blue-600 !w-3 !h-3 !border-2"
      />
      <Handle 
        type="source" 
        position={Position.Bottom}
        className="!bg-blue-600 !w-3 !h-3 !border-2"
      />
    </div>
  )
}

