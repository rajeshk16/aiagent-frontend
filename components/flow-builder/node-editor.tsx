import { Node } from 'reactflow'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { X } from 'lucide-react'

interface NodeEditorProps {
  node: Node
  onChange: (data: any) => void
  onClose: () => void
}

export function NodeEditor({ node, onChange, onClose }: NodeEditorProps) {
  return (
    <div className="absolute right-0 top-0 w-80 m-4 bg-white rounded-lg border shadow-lg">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-medium">Edit Node</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <Textarea
          value={node.data.content || ''}
          onChange={(e) => onChange({ ...node.data, content: e.target.value })}
          placeholder="Enter node content..."
          className="min-h-[200px]"
        />
      </div>
    </div>
  )
}

