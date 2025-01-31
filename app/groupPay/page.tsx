"use client"
import { Users } from "lucide-react"
import { useState } from "react"
import { ReceiptDisplay } from "./components/receipt-display"
import { FriendSelector } from "./components/friend-selector"
import type { Bill, Friend } from "@/types/bill"
import { NavbarDemo } from "@/components/Navbar"

const SAMPLE_BILL: Bill = {
  id: "1",
  storeName: "Starbucks",
  date: "10:45 - 20 Jan 2025",
  items: [
    { id: "1", name: "Ice Macchiato", price: 360, quantity: 2, participants: [] },
    { id: "2", name: "Coffe Mocha", price: 250, quantity: 1, participants: [] },
    { id: "3", name: "Smoked Chicken Fried", price: 350, quantity: 1, participants: [] },
    { id: "4", name: "Cold Brew", price: 230, quantity: 1, participants: [] },
  ],
  total: 1340,
  tax: 150,
}

const SAMPLE_FRIENDS: Friend[] = [
  { id: "1", name: "Riya", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luffy" },
  { id: "2", name: "Siya", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanji" },
  { id: "3", name: "Namita", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nami" },
  { id: "4", name: "Zoro", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zoro" },
]

export default function SplitBillPage() {
  const [step, setStep] = useState<"receipt" | "friends">("receipt")
  const [selectedFriends, setSelectedFriends] = useState<Friend[]>([])
  const [friends, setFriends] = useState<Friend[]>(SAMPLE_FRIENDS)

  const handleSplitBill = () => {
    setStep("friends")
  }

  const handleSelectFriend = (friend: Friend) => {
    setSelectedFriends([...selectedFriends, friend])
  }

  const handleRemoveFriend = (friend: Friend) => {
    setSelectedFriends(selectedFriends.filter((f) => f.id !== friend.id))
  }

  const handleAddFriend = (friend: Friend) => {
    setFriends([...friends, friend])
  }

  return (
    <div className="min-h-screen bg-black">
        {/* Navbar Section */}
        <div className="bg-black p-6">
          <NavbarDemo />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3">
          <Users className="h-8 w-8 text-custom-green" />
          <h1 className="text-3xl font-bold text-custom-green">GroupPay</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {step === "receipt" ? (
          <ReceiptDisplay bill={SAMPLE_BILL} onPayFull={() => {}} onSplitBill={handleSplitBill} />
        ) : (
          <FriendSelector
            friends={friends}
            selectedFriends={selectedFriends}
            onSelectFriend={handleSelectFriend}
            onRemoveFriend={handleRemoveFriend}
            onAddFriend={handleAddFriend}
          />
        )}
      </div>
    </div>
  )
}

