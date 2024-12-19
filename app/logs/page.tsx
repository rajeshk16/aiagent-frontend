import { Layout } from "@/components/layout"
import { LogTable } from "@/components/log-table"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Logs() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Alert className="mb-8 bg-slate-900 text-white">
          <AlertDescription>
            Logs will be archived after 60 days. For access to older logs, please contact the support team.
          </AlertDescription>
        </Alert>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-semibold">Logs</h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-5 w-5 text-slate-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent className="p-2 max-w-xs">
                  <p>View detailed information about all actions and decisions performed by AI agents.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-slate-600">
            Take a look at report of all actions and decision agents have performed.
          </p>
        </div>

        <LogTable />
      </div>
    </Layout>
  )
}

