import type { Friend } from "@/types/bill"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/buttonn"
import { X } from "lucide-react"
import { AddFriendDialog } from "./add-friend-dialog"

interface FriendSelectorProps {
  friends: Friend[]
  selectedFriends: Friend[]
  onSelectFriend: (friend: Friend) => void
  onRemoveFriend: (friend: Friend) => void
  onAddFriend: (friend: Friend) => void
}

export function FriendSelector({
  friends,
  selectedFriends,
  onSelectFriend,
  onRemoveFriend,
  onAddFriend,
}: FriendSelectorProps) {
  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-custom-green">Your Balance</h2>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-white">IDR {(120500).toLocaleString()}</span>
          <span className="text-xl text-white">Person {selectedFriends.length + 1}</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg mb-4 text-custom-green">Select Friend</h3>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <AddFriendDialog onAddFriend={onAddFriend} />

          {friends.map((friend) => {
            const isSelected = selectedFriends.some((f) => f.id === friend.id)
            return (
              <button
                key={friend.id}
                className={`flex flex-col items-center min-w-[80px] relative ${isSelected ? "opacity-50" : ""}`}
                onClick={() => !isSelected && onSelectFriend(friend)}
              >
                <Avatar className="h-16 w-16 mb-2 border-2 border-custom-green">
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback className="bg-zinc-900 text-custom-green">{friend.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-custom-green">{friend.name}</span>
                {isSelected && (
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute -top-2 -right-2 h-6 w-6 bg-zinc-900 hover:bg-zinc-800"
                    onClick={(e) => {
                      e.stopPropagation()
                      onRemoveFriend(friend)
                    }}
                  >
                    <X className="h-4 w-4 text-black" />
                  </Button>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

