import { KpiCard } from "../components/KpiCard";
import QuickAction from "../components/QuickAction";
import RecentSales from "../components/RecentSales";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Business Dashboard</h1>
          <p className="text-gray-500">Today’s performance overview</p>
        </div>
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
          Live
        </span>
      </div>

      {/* KPI CARDS */}
      <div className="grid gap-6 md:grid-cols-4">
        <KpiCard
          title="Total Income"
          value="₦125,000"
          subtitle="Today"
          color="bg-gradient-to-r from-green-500 to-emerald-600"
        />
        <KpiCard
          title="Total Expenses"
          value="₦38,000"
          subtitle="Today"
          color="bg-gradient-to-r from-red-500 to-rose-600"
        />
        <KpiCard
          title="Net Profit"
          value="₦87,000"
          subtitle="After expenses"
          color="bg-gradient-to-r from-blue-500 to-indigo-600"
        />
        <KpiCard
          title="Transactions"
          value="42"
          subtitle="Bar + Car Wash"
          color="bg-gradient-to-r from-purple-500 to-fuchsia-600"
        />
      </div>

      {/* QUICK ACTIONS */}
      <div>
        <h2 className="font-bold mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickAction label="➕ Add Bar Sale" to="/sales?type=bar" />
          <QuickAction label="🚗 Add Car Wash Sale" to="/sales?type=carwash" />
          <QuickAction label="💸 Add Expense" to="/expenses" />
          <QuickAction label="📊 View Reports" to="/reports" />
        </div>
      </div>

      {/* LOWER GRID */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Income vs Expense */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-bold mb-4">Income Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Bar Sales</span>
              <span className="font-semibold">₦78,000</span>
            </div>
            <div className="flex justify-between">
              <span>Car Wash</span>
              <span className="font-semibold">₦47,000</span>
            </div>
            <div className="border-t pt-3 flex justify-between text-green-600 font-bold">
              <span>Total</span>
              <span>₦125,000</span>
            </div>
          </div>
        </div>

        {/* Recent Sales */}
        <div className="md:col-span-2">
          <RecentSales />
        </div>
      </div>
    </div>
  );
}
