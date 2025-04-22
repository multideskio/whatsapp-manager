import type React from "react"
import { DashboardLayout } from "../layout-dashboard"

export default function SendsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <DashboardLayout>{children}</DashboardLayout>
}
