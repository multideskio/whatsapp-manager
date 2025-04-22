import type React from "react"
import { DashboardLayout } from "../layout-dashboard"

export default function FunnelsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <DashboardLayout>{children}</DashboardLayout>
}
