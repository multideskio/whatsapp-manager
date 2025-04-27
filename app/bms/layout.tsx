import type React from "react"
import type { Metadata } from "next"
import DashboardLayout from "../layout-dashboard"

export const metadata: Metadata = {
  title: "Business Managers | WhatsApp Manager",
  description: "Gerencie suas Business Managers da Meta para integração com WhatsApp",
}

export default function BMsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <DashboardLayout>{children}</DashboardLayout>
}
