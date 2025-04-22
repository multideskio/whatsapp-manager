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
import { Plus, Trash2 } from "lucide-react"

export function NewFunnelModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [steps, setSteps] = useState([{ name: "", templateId: "", waitTime: "" }])

  const handleAddStep = () => {
    setSteps([...steps, { name: "", templateId: "", waitTime: "" }])
  }

  const handleRemoveStep = (index: number) => {
    const newSteps = [...steps]
    newSteps.splice(index, 1)
    setSteps(newSteps)
  }

  const handleSave = () => {
    // Aqui seria implementada a lógica para salvar o funil
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Novo Funil</DialogTitle>
          <DialogDescription>Crie um novo funil de mensagens automatizadas.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="funnel-name">Nome do funil *</Label>
            <Input id="funnel-name" placeholder="Ex: Onboarding de Clientes" required />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Etapas do funil</Label>
              <Button type="button" variant="outline" size="sm" onClick={handleAddStep} className="gap-1">
                <Plus className="h-4 w-4" />
                <span>Adicionar etapa</span>
              </Button>
            </div>

            {steps.map((step, index) => (
              <div key={index} className="rounded-md border p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Etapa {index + 1}</h4>
                  {steps.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveStep(index)}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                      <span className="sr-only">Remover etapa</span>
                    </Button>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`step-name-${index}`}>Nome da etapa</Label>
                  <Input id={`step-name-${index}`} placeholder="Ex: Boas-vindas" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`step-template-${index}`}>Template</Label>
                  <Select>
                    <SelectTrigger id={`step-template-${index}`}>
                      <SelectValue placeholder="Selecione um template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="template1">Boas-vindas</SelectItem>
                      <SelectItem value="template2">Confirmação</SelectItem>
                      <SelectItem value="template3">Lembrete</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`step-wait-${index}`}>Tempo de espera</Label>
                  <div className="flex items-center gap-2">
                    <Input id={`step-wait-${index}`} type="number" placeholder="Ex: 24" />
                    <Select defaultValue="hours">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minutes">Minutos</SelectItem>
                        <SelectItem value="hours">Horas</SelectItem>
                        <SelectItem value="days">Dias</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>Salvar funil</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
