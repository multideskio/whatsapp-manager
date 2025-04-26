"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

interface Contact {
  id: string
  name: string
  phone: string
  email?: string
  category?: string
  status: string
  notes?: string
}

interface EditContactModalProps {
  contact: Contact | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (contact: Contact) => void
}

export function EditContactModal({ contact, open, onOpenChange, onSave }: EditContactModalProps) {
  const [editedContact, setEditedContact] = useState<Contact | null>(null)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (contact) {
      setEditedContact(contact)
      setIsActive(contact.status === "ativo")
    }
  }, [contact])

  const handleSave = () => {
    if (editedContact) {
      onSave({
        ...editedContact,
        status: isActive ? "ativo" : "inativo",
      })
    }
    onOpenChange(false)
  }

  if (!editedContact) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Editar Contato</DialogTitle>
          <DialogDescription>Edite as informações do contato.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Nome *</Label>
              <Input
                id="contact-name"
                placeholder="Nome completo"
                value={editedContact.name}
                onChange={(e) => setEditedContact({ ...editedContact, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-phone">Telefone *</Label>
              <Input
                id="contact-phone"
                placeholder="+5511987654321"
                value={editedContact.phone}
                onChange={(e) => setEditedContact({ ...editedContact, phone: e.target.value })}
                required
              />
              <p className="text-xs text-muted-foreground">Formato: +DDDNúmero (ex: +5511987654321)</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="email@exemplo.com"
              value={editedContact.email || ""}
              onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-category">Categoria</Label>
            <Select
              value={editedContact.category || ""}
              onValueChange={(value) => setEditedContact({ ...editedContact, category: value })}
            >
              <SelectTrigger id="contact-category">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cliente">Cliente</SelectItem>
                <SelectItem value="lead">Lead</SelectItem>
                <SelectItem value="prospect">Prospect</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="contact-status" checked={isActive} onCheckedChange={setIsActive} />
            <Label htmlFor="contact-status">Contato ativo</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-notes">Observações</Label>
            <Input
              id="contact-notes"
              placeholder="Observações sobre o contato"
              value={editedContact.notes || ""}
              onChange={(e) => setEditedContact({ ...editedContact, notes: e.target.value })}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>Salvar alterações</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
