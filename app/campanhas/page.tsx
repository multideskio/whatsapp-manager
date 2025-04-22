import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Copy, MoreHorizontal, Pause, Plus } from "lucide-react"
import { NewCampaignModal } from "@/components/new-campaign-modal"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const campaigns = [
  {
    id: "1",
    name: "Promoção Maio",
    funnel: "Vendas",
    number: "+5511987654321",
    contacts: 1250,
    scheduledFor: "07/05/2023 14:00",
    status: "ativa",
  },
  {
    id: "2",
    name: "Boas-vindas",
    funnel: "Onboarding",
    number: "+5511987654322",
    contacts: 450,
    scheduledFor: "Imediato",
    status: "ativa",
  },
  {
    id: "3",
    name: "Recuperação",
    funnel: "Retenção",
    number: "+5511987654323",
    contacts: 780,
    scheduledFor: "10/05/2023 09:00",
    status: "agendada",
  },
  {
    id: "4",
    name: "Black Friday",
    funnel: "Vendas",
    number: "+5511987654324",
    contacts: 3200,
    scheduledFor: "24/11/2023 00:00",
    status: "rascunho",
  },
  {
    id: "5",
    name: "Pesquisa de Satisfação",
    funnel: "Feedback",
    number: "+5511987654325",
    contacts: 950,
    scheduledFor: "15/05/2023 10:00",
    status: "pausada",
  },
  {
    id: "6",
    name: "Aniversariantes",
    funnel: "Relacionamento",
    number: "+5511987654326",
    contacts: 120,
    scheduledFor: "Diário",
    status: "ativa",
  },
  {
    id: "7",
    name: "Natal 2022",
    funnel: "Vendas",
    number: "+5511987654327",
    contacts: 2800,
    scheduledFor: "20/12/2022 08:00",
    status: "encerrada",
  },
]

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Campanhas</h1>
          <p className="text-muted-foreground">Gerencie suas campanhas de disparo</p>
        </div>
        <NewCampaignModal>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Nova campanha</span>
          </Button>
        </NewCampaignModal>
      </div>

      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead className="hidden md:table-cell">Funil</TableHead>
              <TableHead className="hidden md:table-cell">Número</TableHead>
              <TableHead className="hidden md:table-cell">Contatos</TableHead>
              <TableHead className="hidden md:table-cell">Agendada para</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell className="hidden md:table-cell">{campaign.funnel}</TableCell>
                <TableCell className="hidden md:table-cell">{campaign.number}</TableCell>
                <TableCell className="hidden md:table-cell">{campaign.contacts}</TableCell>
                <TableCell className="hidden md:table-cell">{campaign.scheduledFor}</TableCell>
                <TableCell>
                  <CampaignStatusBadge status={campaign.status} />
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Ações</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Button variant="ghost" size="sm" className="w-full justify-start px-2">
                          Editar
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Button variant="ghost" size="sm" className="w-full justify-start gap-2 px-2">
                          <Copy className="h-4 w-4" />
                          Duplicar
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Button variant="ghost" size="sm" className="w-full justify-start gap-2 px-2">
                          <Pause className="h-4 w-4" />
                          Pausar
                        </Button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function CampaignStatusBadge({ status }: { status: string }) {
  const statusMap: Record<string, { label: string; variant: "default" | "outline" | "secondary" | "destructive" }> = {
    ativa: { label: "Ativa", variant: "default" },
    pausada: { label: "Pausada", variant: "secondary" },
    rascunho: { label: "Rascunho", variant: "outline" },
    agendada: { label: "Agendada", variant: "secondary" },
    encerrada: { label: "Encerrada", variant: "outline" },
  }

  const { label, variant } = statusMap[status] || { label: status, variant: "outline" }

  return <Badge variant={variant}>{label}</Badge>
}
