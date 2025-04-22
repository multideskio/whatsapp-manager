import { BarChart, LineChart } from "@/components/charts"
import { DashboardCards } from "@/components/dashboard-cards"
import { RecentSendsTable } from "@/components/recent-sends-table"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral das suas campanhas e métricas</p>
      </div>

      <DashboardCards />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-lg font-medium">Envios por dia</h3>
          <div className="h-[300px] w-full">
            <LineChart />
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="mb-4 text-lg font-medium">Status dos envios</h3>
          <div className="h-[300px] w-full">
            <BarChart />
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h3 className="mb-4 text-lg font-medium">Últimos envios</h3>
        <RecentSendsTable />
      </div>
    </div>
  )
}
