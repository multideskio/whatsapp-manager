import type React from "react"
import type { Metadata } from "next"
import DashboardLayout from "../layout-dashboard"

export const metadata: Metadata = {
  title: "Relatórios | WhatsApp Dashboard",
  description: "Visualize métricas e estatísticas do seu WhatsApp Dashboard",
}

export default function RelatoriosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayout>{children}</DashboardLayout>
}
