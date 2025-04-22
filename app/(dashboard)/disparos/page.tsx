"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, Download, Eye, RefreshCw, Search } from "lucide-react"
import { SendDetailsModal } from "@/components/send-details-modal"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TablePagination } from "@/components/table-pagination"
import { ExportModal } from "@/components/export-modal"

// Dados de exemplo
const sends = [
  {
    id: "1",
    contact: "João Silva",
    phone: "+5511987654321",
    campaign: "Promoção Maio",
    funnelStep: "Boas-vindas",
    status: "entregue",
    date: "07/05/2023 14:32",
    message: "Olá {{nome}}, temos uma promoção especial para você! Aproveite 20% de desconto em todos os produtos.",
    template: "promo_maio",
    apiResponse: {
      id: "wamid.abcdefg123456789",
      status: "delivered",
      timestamp: "1683472320",
    },
    timestamps: {
      sent: "07/05/2023 14:32:00",
      delivered: "07/05/2023 14:32:05",
      read: "07/05/2023 14:35:22",
    },
  },
  {
    id: "2",
    contact: "Maria Oliveira",
    phone: "+5511987654322",
    campaign: "Promoção Maio",
    funnelStep: "Boas-vindas",
    status: "lido",
    date: "07/05/2023 14:32",
    message: "Olá {{nome}}, temos uma promoção especial para você! Aproveite 20% de desconto em todos os produtos.",
    template: "promo_maio",
    apiResponse: {
      id: "wamid.abcdefg123456790",
      status: "read",
      timestamp: "1683472380",
    },
    timestamps: {
      sent: "07/05/2023 14:32:00",
      delivered: "07/05/2023 14:32:03",
      read: "07/05/2023 14:33:10",
    },
  },
  {
    id: "3",
    contact: "Carlos Santos",
    phone: "+5511987654323",
    campaign: "Promoção Maio",
    funnelStep: "Boas-vindas",
    status: "enviado",
    date: "07/05/2023 14:32",
    message: "Olá {{nome}}, temos uma promoção especial para você! Aproveite 20% de desconto em todos os produtos.",
    template: "promo_maio",
    apiResponse: {
      id: "wamid.abcdefg123456791",
      status: "sent",
      timestamp: "1683472320",
    },
    timestamps: {
      sent: "07/05/2023 14:32:00",
    },
  },
  {
    id: "4",
    contact: "Ana Souza",
    phone: "+5511987654324",
    campaign: "Promoção Maio",
    funnelStep: "Boas-vindas",
    status: "pendente",
    date: "07/05/2023 14:32",
    message: "Olá {{nome}}, temos uma promoção especial para você! Aproveite 20% de desconto em todos os produtos.",
    template: "promo_maio",
    apiResponse: {
      id: null,
      status: "pending",
      timestamp: "1683472320",
    },
    timestamps: {
      scheduled: "07/05/2023 14:32:00",
    },
  },
  {
    id: "5",
    contact: "Pedro Costa",
    phone: "+5511987654325",
    campaign: "Promoção Maio",
    funnelStep: "Boas-vindas",
    status: "erro",
    date: "07/05/2023 14:32",
    message: "Olá {{nome}}, temos uma promoção especial para você! Aproveite 20% de desconto em todos os produtos.",
    template: "promo_maio",
    apiResponse: {
      id: null,
      status: "failed",
      error: "Phone number is not opted in",
      timestamp: "1683472320",
    },
    timestamps: {
      sent: "07/05/2023 14:32:00",
      error: "07/05/2023 14:32:01",
    },
  },
  {
    id: "6",
    contact: "Lucia Ferreira",
    phone: "+5511987654326",
    campaign: "Recuperação",
    funnelStep: "Lembrete",
    status: "entregue",
    date: "07/05/2023 15:10",
    message: "Olá {{nome}}, não esqueça de finalizar sua compra! Seu carrinho está esperando por você.",
    template: "cart_recovery",
    apiResponse: {
      id: "wamid.abcdefg123456792",
      status: "delivered",
      timestamp: "1683474600",
    },
    timestamps: {
      sent: "07/05/2023 15:10:00",
      delivered: "07/05/2023 15:10:05",
    },
  },
  {
    id: "7",
    contact: "Roberto Almeida",
    phone: "+5511987654327",
    campaign: "Recuperação",
    funnelStep: "Lembrete",
    status: "lido",
    date: "07/05/2023 15:10",
    message: "Olá {{nome}}, não esqueça de finalizar sua compra! Seu carrinho está esperando por você.",
    template: "cart_recovery",
    apiResponse: {
      id: "wamid.abcdefg123456793",
      status: "read",
      timestamp: "1683474660",
    },
    timestamps: {
      sent: "07/05/2023 15:10:00",
      delivered: "07/05/2023 15:10:03",
      read: "07/05/2023 15:11:20",
    },
  },
  {
    id: "8",
    contact: "Fernanda Lima",
    phone: "+5511987654328",
    campaign: "Recuperação",
    funnelStep: "Lembrete",
    status: "erro",
    date: "07/05/2023 15:10",
    message: "Olá {{nome}}, não esqueça de finalizar sua compra! Seu carrinho está esperando por você.",
    template: "cart_recovery",
    apiResponse: {
      id: null,
      status: "failed",
      error: "Invalid phone number format",
      timestamp: "1683474600",
    },
    timestamps: {
      sent: "07/05/2023 15:10:00",
      error: "07/05/2023 15:10:01",
    },
  },
  {
    id: "9",
    contact: "Marcos Silva",
    phone: "+5511987654329",
    campaign: "Aniversário",
    funnelStep: "Parabéns",
    status: "lido",
    date: "08/05/2023 09:00",
    message: "Olá {{nome}}, feliz aniversário! Como presente, preparamos um cupom especial de 30% de desconto.",
    template: "birthday",
    apiResponse: {
      id: "wamid.abcdefg123456794",
      status: "read",
      timestamp: "1683536400",
    },
    timestamps: {
      sent: "08/05/2023 09:00:00",
      delivered: "08/05/2023 09:00:03",
      read: "08/05/2023 09:05:20",
    },
  },
  {
    id: "10",
    contact: "Juliana Costa",
    phone: "+5511987654330",
    campaign: "Aniversário",
    funnelStep: "Parabéns",
    status: "entregue",
    date: "08/05/2023 09:15",
    message: "Olá {{nome}}, feliz aniversário! Como presente, preparamos um cupom especial de 30% de desconto.",
    template: "birthday",
    apiResponse: {
      id: "wamid.abcdefg123456795",
      status: "delivered",
      timestamp: "1683537300",
    },
    timestamps: {
      sent: "08/05/2023 09:15:00",
      delivered: "08/05/2023 09:15:05",
    },
  },
  {
    id: "11",
    contact: "Ricardo Oliveira",
    phone: "+5511987654331",
    campaign: "Feedback",
    funnelStep: "Pesquisa",
    status: "enviado",
    date: "08/05/2023 10:30",
    message:
      "Olá {{nome}}, gostaríamos de saber sua opinião sobre nosso atendimento. Poderia responder uma breve pesquisa?",
    template: "feedback",
    apiResponse: {
      id: "wamid.abcdefg123456796",
      status: "sent",
      timestamp: "1683541800",
    },
    timestamps: {
      sent: "08/05/2023 10:30:00",
    },
  },
  {
    id: "12",
    contact: "Camila Santos",
    phone: "+5511987654332",
    campaign: "Feedback",
    funnelStep: "Pesquisa",
    status: "lido",
    date: "08/05/2023 10:45",
    message:
      "Olá {{nome}}, gostaríamos de saber sua opinião sobre nosso atendimento. Poderia responder uma breve pesquisa?",
    template: "feedback",
    apiResponse: {
      id: "wamid.abcdefg123456797",
      status: "read",
      timestamp: "1683542700",
    },
    timestamps: {
      sent: "08/05/2023 10:45:00",
      delivered: "08/05/2023 10:45:03",
      read: "08/05/2023 10:50:20",
    },
  },
]

const campaigns = [
  "Todas",
  "Promoção Maio",
  "Recuperação",
  "Boas-vindas",
  "Pesquisa de Satisfação",
  "Aniversário",
  "Feedback",
]
const statuses = ["Todos", "pendente", "enviado", "entregue", "lido", "erro"]

export default function DisparosPage() {
  const [selectedSend, setSelectedSend] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: undefined,
    to: undefined,
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const handleViewDetails = (send: any) => {
    setSelectedSend(send)
    setIsModalOpen(true)
  }

  // Calculate pagination
  const indexOfLastSend = currentPage * pageSize
  const indexOfFirstSend = indexOfLastSend - pageSize
  const currentSends = sends.slice(indexOfFirstSend, indexOfLastSend)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePageSizeChange = (size: number) => {
    setPageSize(size)
    setCurrentPage(1) // Reset to first page when changing page size
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Disparos</h1>
        <p className="text-muted-foreground">Gerencie e monitore todos os envios de mensagens</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Campanha</label>
              <Select defaultValue="Todas">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma campanha" />
                </SelectTrigger>
                <SelectContent>
                  {campaigns.map((campaign) => (
                    <SelectItem key={campaign} value={campaign}>
                      {campaign}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select defaultValue="Todos">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Período</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, "dd/MM/yyyy", { locale: ptBR })} -{" "}
                          {format(dateRange.to, "dd/MM/yyyy", { locale: ptBR })}
                        </>
                      ) : (
                        format(dateRange.from, "dd/MM/yyyy", { locale: ptBR })
                      )
                    ) : (
                      <span>Selecione um período</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange as any}
                    initialFocus
                    locale={ptBR}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Buscar contato ou número</label>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Nome ou número..." />
                <Button type="submit" size="icon" variant="ghost">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Buscar</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <ExportModal
          title="Exportar Disparos"
          description="Exporte os dados de disparos em formato CSV ou Excel."
          type="sends"
        >
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            <span>Exportar</span>
          </Button>
        </ExportModal>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Contato</TableHead>
              <TableHead className="hidden md:table-cell">Número</TableHead>
              <TableHead>Campanha</TableHead>
              <TableHead className="hidden md:table-cell">Etapa</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Data/Hora</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentSends.map((send) => (
              <TableRow key={send.id}>
                <TableCell className="font-medium">{send.contact}</TableCell>
                <TableCell className="hidden md:table-cell">{send.phone}</TableCell>
                <TableCell>{send.campaign}</TableCell>
                <TableCell className="hidden md:table-cell">{send.funnelStep}</TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <StatusBadge status={send.status} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <StatusDescription status={send.status} />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell className="hidden md:table-cell">{send.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleViewDetails(send)}>
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Ver detalhes</span>
                    </Button>
                    {send.status === "erro" && (
                      <Button variant="ghost" size="icon">
                        <RefreshCw className="h-4 w-4" />
                        <span className="sr-only">Reenviar</span>
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          totalItems={sends.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>

      {selectedSend && <SendDetailsModal send={selectedSend} open={isModalOpen} onOpenChange={setIsModalOpen} />}
    </div>
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

function StatusDescription({ status }: { status: string }) {
  const descriptions: Record<string, string> = {
    pendente: "Mensagem aguardando envio",
    enviado: "Mensagem enviada para o WhatsApp",
    entregue: "Mensagem entregue ao destinatário",
    lido: "Mensagem lida pelo destinatário",
    erro: "Erro no envio da mensagem",
  }

  return <p>{descriptions[status] || status}</p>
}
