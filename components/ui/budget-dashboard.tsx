"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "./buttonn"
import { BudgetCard } from "./budget-card"
import { CreateBudgetDialog } from "./create-budget-dialog"
import type { Budget } from "@/types/budget"

const initialBudgets: Budget[] = [
  {
    id: "1",
    category: "Travel",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r6cie0rkdUbDUYNKlxAc885jbf5W9X.png",
    totalAmount: 1000,
    spent: 300,
    itemCount: 0,
  },
  {
    id: "2",
    category: "Food",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r6cie0rkdUbDUYNKlxAc885jbf5W9X.png",
    totalAmount: 2000,
    spent: 1200,
    itemCount: 0,
  },
  {
    id: "3",
    category: "Gym",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r6cie0rkdUbDUYNKlxAc885jbf5W9X.png",
    totalAmount: 1200,
    spent: 1000,
    itemCount: 0,
  },
  {
    id: "4",
    category: "Stationary",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r6cie0rkdUbDUYNKlxAc885jbf5W9X.png",
    totalAmount: 600,
    spent: 100,
    itemCount: 0,
  },
]

export function BudgetDashboard() {
  const [budgets, setBudgets] = useState<Budget[]>(initialBudgets)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleCreateBudget = ({ category, amount }: { category: string; amount: number }) => {
    const newBudget: Budget = {
      id: String(budgets.length + 1),
      category,
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r6cie0rkdUbDUYNKlxAc885jbf5W9X.png", // Placeholder icon
      totalAmount: amount,
      spent: 0,
      itemCount: 0,
    }
    setBudgets([...budgets, newBudget])
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#c1ff72]">My Budgets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Button
          onClick={() => setIsDialogOpen(true)}
        //   variant="outline"
          className="h-[200px] border-2 border-dashed border-zinc-800 bg-zinc-900/50 text-[#c1ff72] hover:bg-zinc-900 hover:text-[#c1ff72]"
        >
          <div className="flex flex-col items-center gap-2">
            <Plus size={24} />
            <span>Create New Budget</span>
          </div>
        </Button>
        {budgets.map((budget) => (
          <BudgetCard key={budget.id} budget={budget} />
        ))}
      </div>
      <CreateBudgetDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} onCreateBudget={handleCreateBudget} />
    </div>
  )
}