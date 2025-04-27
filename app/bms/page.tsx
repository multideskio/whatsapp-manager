"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { PlusCircle, Pencil, Trash2, Check, Eye, ChevronLeft, Phone } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dados de exemplo
const mockPhoneNumbers = [
  { id: 1, number: "+5511987654321", name: "Atendimento Principal", status: "connected" },
  { id: 2, number: "+5511987654322", name: "Suporte Técnico", status: "connected" },
]

const mockTemplates = [
  { id: 1, name: "Boas-vindas", status: "approved", language: "pt_BR" },
  { id: 2, name: "Confirmação de Pedido", status: "approved", language: "pt_BR" },
]

export default function BMsPage() {
  const [businessManagers, setBusinessManagers] = useState([
    {
      id: 1,
      name: "BM Principal",
      appId: "123456789",
      appSecret: "********",
      bmId: "987654321",
      token: "********",
      isActive: true,
    },
    {
      id: 2,
      name: "BM Secundária",
      appId: "987654321",
      appSecret: "********",
      bmId: "123456789",
      token: "********",
      isActive: false,
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentBM, setCurrentBM] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [viewingBM, setViewingBM] = useState(null)

  // Função para abrir o diálogo de adição
  const handleAddBM = () => {
    setCurrentBM({
      id: Date.now(),
      name: "",
      appId: "",
      appSecret: "",
      bmId: "",
      token: "",
      isActive: false,
    })
    setIsEditing(false)
    setIsDialogOpen(true)
  }

  // Função para abrir o diálogo de edição
  const handleEditBM = (bm) => {
    setCurrentBM({ ...bm })
    setIsEditing(true)
    setIsDialogOpen(true)
  }

  // Função para visualizar detalhes da BM
  const handleViewBM = (bm) => {
    setViewingBM(bm)
  }

  // Função para voltar à lista de BMs
  const handleBackToList = () => {
    setViewingBM(null)
  }

  // Função para remover uma BM
  const handleRemoveBM = (id) => {
    setBusinessManagers(businessManagers.filter((bm) => bm.id !== id))
  }

  // Função para definir uma BM como ativa
  const handleSetActive = (id) => {
    setBusinessManagers(
      businessManagers.map((bm) => ({
        ...bm,
        isActive: bm.id === id,
      })),
    )
  }

  // Função para salvar uma BM (nova ou editada)
  const handleSaveBM = () => {
    if (isEditing) {
      setBusinessManagers(businessManagers.map((bm) => (bm.id === currentBM.id ? currentBM : bm)))
    } else {
      // Se for a primeira BM, defina como ativa
      const isFirstBM = businessManagers.length === 0
      setBusinessManagers([...businessManagers, { ...currentBM, isActive: isFirstBM }])
    }
    setIsDialogOpen(false)
  }

  // Função para atualizar os campos do formulário
  const handleInputChange = (field, value) => {
    setCurrentBM({ ...currentBM, [field]: value })
  }

  // Se estiver visualizando uma BM específica, mostre seus detalhes
  if (viewingBM) {
    return (
      <div className="container py-6">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={handleBackToList} className="mr-2">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{viewingBM.name}</h1>
            <p className="text-muted-foreground">
              Detalhes e recursos associados a esta Business Manager
              {viewingBM.isActive && (
                <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                  Ativa
                </Badge>
              )}
            </p>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Informações da BM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm text-muted-foreground">Nome</Label>
                <p className="font-medium">{viewingBM.name}</p>
              </div>
              <div>
                <Label className="text-sm text-muted-foreground">App ID</Label>
                <p className="font-medium">{viewingBM.appId}</p>
              </div>
              <div>
                <Label className="text-sm text-muted-foreground">ID BM</Label>
                <p className="font-medium">{viewingBM.bmId}</p>
              </div>
              <div>
                <Label className="text-sm text-muted-foreground">Status</Label>
                <p className="font-medium">
                  {viewingBM.isActive ? (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Ativa
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-gray-50 text-gray-500 border-gray-200">
                      Inativa
                    </Badge>
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="phones" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="phones">Números de Telefone</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="phones" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Números de Telefone</h2>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    <span>Adicionar Número</span>
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Número</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockPhoneNumbers.map((phone) => (
                      <TableRow key={phone.id}>
                        <TableCell className="font-medium">{phone.number}</TableCell>
                        <TableCell>{phone.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Conectado
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Editar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Templates</h2>
                  <Button variant="outline" className="flex items-center gap-1">
                    <PlusCircle className="h-4 w-4" />
                    <span>Novo Template</span>
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Idioma</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockTemplates.map((template) => (
                      <TableRow key={template.id}>
                        <TableCell className="font-medium">{template.name}</TableCell>
                        <TableCell>
                          <Badge variant="default">Aprovado</Badge>
                        </TableCell>
                        <TableCell>{template.language}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Editar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    )
  }

  // Caso contrário, mostre a lista de BMs
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Business Managers</h1>
          <p className="text-muted-foreground">Gerencie suas Business Managers da Meta para integração com WhatsApp.</p>
        </div>
        <Button onClick={handleAddBM} className="flex items-center gap-1">
          <PlusCircle className="h-4 w-4" />
          <span>Adicionar BM</span>
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          {businessManagers.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p className="mb-4">Nenhuma Business Manager cadastrada.</p>
              <Button onClick={handleAddBM} variant="outline" className="flex items-center gap-1">
                <PlusCircle className="h-4 w-4" />
                <span>Adicionar BM</span>
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>App ID</TableHead>
                  <TableHead>ID BM</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {businessManagers.map((bm) => (
                  <TableRow key={bm.id}>
                    <TableCell className="font-medium">{bm.name}</TableCell>
                    <TableCell>{bm.appId}</TableCell>
                    <TableCell>{bm.bmId}</TableCell>
                    <TableCell>
                      {bm.isActive ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Ativa
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-gray-50 text-gray-500 border-gray-200">
                          Inativa
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="icon" onClick={() => handleViewBM(bm)} title="Ver detalhes">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {!bm.isActive && (
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleSetActive(bm.id)}
                            title="Definir como ativa"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <Button variant="outline" size="icon" onClick={() => handleEditBM(bm)} title="Editar">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => handleRemoveBM(bm.id)} title="Remover">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Diálogo para adicionar/editar BM */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{isEditing ? "Editar Business Manager" : "Adicionar Business Manager"}</DialogTitle>
            <DialogDescription>
              Preencha os dados da Business Manager para integração com a API do WhatsApp.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="bm-name">Nome da BM</Label>
              <Input
                id="bm-name"
                placeholder="Ex: BM Principal"
                value={currentBM?.name || ""}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="app-id">App ID</Label>
              <Input
                id="app-id"
                placeholder="Seu App ID"
                value={currentBM?.appId || ""}
                onChange={(e) => handleInputChange("appId", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="app-secret">App Secret</Label>
              <Input
                id="app-secret"
                type="password"
                placeholder="Seu App Secret"
                value={currentBM?.appSecret || ""}
                onChange={(e) => handleInputChange("appSecret", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bm-id">ID BM</Label>
              <Input
                id="bm-id"
                placeholder="ID da Business Manager"
                value={currentBM?.bmId || ""}
                onChange={(e) => handleInputChange("bmId", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="token">Token Permanente</Label>
              <Input
                id="token"
                type="password"
                placeholder="Token de acesso permanente"
                value={currentBM?.token || ""}
                onChange={(e) => handleInputChange("token", e.target.value)}
              />
            </div>
          </div>

          <DialogFooter className="flex space-x-2 justify-end">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSaveBM}>{isEditing ? "Salvar alterações" : "Adicionar"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
