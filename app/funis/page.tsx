import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import { NewFunnelModal } from "@/components/new-funnel-modal"

const funnels = [
  {
    id: "1",
    name: "Onboarding de Clientes",
    steps: 3,
    status: "ativo",
  },
  {
    id: "2",
    name: "Recuperação de Carrinho",
    steps: 4,
    status: "ativo",
  },
  {
    id: "3",
    name: "Pós-Venda",
    steps: 2,
    status: "ativo",
  },
  {
    id: "4",
    name: "Reativação de Inativos",
    steps: 5,
    status: "inativo",
  },
  {
    id: "5",
    name: "Nutrição de Leads",
    steps: 6,
    status: "ativo",
  },
]

export default function FunnelsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Funis</h1>
          <p className="text-muted-foreground">Gerencie seus funis de mensagens automatizadas</p>
        </div>
        <NewFunnelModal>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Novo funil</span>
          </Button>
        </NewFunnelModal>
      </div>

      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Etapas</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {funnels.map((funnel) => (
              <TableRow key={funnel.id}>
                <TableCell className="font-medium">{funnel.name}</TableCell>
                <TableCell>{funnel.steps} etapas</TableCell>
                <TableCell>
                  <Badge variant={funnel.status === "ativo" ? "default" : "secondary"}>
                    {funnel.status === "ativo" ? "Ativo" : "Inativo"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
