# Documentação da API - WhatsApp Campaign Manager

Esta documentação descreve as APIs disponíveis para integração com o WhatsApp Campaign Manager. Estas APIs permitem gerenciar contatos, campanhas, templates, funis e envios de mensagens programaticamente.

## Visão Geral

A API do WhatsApp Campaign Manager segue os princípios REST e utiliza JSON para formatação de dados. Todas as requisições devem incluir um token de autenticação no cabeçalho.

**URL Base**: `https://api.whatsapp-manager.com/v1`

## Autenticação

A API utiliza autenticação baseada em tokens JWT (JSON Web Tokens).

### Obter Token

\`\`\`
POST /auth/login
\`\`\`

**Corpo da Requisição**:
\`\`\`json
{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
\`\`\`

**Resposta**:
\`\`\`json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_at": "2023-12-31T23:59:59Z",
  "user": {
    "id": "usr_123456",
    "name": "Nome do Usuário",
    "email": "usuario@exemplo.com"
  }
}
\`\`\`

### Usar o Token

Inclua o token em todas as requisições no cabeçalho `Authorization`:

\`\`\`
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

## Endpoints

### Contatos

#### Listar Contatos

\`\`\`
GET /contacts
\`\`\`

**Parâmetros de Consulta**:
- `page` (opcional): Número da página (padrão: 1)
- `limit` (opcional): Itens por página (padrão: 20)
- `search` (opcional): Termo de busca
- `category` (opcional): ID da categoria para filtrar
- `status` (opcional): Status do contato (ativo/inativo)

**Resposta**:
\`\`\`json
{
  "data": [
    {
      "id": "cnt_123456",
      "name": "João Silva",
      "phone": "+5511987654321",
      "email": "joao@exemplo.com",
      "category": "cat_123456",
      "category_name": "Cliente",
      "status": "ativo",
      "created_at": "2023-01-15T10:30:00Z",
      "updated_at": "2023-05-20T14:45:00Z"
    },
    // ...mais contatos
  ],
  "pagination": {
    "total": 150,
    "page": 1,
    "limit": 20,
    "pages": 8
  }
}
\`\`\`

#### Obter Contato

\`\`\`
GET /contacts/{contact_id}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "cnt_123456",
  "name": "João Silva",
  "phone": "+5511987654321",
  "email": "joao@exemplo.com",
  "category": "cat_123456",
  "category_name": "Cliente",
  "status": "ativo",
  "tags": ["vip", "ecommerce"],
  "custom_fields": {
    "birthday": "1990-05-15",
    "last_purchase": "2023-04-10"
  },
  "created_at": "2023-01-15T10:30:00Z",
  "updated_at": "2023-05-20T14:45:00Z"
}
\`\`\`

#### Criar Contato

\`\`\`
POST /contacts
\`\`\`

**Corpo da Requisição**:
\`\`\`json
{
  "name": "Maria Oliveira",
  "phone": "+5511987654322",
  "email": "maria@exemplo.com",
  "category": "cat_123456",
  "status": "ativo",
  "tags": ["novo", "site"],
  "custom_fields": {
    "birthday": "1985-10-20"
  }
}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "cnt_123457",
  "name": "Maria Oliveira",
  "phone": "+5511987654322",
  "email": "maria@exemplo.com",
  "category": "cat_123456",
  "category_name": "Cliente",
  "status": "ativo",
  "tags": ["novo", "site"],
  "custom_fields": {
    "birthday": "1985-10-20"
  },
  "created_at": "2023-06-01T09:15:00Z",
  "updated_at": "2023-06-01T09:15:00Z"
}
\`\`\`

#### Atualizar Contato

\`\`\`
PUT /contacts/{contact_id}
\`\`\`

**Corpo da Requisição**:
\`\`\`json
{
  "name": "Maria Silva Oliveira",
  "email": "maria.nova@exemplo.com",
  "status": "inativo"
}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "cnt_123457",
  "name": "Maria Silva Oliveira",
  "phone": "+5511987654322",
  "email": "maria.nova@exemplo.com",
  "category": "cat_123456",
  "category_name": "Cliente",
  "status": "inativo",
  "tags": ["novo", "site"],
  "custom_fields": {
    "birthday": "1985-10-20"
  },
  "created_at": "2023-06-01T09:15:00Z",
  "updated_at": "2023-06-01T10:30:00Z"
}
\`\`\`

#### Excluir Contato

\`\`\`
DELETE /contacts/{contact_id}
\`\`\`

**Resposta**:
\`\`\`json
{
  "success": true,
  "message": "Contato excluído com sucesso"
}
\`\`\`

#### Importar Contatos

\`\`\`
POST /contacts/import
\`\`\`

**Corpo da Requisição** (multipart/form-data):
- `file`: Arquivo CSV ou Excel
- `category` (opcional): ID da categoria para os contatos importados

**Resposta**:
\`\`\`json
{
  "job_id": "job_123456",
  "status": "processing",
  "message": "Importação iniciada. Você será notificado quando concluída."
}
\`\`\`

#### Status da Importação

\`\`\`
GET /contacts/import/{job_id}
\`\`\`

**Resposta**:
\`\`\`json
{
  "job_id": "job_123456",
  "status": "completed",
  "total_records": 150,
  "imported": 145,
  "errors": 5,
  "error_details": [
    {
      "row": 10,
      "message": "Número de telefone inválido"
    },
    // ...mais erros
  ],
  "completed_at": "2023-06-01T10:45:00Z"
}
\`\`\`

### Categorias

#### Listar Categorias

\`\`\`
GET /categories
\`\`\`

**Resposta**:
\`\`\`json
{
  "data": [
    {
      "id": "cat_123456",
      "name": "Cliente",
      "description": "Clientes ativos",
      "contacts_count": 1250,
      "created_at": "2023-01-10T08:00:00Z"
    },
    // ...mais categorias
  ]
}
\`\`\`

#### Criar Categoria

\`\`\`
POST /categories
\`\`\`

**Corpo da Requisição**:
\`\`\`json
{
  "name": "VIP",
  "description": "Clientes premium com alto valor de compra"
}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "cat_123457",
  "name": "VIP",
  "description": "Clientes premium com alto valor de compra",
  "contacts_count": 0,
  "created_at": "2023-06-01T11:00:00Z"
}
\`\`\`

### Campanhas

#### Listar Campanhas

\`\`\`
GET /campaigns
\`\`\`

**Parâmetros de Consulta**:
- `status` (opcional): Filtrar por status (ativa, pausada, rascunho, agendada, encerrada)

**Resposta**:
\`\`\`json
{
  "data": [
    {
      "id": "cmp_123456",
      "name": "Promoção Maio",
      "description": "Campanha promocional de maio",
      "status": "ativa",
      "funnel": "fnl_123456",
      "funnel_name": "Vendas",
      "waba_number": "+5511987654321",
      "contacts_count": 1250,
      "scheduled_for": "2023-05-07T14:00:00Z",
      "created_at": "2023-05-01T10:00:00Z"
    },
    // ...mais campanhas
  ]
}
\`\`\`

#### Criar Campanha

\`\`\`
POST /campaigns
\`\`\`

**Corpo da Requisição**:
\`\`\`json
{
  "name": "Black Friday",
  "description": "Campanha de Black Friday 2023",
  "funnel": "fnl_123456",
  "waba_number": "+5511987654321",
  "contacts": ["cat_123456"],
  "scheduled_for": "2023-11-24T00:00:00Z"
}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "cmp_123457",
  "name": "Black Friday",
  "description": "Campanha de Black Friday 2023",
  "status": "agendada",
  "funnel": "fnl_123456",
  "funnel_name": "Vendas",
  "waba_number": "+5511987654321",
  "contacts_count": 1250,
  "scheduled_for": "2023-11-24T00:00:00Z",
  "created_at": "2023-06-01T11:30:00Z"
}
\`\`\`

#### Pausar/Retomar Campanha

\`\`\`
PUT /campaigns/{campaign_id}/status
\`\`\`

**Corpo da Requisição**:
\`\`\`json
{
  "status": "pausada"
}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "cmp_123457",
  "name": "Black Friday",
  "status": "pausada",
  "updated_at": "2023-06-01T12:00:00Z"
}
\`\`\`

### Funis

#### Listar Funis

\`\`\`
GET /funnels
\`\`\`

**Resposta**:
\`\`\`json
{
  "data": [
    {
      "id": "fnl_123456",
      "name": "Onboarding de Clientes",
      "status": "ativo",
      "steps_count": 3,
      "created_at": "2023-02-15T09:00:00Z"
    },
    // ...mais funis
  ]
}
\`\`\`

#### Obter Funil com Etapas

\`\`\`
GET /funnels/{funnel_id}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "fnl_123456",
  "name": "Onboarding de Clientes",
  "status": "ativo",
  "steps": [
    {
      "id": "stp_123456",
      "name": "Boas-vindas",
      "order": 1,
      "template": "tpl_123456",
      "template_name": "Boas-vindas",
      "wait_time": 0,
      "wait_time_unit": "minutes"
    },
    {
      "id": "stp_123457",
      "name": "Confirmação",
        "minutes"
    },
    {
      "id": "stp_123457",
      "name": "Confirmação",
      "order": 2,
      "template": "tpl_123457",
      "template_name": "Confirmação",
      "wait_time": 24,
      "wait_time_unit": "hours"
    },
    {
      "id": "stp_123458",
      "name": "Lembrete",
      "order": 3,
      "template": "tpl_123458",
      "template_name": "Lembrete",
      "wait_time": 3,
      "wait_time_unit": "days"
    }
  ],
  "created_at": "2023-02-15T09:00:00Z",
  "updated_at": "2023-05-10T14:30:00Z"
}
\`\`\`

#### Criar Funil

\`\`\`
POST /funnels
\`\`\`

**Corpo da Requisição**:
\`\`\`json
{
  "name": "Recuperação de Carrinho",
  "status": "ativo",
  "steps": [
    {
      "name": "Lembrete Inicial",
      "order": 1,
      "template": "tpl_123459",
      "wait_time": 1,
      "wait_time_unit": "hours"
    },
    {
      "name": "Oferta Especial",
      "order": 2,
      "template": "tpl_123460",
      "wait_time": 24,
      "wait_time_unit": "hours"
    }
  ]
}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "fnl_123457",
  "name": "Recuperação de Carrinho",
  "status": "ativo",
  "steps": [
    {
      "id": "stp_123459",
      "name": "Lembrete Inicial",
      "order": 1,
      "template": "tpl_123459",
      "template_name": "Lembrete de Carrinho",
      "wait_time": 1,
      "wait_time_unit": "hours"
    },
    {
      "id": "stp_123460",
      "name": "Oferta Especial",
      "order": 2,
      "template": "tpl_123460",
      "template_name": "Desconto Carrinho",
      "wait_time": 24,
      "wait_time_unit": "hours"
    }
  ],
  "created_at": "2023-06-01T13:00:00Z"
}
\`\`\`

### Templates

#### Listar Templates

\`\`\`
GET /templates
\`\`\`

**Parâmetros de Consulta**:
- `status` (opcional): Filtrar por status (aprovado, pendente, recusado)
- `language` (opcional): Filtrar por idioma (pt_BR, en_US, etc.)

**Resposta**:
\`\`\`json
{
  "data": [
    {
      "id": "tpl_123456",
      "name": "Boas-vindas",
      "status": "aprovado",
      "language": "pt_BR",
      "category": "marketing",
      "last_updated": "2023-04-15T10:00:00Z"
    },
    // ...mais templates
  ]
}
\`\`\`

#### Obter Template

\`\`\`
GET /templates/{template_id}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "tpl_123456",
  "name": "Boas-vindas",
  "status": "aprovado",
  "language": "pt_BR",
  "category": "marketing",
  "content": "Olá {{nome}}, seja bem-vindo à nossa plataforma! Estamos felizes em tê-lo conosco.",
  "variables": ["nome"],
  "last_updated": "2023-04-15T10:00:00Z"
}
\`\`\`

#### Criar Template

\`\`\`
POST /templates
\`\`\`

**Corpo da Requisição**:
\`\`\`json
{
  "name": "Promoção Especial",
  "language": "pt_BR",
  "category": "marketing",
  "content": "Olá {{nome}}, temos uma oferta especial para você! Use o cupom {{cupom}} para {{desconto}}% de desconto em sua próxima compra.",
  "variables": ["nome", "cupom", "desconto"]
}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "tpl_123461",
  "name": "Promoção Especial",
  "status": "pendente",
  "language": "pt_BR",
  "category": "marketing",
  "content": "Olá {{nome}}, temos uma oferta especial para você! Use o cupom {{cupom}} para {{desconto}}% de desconto em sua próxima compra.",
  "variables": ["nome", "cupom", "desconto"],
  "created_at": "2023-06-01T14:00:00Z"
}
\`\`\`

### Disparos

#### Listar Disparos

\`\`\`
GET /sends
\`\`\`

**Parâmetros de Consulta**:
- `campaign` (opcional): ID da campanha
- `status` (opcional): Status do envio (pendente, enviado, entregue, lido, erro)
- `contact` (opcional): ID do contato
- `date_from` (opcional): Data inicial (formato ISO)
- `date_to` (opcional): Data final (formato ISO)
- `page` (opcional): Número da página
- `limit` (opcional): Itens por página

**Resposta**:
\`\`\`json
{
  "data": [
    {
      "id": "snd_123456",
      "contact": "cnt_123456",
      "contact_name": "João Silva",
      "phone": "+5511987654321",
      "campaign": "cmp_123456",
      "campaign_name": "Promoção Maio",
      "funnel_step": "stp_123456",
      "funnel_step_name": "Boas-vindas",
      "template": "tpl_123456",
      "template_name": "Boas-vindas",
      "status": "entregue",
      "date": "2023-05-07T14:32:00Z"
    },
    // ...mais disparos
  ],
  "pagination": {
    "total": 12458,
    "page": 1,
    "limit": 20,
    "pages": 623
  }
}
\`\`\`

#### Obter Detalhes do Disparo

\`\`\`
GET /sends/{send_id}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "snd_123456",
  "contact": "cnt_123456",
  "contact_name": "João Silva",
  "phone": "+5511987654321",
  "campaign": "cmp_123456",
  "campaign_name": "Promoção Maio",
  "funnel_step": "stp_123456",
  "funnel_step_name": "Boas-vindas",
  "template": "tpl_123456",
  "template_name": "Boas-vindas",
  "message": "Olá João, temos uma promoção especial para você! Aproveite 20% de desconto em todos os produtos.",
  "status": "entregue",
  "api_response": {
    "id": "wamid.abcdefg123456789",
    "status": "delivered",
    "timestamp": "1683472320"
  },
  "timestamps": {
    "sent": "2023-05-07T14:32:00Z",
    "delivered": "2023-05-07T14:32:05Z",
    "read": "2023-05-07T14:35:22Z"
  }
}
\`\`\`

#### Reenviar Mensagem

\`\`\`
POST /sends/{send_id}/resend
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "snd_123457",
  "original_send_id": "snd_123456",
  "status": "pendente",
  "created_at": "2023-06-01T15:00:00Z"
}
\`\`\`

### Envio Direto de Mensagens

#### Enviar Mensagem WhatsApp

\`\`\`
POST /messages/whatsapp
\`\`\`

**Corpo da Requisição**:
\`\`\`json
{
  "to": "+5511987654321",
  "template": "tpl_123456",
  "variables": {
    "nome": "João Silva",
    "cupom": "PROMO20",
    "desconto": "20"
  },
  "waba_number": "+5511987654321"
}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "snd_123458",
  "status": "enviado",
  "message_id": "wamid.abcdefg123456790",
  "created_at": "2023-06-01T15:30:00Z"
}
\`\`\`

#### Enviar Mensagem SMS

\`\`\`
POST /messages/sms
\`\`\`

**Corpo da Requisição**:
\`\`\`json
{
  "to": "+5511987654321",
  "message": "Olá João, temos uma promoção especial para você! Use o cupom PROMO20 para 20% de desconto.",
  "sender_id": "MinhaEmpresa"
}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "sms_123456",
  "status": "enviado",
  "message_id": "sms_provider_id_123456",
  "created_at": "2023-06-01T15:45:00Z"
}
\`\`\`

### Webhooks

#### Listar Webhooks Configurados

\`\`\`
GET /webhooks
\`\`\`

**Resposta**:
\`\`\`json
{
  "data": [
    {
      "id": "whk_123456",
      "url": "https://api.seudominio.com/webhook/whatsapp",
      "events": ["message.status", "template.status"],
      "active": true,
      "created_at": "2023-03-10T09:00:00Z"
    }
  ]
}
\`\`\`

#### Criar Webhook

\`\`\`
POST /webhooks
\`\`\`

**Corpo da Requisição**:
\`\`\`json
{
  "url": "https://api.seudominio.com/webhook/whatsapp",
  "events": ["message.status", "template.status"],
  "active": true
}
\`\`\`

**Resposta**:
\`\`\`json
{
  "id": "whk_123457",
  "url": "https://api.seudominio.com/webhook/whatsapp",
  "events": ["message.status", "template.status"],
  "active": true,
  "verify_token": "seu_token_secreto",
  "created_at": "2023-06-01T16:00:00Z"
}
\`\`\`

## Eventos de Webhook

A API envia notificações para os webhooks configurados quando ocorrem determinados eventos.

### Formato dos Eventos

\`\`\`json
{
  "event": "message.status.delivered",
  "timestamp": "2023-06-01T16:15:00Z",
  "data": {
    "message_id": "wamid.abcdefg123456789",
    "send_id": "snd_123456",
    "status": "delivered",
    "recipient": "+5511987654321",
    "timestamp": "2023-06-01T16:15:00Z"
  }
}
\`\`\`

### Tipos de Eventos

- `message.status.sent`: Mensagem enviada
- `message.status.delivered`: Mensagem entregue
- `message.status.read`: Mensagem lida
- `message.status.failed`: Falha no envio da mensagem
- `template.status.approved`: Template aprovado
- `template.status.rejected`: Template rejeitado
- `campaign.started`: Campanha iniciada
- `campaign.completed`: Campanha concluída
- `import.completed`: Importação de contatos concluída

## Códigos de Erro

| Código | Descrição |
|--------|-----------|
| 400 | Requisição inválida |
| 401 | Não autorizado |
| 403 | Acesso proibido |
| 404 | Recurso não encontrado |
| 422 | Erro de validação |
| 429 | Muitas requisições |
| 500 | Erro interno do servidor |

### Exemplo de Erro

\`\`\`json
{
  "error": {
    "code": 422,
    "message": "Erro de validação",
    "details": [
      {
        "field": "phone",
        "message": "Número de telefone inválido"
      }
    ]
  }
}
\`\`\`

## Limites de Taxa

A API possui limites de taxa para evitar sobrecarga:

- 100 requisições por minuto por token de API
- 10.000 requisições por dia por token de API

Quando o limite é excedido, a API retorna o código de status 429 (Too Many Requests).

## Integração com SMS

A API suporta integração com diversos provedores de SMS para envio de mensagens alternativas ou como fallback para mensagens WhatsApp.

### Provedores Suportados

- Twilio
- Zenvia
- Infobip
- Sinch
- Personalizado (API genérica)

### Configuração de Provedor SMS

\`\`\`
POST /settings/sms
\`\`\`

**Corpo da Requisição**:
\`\`\`json
{
  "provider": "twilio",
  "api_url": "https://api.twilio.com/2010-04-01/Accounts/{account_sid}/Messages.json",
  "api_key": "sua_api_key",
  "api_secret": "seu_api_secret",
  "sender_id": "MinhaEmpresa",
  "use_as_fallback": true
}
\`\`\`

**Resposta**:
\`\`\`json
{
  "provider": "twilio",
  "api_url": "https://api.twilio.com/2010-04-01/Accounts/{account_sid}/Messages.json",
  "sender_id": "MinhaEmpresa",
  "use_as_fallback": true,
  "updated_at": "2023-06-01T16:30:00Z"
}
\`\`\`

## Considerações de Segurança

1. Todas as requisições devem ser feitas via HTTPS
2. Os tokens de API devem ser mantidos em segurança
3. Recomenda-se a rotação periódica dos tokens de API
4. Os webhooks devem ser configurados com HTTPS e validação de token

## Ambiente de Sandbox

Para testes, utilize o ambiente de sandbox:

**URL Base**: `https://sandbox-api.whatsapp-manager.com/v1`

No ambiente de sandbox:
- As mensagens não são enviadas para os destinatários reais
- Os templates não precisam de aprovação
- Não há cobrança por mensagens enviadas

## Suporte

Para suporte à API, entre em contato através do email: api-support@suaempresa.com
\`\`\`

Vamos atualizar o componente sidebar para refletir as novas rotas:

```typescriptreact file="components/sidebar.tsx"
[v0-no-op-code-block-prefix]"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Contact, FolderKanban, LayoutDashboard, MessageSquare, Send, Settings, Tag, LayoutTemplateIcon as Templates } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

// Atualizar as rotas no array sidebarItems
const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Contatos",
    href: "/dashboard/contatos",
    icon: Contact,
  },
  {
    name: "Categorias",
    href: "/dashboard/categorias",
    icon: Tag,
  },
  {
    name: "Campanhas",
    href: "/dashboard/campanhas",
    icon: MessageSquare,
  },
  {
    name: "Funis",
    href: "/dashboard/funis",
    icon: FolderKanban,
  },
  {
    name: "Templates",
    href: "/dashboard/templates",
    icon: Templates,
  },
  {
    name: "Disparos",
    href: "/dashboard/disparos",
    icon: Send,
  },
  {
    name: "Configurações",
    href: "/dashboard/configuracoes",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-card md:block md:w-64">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-blue-600 dark:text-blue-400">
          <BarChart3 className="h-6 w-6" />
          <span>WhatsApp Manager</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="px-3 py-2">
          <nav className="flex flex-col gap-1">
            {sidebarItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "justify-start gap-2 text-sm font-medium",
                  pathname === item.href
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                    : "text-slate-600 dark:text-slate-300",
                )}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </div>
  )
}
