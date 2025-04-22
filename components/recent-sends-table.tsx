import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentSends = [
  {
    id: "1",
    campaign: "Promoção Maio",
    contact: "João Silva",
    phone: "+5511987654321",
    date: "07/05/2023 14:32",
    status: "entregue",
  },
  {
    id: "2",
    campaign: "Promoção Maio",
    contact: "Maria Oliveira",
    phone: "+5511987654322",
    date: "07/05/2023 14:32",
    status: "lido",
  },
  {
    id: "3",
    campaign: "Promoção Maio",
    contact: "Carlos Santos",
    phone: "+5511987654323",
    date: "07/05/2023 14:32",
    status: "enviado",
  },
  {
    id: "4",
    campaign: "Promoção Maio",
    contact: "Ana Souza",
    phone: "+5511987654324",
    date: "07/05/2023 14:32",
    status: "pendente",
  },
  {
    id: "5",
    campaign: "Promoção Maio",
    contact: "Pedro Costa",
    phone: "+5511987654325",
    date: "07/05/2023 14:32",
    status: "erro",
  },
]

export function RecentSendsTable() {
  return (
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Campanha</TableHead>
            <TableHead>Contato</TableHead>
            <TableHead className="hidden md:table-cell">Telefone</TableHead>
            <TableHead className="hidden md:table-cell">Data</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentSends.map((send) => (
            <TableRow key={send.id}>
              <TableCell className="font-medium">{send.campaign}</TableCell>
              <TableCell>{send.contact}</TableCell>
              <TableCell className="hidden md:table-cell">{send.phone}</TableCell>
              <TableCell className="hidden md:table-cell">{send.date}</TableCell>
              <TableCell>
                <StatusBadge status={send.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const statusMap: Record<string, { label: string; variant: "default" | "outline" | "secondary" | "destructive" }> = {
    pendente: { label: "Pendente", variant: "outline" },
    enviado: { label: "Enviado", variant: "secondary" },
    entregue: { label: "Entregue", variant: "default" },
    lido: { label: "Lido", variant: "default" },
    erro: { label: "Erro", variant: "destructive" },
  }

  const { label, variant } = statusMap[status] || { label: status, variant: "outline" }

  return <Badge variant={variant}>{label}</Badge>
}
