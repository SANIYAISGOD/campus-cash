import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const transactions = [
  {
    id: 1,
    description: "Canteen",
    method: "Bank account",
    date: "20/01/2025",
    amount: -80.0,
    type: "expense",
  },
  {
    id: 2,
    description: "Netflix",
    method: "Credit card",
    date: "15/01/2025",
    amount: -299.0,
    type: "expense",
  },
  {
    id: 3,
    description: "Sent by Sanya",
    method: "Bank Account",
    date: "14/01/2025",
    amount: 150.0,
    type: "income",
  },
  // Add more transactions as needed
]

export function TransactionList() {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader>
        <CardTitle className="text-zinc-400">Last transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center">
                  {transaction.description[0]}
                </div>
                <div>
                  <div className="font-medium text-white">{transaction.description}</div>
                  <div className="text-sm text-zinc-400">{transaction.method}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={transaction.type === "income" ? "text-[#c1ff72]" : "text-red-600"}>
                  {transaction.type === "income" ? "+" : ""}
                  {transaction.amount.toFixed(2)}
                </div>
                <div className="text-sm text-zinc-400">{transaction.date}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

