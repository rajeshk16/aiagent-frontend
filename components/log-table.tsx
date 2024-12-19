import { ChevronDown, Info } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface LogEntry {
  id: string
  agent: {
    name: string
    avatar: string
  }
  project: {
    name: string
    color: string
  }
  activity: string
  createdDate: string
  inputProvided: string
  outputGenerated: {
    status: 'view' | 'in_progress'
    text: string
  }
}

export function LogTable() {
  const logs: LogEntry[] = [
    {
      id: '1',
      agent: {
        name: 'Profile AI',
        avatar: '/placeholder.svg'
      },
      project: {
        name: 'Project 1',
        color: 'bg-blue-100 text-blue-800'
      },
      activity: 'Merged file to Project 1',
      createdDate: '12-10-24',
      inputProvided: 'Existing structure and r...',
      outputGenerated: {
        status: 'view',
        text: 'View'
      }
    },
    {
      id: '2',
      agent: {
        name: 'Map AI',
        avatar: '/placeholder.svg'
      },
      project: {
        name: 'Project 1',
        color: 'bg-blue-100 text-blue-800'
      },
      activity: 'Connected Data Pipeline',
      createdDate: '10-10-24',
      inputProvided: 'Target destinations (da...',
      outputGenerated: {
        status: 'in_progress',
        text: 'In Progress'
      }
    },
    {
      id: '3',
      agent: {
        name: 'Metadata AI',
        avatar: '/placeholder.svg'
      },
      project: {
        name: 'Project Test 2',
        color: 'bg-pink-100 text-pink-800'
      },
      activity: 'Created a Tech requirement document',
      createdDate: '03-10-24',
      inputProvided: 'Business rules and tran...',
      outputGenerated: {
        status: 'view',
        text: 'View'
      }
    },
    {
      id: '4',
      agent: {
        name: 'Metadata AI',
        avatar: '/placeholder.svg'
      },
      project: {
        name: 'Project 3',
        color: 'bg-green-100 text-green-800'
      },
      activity: 'Previous validation logs',
      createdDate: '27-09-24',
      inputProvided: 'Target destinations (da...',
      outputGenerated: {
        status: 'view',
        text: 'View'
      }
    },
    {
      id: '5',
      agent: {
        name: 'Transform AI',
        avatar: '/placeholder.svg'
      },
      project: {
        name: 'Project 2A',
        color: 'bg-cyan-100 text-cyan-800'
      },
      activity: 'Converting dataset in the target format',
      createdDate: '24-09-24',
      inputProvided: 'Original dataset in the s...',
      outputGenerated: {
        status: 'in_progress',
        text: 'In Progress'
      }
    },
    {
      id: '6',
      agent: {
        name: 'Transform AI',
        avatar: '/placeholder.svg'
      },
      project: {
        name: 'Project 5',
        color: 'bg-purple-100 text-purple-800'
      },
      activity: 'Converting dataset in the target format',
      createdDate: '24-09-24',
      inputProvided: 'Documentation outlinin...',
      outputGenerated: {
        status: 'view',
        text: 'View'
      }
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Select defaultValue="agent">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="agent">Agent Name</SelectItem>
            <SelectItem value="project">Project</SelectItem>
            <SelectItem value="date">Date</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Search"
          className="max-w-xs"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Agent Name</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>
                <Button variant="ghost" className="hover:bg-transparent p-0">
                  Created Date
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="hover:bg-transparent p-0">
                  Input Provided
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="hover:bg-transparent p-0">
                  Output Generated
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      src={log.agent.avatar}
                      alt=""
                      className="h-8 w-8 rounded-full"
                    />
                    {log.agent.name}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={log.project.color}>
                    {log.project.name}
                  </Badge>
                </TableCell>
                <TableCell>{log.activity}</TableCell>
                <TableCell>{log.createdDate}</TableCell>
                <TableCell>{log.inputProvided}</TableCell>
                <TableCell>
                  <span className={log.outputGenerated.status === 'in_progress' ? 'text-orange-600' : 'text-blue-600'}>
                    {log.outputGenerated.text}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" size="sm">Previous</Button>
        <Button variant="outline" size="sm">1</Button>
        <Button variant="secondary" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  )
}

