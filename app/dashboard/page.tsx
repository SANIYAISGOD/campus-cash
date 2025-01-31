import { DashboardHeader } from "./components/dashboard-header"
import { DashboardStats } from "./components/dashboard-stats"
import { DashboardActions } from "./components/dashboard-actions"
import { ExpenseChart } from "./components/expense-chart"
import { TransactionList } from "./components/transaction-list"
import { NavbarDemo } from "@/components/Navbar"

export default function DashboardPage() {
    return (
      <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
        {/* Navbar Section */}
        <div className="bg-black p-6">
          <NavbarDemo />
        </div>
  
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto py-16 p-6">
          <div className="max-w-7xl mx-auto space-y-8 pb-12">
            <DashboardHeader />
            <DashboardStats />
            <DashboardActions />
            <div className="grid gap-8 md:grid-cols-2">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    );
  }
  