"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SendDetailsModalProps {
  send: any
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SendDetailsModal({ send, open, onOpenChange }: SendDetailsModalProps) {
  const [activeTab, setActiveTab] = useState("message")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Detalhes do Envio</DialogTitle>
          <DialogDescription>Informações detalhadas sobre o envio para {send.contact}</DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="message">Mensagem</TabsTrigger>
            <TabsTrigger value="response">Resposta API</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="message" className="space-y-4 py-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Campanha</h3>
                <p className="text-sm">{send.campaign}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium">Etapa do Funil</h3>
                <p className="text-sm">{send.funnelStep}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium">Template</h3>
                <p className="text-sm">{send.template}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium">Mensagem Enviada</h3>
                <Card className="mt-2">
                  <CardContent className="p-4">
                    <p className="whitespace-pre-wrap text-sm">{send.message}</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-sm font-medium">Destinatário</h3>
                <div className="mt-2 flex flex-col gap-1">
                  <p className="text-sm">
                    <span className="font-medium">Nome:</span> {send.contact}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Número:</span> {send.phone}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="response" className="space-y-4 py-4">
            <div>
              <h3 className="text-sm font-medium">Status</h3>
              <div className="mt-2">
                <StatusBadge status={send.status} />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium">ID da Mensagem</h3>
              <p className="text-sm">
                {send.apiResponse.id || <span className="text-muted-foreground">Não disponível</span>}
              </p>
            </div>

            {send.status === "erro" && (
              <div>
                <h3 className="text-sm font-medium">Erro</h3>
                <p className="text-sm text-red-500">{send.apiResponse.error}</p>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium">Resposta Completa da API</h3>
              <Card className="mt-2">
                <CardContent className="p-4">
                  <pre className="whitespace-pre-wrap rounded bg-slate-50 p-2 text-xs">
                    {JSON.stringify(send.apiResponse, null, 2)}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-4 py-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Timeline do Envio</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="relative border-l border-gray-200">
                  {send.timestamps.scheduled && (
                    <TimelineItem title="Agendado" time={send.timestamps.scheduled} status="scheduled" />
                  )}
                  {send.timestamps.sent && <TimelineItem title="Enviado" time={send.timestamps.sent} status="sent" />}
                  {send.timestamps.delivered && (
                    <TimelineItem title="Entregue" time={send.timestamps.delivered} status="delivered" />
                  )}
                  {send.timestamps.read && <TimelineItem title="Lido" time={send.timestamps.read} status="read" />}
                  {send.timestamps.error && (
                    <TimelineItem
                      title="Erro"
                      time={send.timestamps.error}
                      status="error"
                      description={send.apiResponse.error}
                    />
                  )}
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

function StatusBadge({ status }: { status: string }) {
  const statusMap: Record<
    string,
    { label: string; variant: "default" | "outline" | "secondary" | "destructive" | "success" }
  > = {
    pendente: { label: "Pendente", variant: "outline" },
    enviado: { label: "Enviado", variant: "secondary" },
    entregue: { label: "Entregue", variant: "default" },
    lido: { label: "Lido", variant: "success" },
    erro: { label: "Erro", variant: "destructive" },
  }

  const { label, variant } = statusMap[status] || { label: status, variant: "outline" }

  return <Badge variant={variant}>{label}</Badge>
}

function TimelineItem({
  title,
  time,
  status,
  description,
}: {
  title: string
  time: string
  status: "scheduled" | "sent" | "delivered" | "read" | "error"
  description?: string
}) {
  const getStatusColor = () => {
    switch (status) {
      case "scheduled":
        return "bg-gray-300"
      case "sent":
        return "bg-blue-500"
      case "delivered":
        return "bg-green-400"
      case "read":
        return "bg-green-600"
      case "error":
        return "bg-red-500"
      default:
        return "bg-gray-300"
    }
  }

  return (
    <li className="mb-6 ml-6">
      <span
        className={`absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full ${getStatusColor()} ring-8 ring-white`}
      >
        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <h3 className="mb-1 text-sm font-semibold">{title}</h3>
      <time className="mb-1 block text-xs font-normal text-gray-500">{time}</time>
      {description && <p className="text-xs text-red-500">{description}</p>}
    </li>
  )
}
