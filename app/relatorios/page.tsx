import type { Metadata } from "next"
import { RelatoriosClient } from "./client-charts"

export const metadata: Metadata = {
  title: "Relatórios | WhatsApp Dashboard",
  description: "Visualize métricas e estatísticas do seu WhatsApp Dashboard",
}

export default function RelatoriosPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Relatórios</h1>
      <RelatoriosClient />
    </div>
  )
}
