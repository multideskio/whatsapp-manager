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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export function NewCampaignModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState("1")
  const [date, setDate] = useState<Date>()

  const handleNext = () => {
    const currentStep = Number.parseInt(step)
    if (currentStep < 5) {
      setStep((currentStep + 1).toString())
    } else {
      setOpen(false)
      setStep("1")
    }
  }

  const handleBack = () => {
    const currentStep = Number.parseInt(step)
    if (currentStep > 1) {
      setStep((currentStep - 1).toString())
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Nova Campanha</DialogTitle>
          <DialogDescription>Configure sua nova campanha de disparo em poucos passos.</DialogDescription>
        </DialogHeader>
        <Tabs value={step} onValueChange={setStep} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="1">1</TabsTrigger>
            <TabsTrigger value="2">2</TabsTrigger>
            <TabsTrigger value="3">3</TabsTrigger>
            <TabsTrigger value="4">4</TabsTrigger>
            <TabsTrigger value="5">5</TabsTrigger>
          </TabsList>
          <TabsContent value="1" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="campaign-name">Nome da campanha</Label>
              <Input id="campaign-name" placeholder="Ex: Promoção de Maio" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="campaign-description">Descrição (opcional)</Label>
              <Input id="campaign-description" placeholder="Descreva o objetivo da campanha" />
            </div>
          </TabsContent>
          <TabsContent value="2" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="waba-number">Número WABA</Label>
              <Select>
                <SelectTrigger id="waba-number">
                  <SelectValue placeholder="Selecione um número" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="number1">+5511987654321</SelectItem>
                  <SelectItem value="number2">+5511987654322</SelectItem>
                  <SelectItem value="number3">+5511987654323</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
          <TabsContent value="3" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Selecionar contatos</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os contatos</SelectItem>
                  <SelectItem value="clients">Clientes</SelectItem>
                  <SelectItem value="leads">Leads</SelectItem>
                  <SelectItem value="prospects">Prospects</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="rounded-md border p-4">
              <p className="text-sm text-muted-foreground">
                Total de contatos selecionados: <strong>0</strong>
              </p>
            </div>
          </TabsContent>
          <TabsContent value="4" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="funnel">Escolher funil</Label>
              <Select>
                <SelectTrigger id="funnel">
                  <SelectValue placeholder="Selecione um funil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Vendas</SelectItem>
                  <SelectItem value="onboarding">Onboarding</SelectItem>
                  <SelectItem value="retention">Retenção</SelectItem>
                  <SelectItem value="relationship">Relacionamento</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
          <TabsContent value="5" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Agendar envio</Label>
              <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="send-now" name="schedule" className="h-4 w-4" />
                  <Label htmlFor="send-now" className="font-normal">
                    Enviar imediatamente
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="send-scheduled" name="schedule" className="h-4 w-4" />
                  <Label htmlFor="send-scheduled" className="font-normal">
                    Agendar para data específica
                  </Label>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: ptBR }) : "Selecione uma data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
          {step !== "1" && (
            <Button variant="outline" onClick={handleBack}>
              Voltar
            </Button>
          )}
          <Button onClick={handleNext}>{step === "5" ? "Criar campanha" : "Próximo"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
