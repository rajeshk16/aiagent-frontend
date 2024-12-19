import { Handle, Position } from 'reactflow'
import { Users, Trash2, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export function ConditionalNode({ data }: { data: { label: string; content: string } }) {
  return (
    <div className="bg-[#1C2434] text-white rounded-lg shadow-sm p-4 min-w-[320px]">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span className="font-medium text-sm">Condition</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:text-white hover:bg-white/10">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-green-400 hover:text-green-300 hover:bg-white/10">
            <Play className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-white/10">
            <Pause className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Textarea
        value={data.content}
        placeholder="Type a message...."
        className="min-h-[120px] bg-[#1C2434] border-white/20 text-white placeholder:text-white/50 resize-none text-sm"
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

