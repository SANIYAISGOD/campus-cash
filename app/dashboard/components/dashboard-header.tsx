"use client"

import { Button } from "@/components/ui/buttonn"

const periods = ["This month", "Last month", "This year", "Last 12 months"]

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Hello, Sanya!</h1>
      <div className="flex items-center gap-2">
        {periods.map((period) => (
          <Button key={period} variant="ghost" className="text-zinc-400 bg-black hover:text-[#c1ff72] hover:bg-zinc-900">
            {period}
          </Button>
        ))}
        <Button variant="outline" className="ml-2 bg-black hover:bg-[#c1ff72] border-zinc-800">
          Select period
        </Button>
      </div>
    </div>
  )
}

