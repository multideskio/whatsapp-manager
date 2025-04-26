import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentação | WhatsApp Marketing Dashboard",
  description: "Documentação completa da plataforma WhatsApp Marketing Dashboard",
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="bg-background min-h-screen">{children}</div>
}
