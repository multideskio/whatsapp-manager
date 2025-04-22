import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search } from "lucide-react"
import { NewCategoryModal } from "@/components/new-category-modal"

const categories = [
  {
    id: "1",
    name: "Clientes Ativos",
    description: "Clientes que realizaram compras nos últimos 3 meses",
    totalContacts: 1250,
  },
  {
    id: "2",
    name: "Leads Qualificados",
    description: "Leads que demonstraram interesse em nossos produtos",
    totalContacts: 450,
  },
  {
    id: "3",
    name: "Prospects",
    description: "Contatos em fase inicial de relacionamento",
    totalContacts: 780,
  },
  {
    id: "4",
    name: "Inativos",
    description: "Clientes sem interação nos últimos 6 meses",
    totalContacts: 320,
  },
  {
    id: "5",
    name: "VIP",
    description: "Clientes com alto valor de compra",
    totalContacts: 95,
  },
  {
    id: "6",
    name: "Aniversariantes do Mês",
    description: "Contatos que fazem aniversário no mês atual",
    totalContacts: 120,
  },
]

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Categorias</h1>
        <p className="text-muted-foreground">Gerencie as categorias para segmentação de contatos</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="search" placeholder="Buscar categorias..." className="w-full" />
          <Button type="submit" size="icon" variant="ghost">
            <Search className="h-4 w-4" />
            <span className="sr-only">Buscar</span>
          </Button>
        </div>
        <NewCategoryModal>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Nova categoria</span>
          </Button>
        </NewCategoryModal>
      </div>

      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead className="hidden md:table-cell">Descrição</TableHead>
              <TableHead>Total de contatos</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium">{category.name}</TableCell>
                <TableCell className="hidden md:table-cell">{category.description}</TableCell>
                <TableCell>{category.totalContacts}</TableCell>
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
