import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-zinc-400">Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#c1ff72]">₹5,502.45</div>
          <p className="text-xs text-zinc-400 flex items-center gap-1">
            <ArrowUpRight className="text-[#c1ff72]" size={16} />
            <span className="text-[#c1ff72]">12.5%</span> from last month
          </p>
        </CardContent>
      </Card>
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-zinc-400">Incomes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">₹9,450.00</div>
          <p className="text-xs text-zinc-400 flex items-center gap-1">
            <ArrowUpRight className="text-[#c1ff72]" size={16} />
            <span className="text-[#c1ff72]">27%</span> from last month
          </p>
        </CardContent>
      </Card>
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-zinc-400">Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">₹3,945.55</div>
          <p className="text-xs text-zinc-400 flex items-center gap-1">
            <ArrowDownRight className="text-red-500" size={16} />
            <span className="text-red-500">15%</span> from last month
          </p>
        </CardContent>
      </Card>
    </div>
  )
}



