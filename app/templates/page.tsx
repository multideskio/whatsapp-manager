import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import { NewTemplateModal } from "@/components/new-template-modal"

const templates = [
  {
    id: "1",
    name: "Boas-vindas",
    status: "aprovado",
    language: "pt_BR",
    lastUpdated: "15/04/2023",
    bm: "BM Principal",
  },
  {
    id: "2",
    name: "Confirmação de Pedido",
    status: "aprovado",
    language: "pt_BR",
    lastUpdated: "20/04/2023",
    bm: "BM Principal",
  },
  {
    id: "3",
    name: "Lembrete de Pagamento",
    status: "pendente",
    language: "pt_BR",
    lastUpdated: "01/05/2023",
    bm: "BM Secundária",
  },
  {
    id: "4",
    name: "Pesquisa de Satisfação",
    status: "aprovado",
    language: "pt_BR",
    lastUpdated: "10/05/2023",
    bm: "BM Principal",
  },
  {
    id: "5",
    name: "Promoção Especial",
    status: "recusado",
    language: "pt_BR",
    lastUpdated: "05/05/2023",
    bm: "BM Secundária",
  },
]

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Templates</h1>
          <p className="text-muted-foreground">Gerencie seus templates de mensagens</p>
        </div>
        <NewTemplateModal>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Novo template</span>
          </Button>
        </NewTemplateModal>
      </div>

      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Idioma</TableHead>
              <TableHead>Business Manager</TableHead>
              <TableHead>Última atualização</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {templates.map((template) => (
              <TableRow key={template.id}>
                <TableCell className="font-medium">{template.name}</TableCell>
                <TableCell>
                  <TemplateStatusBadge status={template.status} />
                </TableCell>
                <TableCell>{template.language}</TableCell>
                <TableCell>{template.bm}</TableCell>
                <TableCell>{template.lastUpdated}</TableCell>
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

function TemplateStatusBadge({ status }: { status: string }) {
  const statusMap: Record<string, { label: string; variant: "default" | "outline" | "secondary" | "destructive" }> = {
    aprovado: { label: "Aprovado", variant: "default" },
    pendente: { label: "Pendente", variant: "secondary" },
    recusado: { label: "Recusado", variant: "destructive" },
  }

  const { label, variant } = statusMap[status] || { label: status, variant: "outline" }

  return <Badge variant={variant}>{label}</Badge>
}
