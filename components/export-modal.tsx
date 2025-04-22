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
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Download } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"

interface ExportModalProps {
  children: React.ReactNode
  title: string
  description: string
  fields?: Array<{ id: string; label: string }>
  type: "contacts" | "sends"
}

export function ExportModal({ children, title, description, fields, type }: ExportModalProps) {
  const [open, setOpen] = useState(false)
  const [format, setFormat] = useState("csv")
  const [exporting, setExporting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [success, setSuccess] = useState(false)
  const [selectedFields, setSelectedFields] = useState<string[]>(fields?.map((field) => field.id) || [])

  const toggleField = (fieldId: string) => {
    setSelectedFields((prev) => (prev.includes(fieldId) ? prev.filter((id) => id !== fieldId) : [...prev, fieldId]))
  }

  const simulateExport = () => {
    setExporting(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setExporting(false)
          setSuccess(true)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const handleExport = () => {
    simulateExport()
  }

  const handleClose = () => {
    setOpen(false)
    // Reset state after modal closes
    setTimeout(() => {
      setExporting(false)
      setProgress(0)
      setSuccess(false)
    }, 300)
  }

  const contactFields = [
    { id: "name", label: "Nome" },
    { id: "phone", label: "Telefone" },
    { id: "email", label: "Email" },
    { id: "category", label: "Categoria" },
    { id: "status", label: "Status" },
    { id: "createdAt", label: "Data de criação" },
    { id: "lastActivity", label: "Última atividade" },
  ]

  const sendsFields = [
    { id: "contact", label: "Nome do contato" },
    { id: "phone", label: "Telefone" },
    { id: "campaign", label: "Campanha" },
    { id: "funnelStep", label: "Etapa do funil" },
    { id: "status", label: "Status" },
    { id: "date", label: "Data/Hora" },
    { id: "message", label: "Mensagem" },
    { id: "template", label: "Template" },
    { id: "apiResponse", label: "Resposta da API" },
  ]

  const displayFields = type === "contacts" ? contactFields : sendsFields

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {!exporting && !success && (
            <>
              <div className="space-y-2">
                <Label>Formato do arquivo</Label>
                <RadioGroup defaultValue="csv" value={format} onValueChange={setFormat} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="csv" id="csv" />
                    <Label htmlFor="csv">CSV</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="xlsx" id="xlsx" />
                    <Label htmlFor="xlsx">Excel (XLSX)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Campos para exportar</Label>
                <div className="grid grid-cols-2 gap-2">
                  {displayFields.map((field) => (
                    <div key={field.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={field.id}
                        checked={selectedFields.includes(field.id)}
                        onCheckedChange={() => toggleField(field.id)}
                      />
                      <Label htmlFor={field.id} className="text-sm">
                        {field.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {exporting && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Exportando dados</Label>
                <Progress value={progress} className="h-2 w-full" />
                <p className="text-xs text-muted-foreground">{progress}% concluído</p>
              </div>
            </div>
          )}

          {success && (
            <div className="space-y-4">
              <Alert>
                <AlertDescription className="flex items-center gap-2 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Exportação concluída com sucesso!
                </AlertDescription>
              </Alert>
              <div className="flex justify-center">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  <span>Baixar arquivo {format.toUpperCase()}</span>
                </Button>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          {!exporting && !success && (
            <>
              <Button variant="outline" onClick={handleClose}>
                Cancelar
              </Button>
              <Button onClick={handleExport} disabled={selectedFields.length === 0}>
                Exportar
              </Button>
            </>
          )}

          {exporting && <Button disabled>Exportando...</Button>}

          {success && (
            <Button variant="outline" onClick={handleClose}>
              Fechar
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
