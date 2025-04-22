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
import { Textarea } from "@/components/ui/textarea"

export function NewCategoryModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  const handleSave = () => {
    // Aqui seria implementada a lógica para salvar a categoria
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Nova Categoria</DialogTitle>
          <DialogDescription>Crie uma nova categoria para segmentar seus contatos.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="category-name">Nome da categoria *</Label>
            <Input id="category-name" placeholder="Ex: Clientes VIP" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category-description">Descrição (opcional)</Label>
            <Textarea
              id="category-description"
              placeholder="Descreva o propósito desta categoria"
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>Salvar categoria</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
