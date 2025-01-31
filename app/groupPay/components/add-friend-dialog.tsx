"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/buttonn"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import type { Friend } from "@/types/bill"

interface AddFriendDialogProps {
  onAddFriend: (friend: Friend) => void
}

export function AddFriendDialog({ onAddFriend }: AddFriendDialogProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && amount) {
      onAddFriend({
        id: Date.now().toString(),
        name,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
        amount: Number.parseFloat(amount),
      })
      setName("")
      setAmount("")
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex flex-col items-center min-w-[80px] h-auto py-4 border-zinc-900 hover:border-custom-green hover:bg-zinc-900"
        >
          <Plus className="h-8 w-8 mb-2 text-custom-green" />
          <span className="text-custom-green">Add</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black border-zinc-900">
        <DialogHeader>
          <DialogTitle className="text-custom-green">Add New Friend</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-custom-green">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-zinc-900 border-zinc-900 text-custom-green focus-visible:ring-custom-green"
              placeholder="Enter friend's name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-custom-green">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-zinc-900 border-zinc-900 text-custom-green focus-visible:ring-custom-green"
              placeholder="Enter amount"
            />
          </div>
          <Button type="submit" className="w-full bg-custom-green text-black hover:bg-custom-green/90">
            Add Friend
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

