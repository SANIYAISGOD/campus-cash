"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog"
import { Input } from "./input"
import { Button } from "./buttonn"
import { Label } from "./label"

interface CreateBudgetDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreateBudget: (budget: { category: string; amount: number }) => void
}

export function CreateBudgetDialog({ open, onOpenChange, onCreateBudget }: CreateBudgetDialogProps) {
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreateBudget({
      category,
      amount: Number(amount),
    })
    setCategory("")
    setAmount("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-[#c1ff72]">Create New Budget</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category" className="text-gray-400">
              Category Name
            </Label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-gray-200"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-gray-400">
              Budget Amount
            </Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-gray-200"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#c1ff72] text-black hover:bg-[#a8ff40]">
            Create Budget
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}