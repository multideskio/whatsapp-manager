import type React from "react"
import { DashboardLayout } from "../layout-dashboard"

export default function ContactsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <DashboardLayout>{children}</DashboardLayout>
}
