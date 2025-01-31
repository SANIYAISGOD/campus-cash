import { Card, CardContent } from "./card"
import { Progress } from "./progress"
import type { Budget } from "@/types/budget"

interface BudgetCardProps {
  budget: Budget
}

export function BudgetCard({ budget }: BudgetCardProps) {
  const remaining = budget.totalAmount - budget.spent
  const progress = (budget.spent / budget.totalAmount) * 100

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center">
              <img src={budget.icon || "/placeholder.svg"} alt="" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-[#c1ff72] font-medium">{budget.category}</h3>
              <p className="text-gray-400 text-sm">
                {budget.itemCount} Item{budget.itemCount !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <span className="text-[#c1ff72] text-xl font-semibold">₹{budget.totalAmount}</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-400">
            <span>₹{budget.spent} Spend</span>
            <span>₹{remaining} Remaining</span>
          </div>
          <Progress value={progress} className="bg-zinc-800 h-2" indicatorClassName="bg-[#c1ff72]" />
        </div>
      </CardContent>
    </Card>
  )
}