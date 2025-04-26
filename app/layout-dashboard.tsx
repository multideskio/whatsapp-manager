import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

// Mudando para exportação padrão (default export)
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-background p-4">{children}</main>
      </div>
    </div>
  )
}
