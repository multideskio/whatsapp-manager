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
import { FileUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ImportContactsModalProps {
  children: React.ReactNode
}

export function ImportContactsModal({ children }: ImportContactsModalProps) {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // Check if file is CSV or Excel
      const fileType = selectedFile.type
      if (
        fileType === "text/csv" ||
        fileType === "application/vnd.ms-excel" ||
        fileType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        setFile(selectedFile)
        setError(null)
      } else {
        setFile(null)
        setError("Por favor, selecione um arquivo CSV ou Excel (.xlsx, .xls)")
      }
    }
  }

  const simulateUpload = () => {
    setUploading(true)
    setProgress(0)
    setError(null)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          setSuccess(true)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  const handleImport = () => {
    if (!file) {
      setError("Por favor, selecione um arquivo para importar")
      return
    }

    simulateUpload()
  }

  const handleClose = () => {
    setOpen(false)
    // Reset state after modal closes
    setTimeout(() => {
      setFile(null)
      setUploading(false)
      setProgress(0)
      setError(null)
      setSuccess(false)
    }, 300)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Importar Contatos</DialogTitle>
          <DialogDescription>Importe seus contatos a partir de um arquivo CSV ou Excel.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {!uploading && !success && (
            <>
              <div className="space-y-2">
                <Label htmlFor="file">Arquivo</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="file"
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={handleFileChange}
                    className="file:bg-blue-50 file:text-blue-700 file:border-0 file:rounded-md file:px-2 file:py-1 file:mr-2 hover:file:bg-blue-100"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Formatos aceitos: CSV, Excel (.xlsx, .xls)</p>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="rounded-md border p-4">
                <h4 className="mb-2 text-sm font-medium">Modelo de arquivo</h4>
                <p className="text-xs text-muted-foreground">Seu arquivo deve conter as seguintes colunas:</p>
                <ul className="mt-2 list-inside list-disc text-xs text-muted-foreground">
                  <li>Nome (obrigatório)</li>
                  <li>Telefone (obrigatório, formato: +5511987654321)</li>
                  <li>Email (opcional)</li>
                  <li>Categoria (opcional)</li>
                </ul>
                <Button variant="outline" size="sm" className="mt-4 gap-1">
                  <FileUp className="h-4 w-4" />
                  <span>Baixar modelo</span>
                </Button>
              </div>
            </>
          )}

          {uploading && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Importando contatos</Label>
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
                  Importação concluída com sucesso!
                </AlertDescription>
              </Alert>
              <div className="rounded-md border p-4">
                <h4 className="mb-2 text-sm font-medium">Resumo da importação</h4>
                <ul className="list-inside list-disc text-sm">
                  <li>Total de contatos: 150</li>
                  <li>Contatos importados: 145</li>
                  <li>Contatos ignorados (duplicados): 5</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          {!uploading && !success && (
            <>
              <Button variant="outline" onClick={handleClose}>
                Cancelar
              </Button>
              <Button onClick={handleImport} disabled={!file}>
                Importar
              </Button>
            </>
          )}

          {uploading && <Button disabled>Importando...</Button>}

          {success && <Button onClick={handleClose}>Concluir</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
