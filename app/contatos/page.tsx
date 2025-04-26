"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download, FileUp, Plus, Search } from "lucide-react"
import { TablePagination } from "@/components/table-pagination"
import { ImportContactsModal } from "@/components/import-contacts-modal"
import { ExportModal } from "@/components/export-modal"
import { NewContactModal } from "@/components/new-contact-modal"
import { EditContactModal } from "@/components/edit-contact-modal"

interface Contact {
  id: string
  name: string
  phone: string
  email?: string
  category?: string
  status: string
  notes?: string
}

const contacts = [
  {
    id: "1",
    name: "João Silva",
    phone: "+5511987654321",
    category: "Cliente",
    status: "ativo",
  },
  {
    id: "2",
    name: "Maria Oliveira",
    phone: "+5511987654322",
    category: "Lead",
    status: "ativo",
  },
  {
    id: "3",
    name: "Carlos Santos",
    phone: "+5511987654323",
    category: "Cliente",
    status: "inativo",
  },
  {
    id: "4",
    name: "Ana Souza",
    phone: "+5511987654324",
    category: "Prospect",
    status: "ativo",
  },
  {
    id: "5",
    name: "Pedro Costa",
    phone: "+5511987654325",
    category: "Lead",
    status: "ativo",
  },
  {
    id: "6",
    name: "Lucia Ferreira",
    phone: "+5511987654326",
    category: "Cliente",
    status: "ativo",
  },
  {
    id: "7",
    name: "Roberto Almeida",
    phone: "+5511987654327",
    category: "Prospect",
    status: "inativo",
  },
  {
    id: "8",
    name: "Fernanda Lima",
    phone: "+5511987654328",
    category: "Cliente",
    status: "ativo",
  },
  {
    id: "9",
    name: "Gabriel Oliveira",
    phone: "+5511987654329",
    category: "Lead",
    status: "ativo",
  },
  {
    id: "10",
    name: "Juliana Santos",
    phone: "+5511987654330",
    category: "Cliente",
    status: "ativo",
  },
  {
    id: "11",
    name: "Ricardo Pereira",
    phone: "+5511987654331",
    category: "Prospect",
    status: "inativo",
  },
  {
    id: "12",
    name: "Camila Rodrigues",
    phone: "+5511987654332",
    category: "Lead",
    status: "ativo",
  },
  {
    id: "13",
    name: "Marcelo Alves",
    phone: "+5511987654333",
    category: "Cliente",
    status: "ativo",
  },
  {
    id: "14",
    name: "Patricia Gomes",
    phone: "+5511987654334",
    category: "Prospect",
    status: "ativo",
  },
  {
    id: "15",
    name: "Eduardo Costa",
    phone: "+5511987654335",
    category: "Cliente",
    status: "inativo",
  },
]

export default function ContactsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  // Calculate pagination
  const indexOfLastContact = currentPage * pageSize
  const indexOfFirstContact = indexOfLastContact - pageSize
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePageSizeChange = (size: number) => {
    setPageSize(size)
    setCurrentPage(1) // Reset to first page when changing page size
  }

  const handleEditContact = (contact: Contact) => {
    setEditingContact(contact)
    setIsEditModalOpen(true)
  }

  const handleSaveContact = (updatedContact: Contact) => {
    // Aqui seria implementada a lógica para salvar o contato atualizado
    console.log("Contato atualizado:", updatedContact)
    setIsEditModalOpen(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Contatos</h1>
        <p className="text-muted-foreground">Gerencie seus contatos para campanhas</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="search" placeholder="Buscar contatos..." className="w-full" />
          <Button type="submit" size="icon" variant="ghost">
            <Search className="h-4 w-4" />
            <span className="sr-only">Buscar</span>
          </Button>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filtrar por categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas categorias</SelectItem>
              <SelectItem value="cliente">Cliente</SelectItem>
              <SelectItem value="lead">Lead</SelectItem>
              <SelectItem value="prospect">Prospect</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <ImportContactsModal>
              <Button variant="outline" className="gap-1">
                <FileUp className="h-4 w-4" />
                <span className="hidden sm:inline">Importar</span>
              </Button>
            </ImportContactsModal>

            <ExportModal
              title="Exportar Contatos"
              description="Exporte seus contatos em formato CSV ou Excel."
              type="contacts"
            >
              <Button variant="outline" className="gap-1">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Exportar</span>
              </Button>
            </ExportModal>

            <NewContactModal>
              <Button className="gap-1">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Novo contato</span>
              </Button>
            </NewContactModal>
          </div>
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Número</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentContacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell className="font-medium">{contact.name}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.category}</TableCell>
                <TableCell>
                  <Badge variant={contact.status === "ativo" ? "default" : "secondary"}>
                    {contact.status === "ativo" ? "Ativo" : "Inativo"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" onClick={() => handleEditContact(contact)}>
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          totalItems={contacts.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>

      <EditContactModal
        contact={editingContact}
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        onSave={handleSaveContact}
      />
    </div>
  )
}
