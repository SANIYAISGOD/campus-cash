import type { Bill } from "@/types/bill"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/buttonn"
import { QrCode } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ReceiptDisplayProps {
  bill: Bill
  onPayFull: () => void
  onSplitBill: () => void
}

export function ReceiptDisplay({ bill, onPayFull, onSplitBill }: ReceiptDisplayProps) {
  return (
    <div className="max-w-md mx-auto p-4">
      <Card className="relative bg-black border-zinc-900">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-semibold text-custom-green">Receipt Details</h2>
              <p className="text-sm text-white">{bill.storeName}</p>
              <p className="text-sm text-white">{bill.date}</p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <QrCode className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-900 text-white">
                  <p>Scan Invoice</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="space-y-4">
            {bill.items.map((item) => (
              <div key={item.id} className="flex justify-between text-white">
                <div>
                  <p>
                    {item.quantity}x {item.name}
                  </p>
                </div>
                <p>Rp {item.price.toLocaleString()}</p>
              </div>
            ))}

            <div className="border-t border-zinc-900 pt-4">
              <div className="flex justify-between text-white">
                <p>Tax</p>
                <p>Rp {bill.tax.toLocaleString()}</p>
              </div>
              <div className="flex justify-between font-semibold mt-2 text-white">
                <p>Grand Total</p>
                <p>Rp {bill.total.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="grid grid-cols-2 gap-4 p-6">
          <Button variant="outline" onClick={onPayFull} className="border-zinc-900 text-black hover:text-custom-green hover:bg-zinc-900">
            Pay Full
          </Button>
          <Button onClick={onSplitBill} className="bg-custom-green text-black hover:bg-custom-green/90">
            Split Bill
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

