"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

interface NewContactModalProps {
  children: React.ReactNode
}

export function NewContactModal({ children }: NewContactModalProps) {
  const [open, setOpen] = useState(false)
  const [isActive, setIsActive] = useState(true)

  const handleSave = () => {
    // Aqui seria implementada a lógica para salvar o contato
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Novo Contato</DialogTitle>
          <DialogDescription>Adicione um novo contato à sua base.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Nome *</Label>
              <Input id="contact-name" placeholder="Nome completo" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-phone">Telefone *</Label>
              <Input id="contact-phone" placeholder="+5511987654321" required />
              <p className="text-xs text-muted-foreground">Formato: +DDDNúmero (ex: +5511987654321)</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input id="contact-email" type="email" placeholder="email@exemplo.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-category">Categoria</Label>
            <Select>
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
            <Input id="contact-notes" placeholder="Observações sobre o contato" />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>Salvar contato</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
