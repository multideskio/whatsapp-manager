import type React from "react"
import type { Metadata } from "next"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Relatórios | WhatsApp Dashboard",
  description: "Visualize métricas e estatísticas do seu WhatsApp Dashboard",
}

export default function RelatoriosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-background p-4">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
