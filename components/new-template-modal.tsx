"use client"

import { Badge } from "@/components/ui/badge"

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
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NewTemplateModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [variables, setVariables] = useState<string[]>([])
  const [newVariable, setNewVariable] = useState("")

  const handleAddVariable = () => {
    if (newVariable && !variables.includes(newVariable)) {
      setVariables([...variables, newVariable])
      setNewVariable("")
    }
  }

  const handleRemoveVariable = (variable: string) => {
    setVariables(variables.filter((v) => v !== variable))
  }

  const handleSave = () => {
    // Aqui seria implementada a lógica para salvar o template
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Novo Template</DialogTitle>
          <DialogDescription>Crie um novo template para suas mensagens.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
            <TabsTrigger value="content">Conteúdo</TabsTrigger>
          </TabsList>
          <TabsContent value="basic" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="template-name">Nome do template *</Label>
              <Input id="template-name" placeholder="Ex: Boas-vindas" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="template-language">Idioma *</Label>
              <Select>
                <SelectTrigger id="template-language">
                  <SelectValue placeholder="Selecione um idioma" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt_BR">Português (Brasil)</SelectItem>
                  <SelectItem value="en_US">Inglês (EUA)</SelectItem>
                  <SelectItem value="es_ES">Espanhol</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="template-category">Categoria *</Label>
              <Select>
                <SelectTrigger id="template-category">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="utility">Utilitário</SelectItem>
                  <SelectItem value="authentication">Autenticação</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
          <TabsContent value="content" className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Variáveis</Label>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Nome da variável (sem chaves)"
                  value={newVariable}
                  onChange={(e) => setNewVariable(e.target.value)}
                />
                <Button type="button" onClick={handleAddVariable} className="shrink-0">
                  Adicionar
                </Button>
              </div>
              {variables.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {variables.map((variable) => (
                    <Badge key={variable} className="flex items-center gap-1">
                      {`{{${variable}}}`}
                      <button
                        type="button"
                        onClick={() => handleRemoveVariable(variable)}
                        className="ml-1 rounded-full hover:bg-primary/20"
                      >
                        ✕
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
              <p className="text-xs text-muted-foreground">
                As variáveis serão exibidas como {"{{"} nome_variavel {"}}"}
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="template-content">Conteúdo da mensagem *</Label>
              <Textarea
                id="template-content"
                placeholder="Digite o conteúdo da sua mensagem. Use {{variavel}} para inserir variáveis."
                className="min-h-[200px]"
              />
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>Salvar template</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
