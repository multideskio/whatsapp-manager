"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, MoreHorizontal, MessageSquare, Clock, User, Search } from "lucide-react"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Input } from "@/components/ui/input"

// Dados de exemplo para o funil
const funnelData = {
  "1": {
    id: "1",
    name: "Onboarding de Clientes",
    steps: [
      {
        id: "step1",
        name: "Boas-vindas",
        template: "Boas-vindas",
        waitTime: "0 horas",
        contacts: [
          { id: "c1", name: "João Silva", phone: "+5511999991111", status: "completed" },
          { id: "c2", name: "Maria Oliveira", phone: "+5511999992222", status: "active" },
          { id: "c3", name: "Carlos Santos", phone: "+5511999993333", status: "pending" },
        ],
      },
      {
        id: "step2",
        name: "Apresentação do Produto",
        template: "Apresentação",
        waitTime: "24 horas",
        contacts: [
          { id: "c4", name: "Ana Souza", phone: "+5511999994444", status: "active" },
          { id: "c5", name: "Pedro Costa", phone: "+5511999995555", status: "pending" },
        ],
      },
      {
        id: "step3",
        name: "Feedback",
        template: "Feedback",
        waitTime: "72 horas",
        contacts: [{ id: "c6", name: "Lucia Ferreira", phone: "+5511999996666", status: "completed" }],
      },
    ],
  },
  "2": {
    id: "2",
    name: "Recuperação de Carrinho",
    steps: [
      {
        id: "step1",
        name: "Lembrete de Carrinho",
        template: "Lembrete",
        waitTime: "1 hora",
        contacts: [
          { id: "c7", name: "Roberto Almeida", phone: "+5511999997777", status: "active" },
          { id: "c8", name: "Fernanda Lima", phone: "+5511999998888", status: "pending" },
        ],
      },
      {
        id: "step2",
        name: "Desconto Especial",
        template: "Desconto",
        waitTime: "24 horas",
        contacts: [{ id: "c9", name: "Gabriel Oliveira", phone: "+5511999999999", status: "active" }],
      },
      {
        id: "step3",
        name: "Última Chance",
        template: "Urgência",
        waitTime: "48 horas",
        contacts: [],
      },
    ],
  },
  // Outros funis omitidos para brevidade
}

// Componente para contato arrastável
function SortableContactItem({ contact, stepId }: { contact: any; stepId: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: contact.id,
    data: {
      contact,
      stepId,
    },
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`p-3 rounded-md border mb-2 cursor-grab active:cursor-grabbing ${
        contact.status === "completed"
          ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
          : contact.status === "active"
            ? "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800"
            : "bg-gray-50 border-gray-200 dark:bg-gray-800/50 dark:border-gray-700"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-medium">{contact.name}</span>
          <span className="text-xs text-muted-foreground">{contact.phone}</span>
        </div>
        <Badge
          variant={contact.status === "completed" ? "success" : contact.status === "active" ? "default" : "secondary"}
          className="text-xs"
        >
          {contact.status === "completed" ? "Concluído" : contact.status === "active" ? "Em andamento" : "Pendente"}
        </Badge>
      </div>
    </div>
  )
}

export default function FunnelDetailPage() {
  const params = useParams()
  const funnelId = params.id as string
  const funnel = funnelData[funnelId as keyof typeof funnelData]

  const [funnelState, setFunnelState] = useState(funnel)
  const [searchTerm, setSearchTerm] = useState("")

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  if (!funnel) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <h2 className="text-xl font-semibold mb-2">Funil não encontrado</h2>
        <p className="text-muted-foreground mb-4">O funil que você está procurando não existe.</p>
        <Link href="/funis">
          <Button variant="outline">Voltar para Funis</Button>
        </Link>
      </div>
    )
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (!over) return

    // Extrair dados do item arrastado
    const activeContactId = active.id
    const activeStepId = (active.data.current as any).stepId

    // Encontrar o stepId do destino
    // Assumimos que o over.id é o ID do contato de destino
    // Precisamos encontrar em qual step ele está
    let overStepId = ""
    let overContact = null

    for (const step of funnelState.steps) {
      const foundContact = step.contacts.find((c) => c.id === over.id)
      if (foundContact) {
        overStepId = step.id
        overContact = foundContact
        break
      }
    }

    // Se não encontramos o contato de destino, pode ser que o over.id seja o próprio stepId
    if (!overStepId) {
      overStepId = over.id as string
    }

    // Se o step de origem e destino são os mesmos, não fazemos nada
    if (activeStepId === overStepId && activeContactId === over.id) return

    // Criar uma cópia do estado atual
    const newFunnelState = { ...funnelState }

    // Encontrar o contato a ser movido
    const sourceStepIndex = newFunnelState.steps.findIndex((s) => s.id === activeStepId)
    const contactIndex = newFunnelState.steps[sourceStepIndex].contacts.findIndex((c) => c.id === activeContactId)
    const movedContact = newFunnelState.steps[sourceStepIndex].contacts[contactIndex]

    // Remover o contato do step de origem
    newFunnelState.steps[sourceStepIndex].contacts.splice(contactIndex, 1)

    // Adicionar o contato ao step de destino
    const targetStepIndex = newFunnelState.steps.findIndex((s) => s.id === overStepId)
    newFunnelState.steps[targetStepIndex].contacts.push(movedContact)

    // Atualizar o estado
    setFunnelState(newFunnelState)
  }

  // Filtrar contatos com base no termo de pesquisa
  const filteredFunnel = {
    ...funnelState,
    steps: funnelState.steps.map((step) => ({
      ...step,
      contacts: searchTerm
        ? step.contacts.filter(
            (contact) =>
              contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              contact.phone.toLowerCase().includes(searchTerm.toLowerCase()),
          )
        : step.contacts,
    })),
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Link href="/funis">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{funnel.name}</h1>
            <p className="text-muted-foreground">Visualização Kanban das etapas do funil</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar contatos..."
              className="w-full pl-8 sm:w-[200px] md:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">Adicionar Contatos</Button>
          <Button>Editar Funil</Button>
        </div>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pb-6 overflow-x-auto">
          {filteredFunnel.steps.map((step, index) => (
            <div key={step.id} className="min-w-[300px]">
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="mb-2">{`Etapa ${index + 1}`}</Badge>
                      <CardTitle className="text-lg">{step.name}</CardTitle>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {step.template}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {step.waitTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <SortableContext
                    items={step.contacts.map((contact) => contact.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="space-y-2 min-h-[200px]">
                      {step.contacts.length > 0 ? (
                        step.contacts.map((contact) => (
                          <SortableContactItem key={contact.id} contact={contact} stepId={step.id} />
                        ))
                      ) : (
                        <div
                          className="flex flex-col items-center justify-center py-6 text-center border-2 border-dashed rounded-md h-full min-h-[200px]"
                          id={step.id}
                        >
                          <User className="h-8 w-8 text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">Nenhum contato nesta etapa</p>
                          <Button variant="ghost" size="sm" className="mt-2">
                            <Plus className="h-4 w-4 mr-1" />
                            Adicionar contatos
                          </Button>
                        </div>
                      )}
                    </div>
                  </SortableContext>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  )
}
