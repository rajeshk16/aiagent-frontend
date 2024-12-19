'use client'

import { useCallback, useState } from 'react'
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Edge,
  Node,
  NodeTypes,
  useEdgesState,
  useNodesState,
  XYPosition,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { StartingPointNode } from './nodes/starting-point-node'
import { InstructionalNode } from './nodes/instructional-node'
import { ConditionalNode } from './nodes/conditional-node'
import { AddNodeButton } from './add-node-button'

const nodeTypes: NodeTypes = {
  startingPoint: StartingPointNode,
  instructional: InstructionalNode,
  conditional: ConditionalNode,
}

const initialNodes: Node[] = [
  {
    id: 'start',
    type: 'startingPoint',
    position: { x: 400, y: 100 },
    data: { label: 'Starting Point' },
  },
]

export function FlowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault()

      const type = event.dataTransfer.getData('application/reactflow')
      if (!type) return

      const position = ReactFlow.project({
        x: event.clientX,
        y: event.clientY,
      }) as XYPosition

      const newNode: Node = {
        id: `${type}-${Date.now()}`,
        type,
        position,
        data: { 
          label: type === 'instructional' ? 'Additional Instructions' : 'Condition',
          content: '',
        },
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [setNodes]
  )

  return (
    <div className="w-full h-full bg-[#FAFAFA]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        minZoom={0.1}
        maxZoom={1.5}
        fitView
      >
        <Background color="#E5E7EB" gap={16} />
        <Controls 
          className="bg-white border shadow-sm rounded-lg"
          showInteractive={false}
        />
        <AddNodeButton />
      </ReactFlow>
    </div>
  )
}

