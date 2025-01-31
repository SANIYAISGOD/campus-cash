import { Button } from "@/components/ui/buttonn"
import { Plus, Minus } from "lucide-react"

export function DashboardActions() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Button className="bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800 h-24 flex flex-col items-center justify-center gap-2">
        <Plus className="h-6 w-6 text-[#c1ff72]" />
        <div>
          <div className="font-semibold">Add income</div>
          <div className="text-xs text-zinc-400">Create an income manually</div>
        </div>
      </Button>
      <Button className="bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800 h-24 flex flex-col items-center justify-center gap-2">
        <Minus className="h-6 w-6 text-[#c1ff72]" />
        <div>
          <div className="font-semibold">Add expense</div>
          <div className="text-xs text-zinc-400">Create an expense manually</div>
        </div>
      </Button>
    </div>
  )
}

