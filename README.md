# WhatsApp Campaign Manager

![WhatsApp Campaign Manager](https://placeholder.pics/svg/1200x630/EAEAEA/CCCCCC/WhatsApp%20Campaign%20Manager)

## Visão Geral

O WhatsApp Campaign Manager é uma plataforma completa para gerenciamento de campanhas de disparo em massa via WhatsApp Business API. Desenvolvido com Next.js e Tailwind CSS, o sistema oferece uma interface moderna e responsiva para gerenciar contatos, criar campanhas, configurar funis de mensagens automatizadas e monitorar o desempenho dos envios.

## Funcionalidades Principais

- **Dashboard Analítico**: Visualização de métricas e KPIs importantes
- **Gerenciamento de Contatos**: Importação, categorização e segmentação de contatos
- **Campanhas**: Criação e agendamento de campanhas de mensagens
- **Funis de Mensagens**: Automação de sequências de mensagens com intervalos configuráveis
- **Templates**: Criação e gerenciamento de templates aprovados pelo WhatsApp
- **Monitoramento de Disparos**: Acompanhamento em tempo real do status de cada mensagem
- **Configurações**: Integração com Meta Business API e configuração de webhooks
- **Tema Escuro**: Suporte completo a tema escuro em toda a aplicação

## Tecnologias Utilizadas

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Gráficos**: Chart.js, React-Chartjs-2
- **Estilização**: Tailwind CSS
- **Formulários**: React Hook Form (implícito nos componentes)
- **Integração**: WhatsApp Business API, Meta API

## Estrutura do Projeto

\`\`\`
whatsapp-dashboard/
├── app/                    # Rotas e páginas (App Router)
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Dashboard principal
│   ├── campanhas/          # Gerenciamento de campanhas
│   ├── categorias/         # Gerenciamento de categorias
│   ├── configuracoes/      # Configurações do sistema
│   ├── contatos/           # Gerenciamento de contatos
│   ├── disparos/           # Monitoramento de disparos
│   ├── funis/              # Gerenciamento de funis
│   └── templates/          # Gerenciamento de templates
├── components/             # Componentes reutilizáveis
│   ├── charts.tsx          # Componentes de gráficos
│   ├── dashboard-cards.tsx # Cards do dashboard
│   ├── header.tsx          # Cabeçalho da aplicação
│   ├── new-campaign-modal.tsx # Modal de nova campanha
│   ├── new-category-modal.tsx # Modal de nova categoria
│   ├── new-funnel-modal.tsx   # Modal de novo funil
│   ├── new-template-modal.tsx # Modal de novo template
│   ├── recent-sends-table.tsx # Tabela de envios recentes
│   ├── send-details-modal.tsx # Modal de detalhes do envio
│   ├── sidebar.tsx         # Barra lateral de navegação
│   ├── table-pagination.tsx # Componente de paginação para tabelas
│   ├── theme-toggle.tsx    # Alternador de tema claro/escuro
│   ├── import-contacts-modal.tsx # Modal de importação de contatos
│   ├── export-modal.tsx    # Modal de exportação de dados
│   ├── new-contact-modal.tsx # Modal de novo contato
│   └── ui/                 # Componentes de UI (shadcn)
├── hooks/                  # Hooks personalizados
│   └── use-resize-observer.ts # Hook para observar redimensionamento
├── lib/                    # Utilitários e funções auxiliares
│   └── utils.ts            # Funções utilitárias
├── public/                 # Arquivos estáticos
└── tailwind.config.ts      # Configuração do Tailwind CSS
\`\`\`

## Páginas e Funcionalidades

### Dashboard

A página inicial apresenta uma visão geral das métricas principais:
- Total de contatos, campanhas, envios e templates
- Gráfico de linha mostrando envios por dia
- Gráfico de barras mostrando status dos envios
- Tabela com os envios mais recentes

### Contatos

Gerenciamento completo de contatos:
- Listagem com filtros, busca e paginação
- Importação e exportação de contatos
- Categorização de contatos
- Visualização de status (ativo/inativo)
- Modal para adicionar novos contatos

### Categorias

Organização de contatos em categorias:
- Criação e edição de categorias
- Visualização de contatos por categoria
- Descrição e metadados de categorias

### Campanhas

Criação e gerenciamento de campanhas de disparo:
- Assistente de criação em 5 etapas
- Seleção de contatos e templates
- Agendamento de envios
- Monitoramento de status

### Funis

Automação de sequências de mensagens:
- Criação de funis com múltiplas etapas
- Configuração de intervalos entre mensagens
- Seleção de templates para cada etapa
- Ativação/desativação de funis

### Templates

Gerenciamento de templates aprovados pelo WhatsApp:
- Criação e edição de templates
- Suporte a variáveis dinâmicas
- Visualização de status de aprovação
- Categorização de templates

### Disparos

Monitoramento detalhado de cada mensagem enviada:
- Filtros por campanha, status, período e contato
- Visualização de status em tempo real
- Detalhes completos de cada envio
- Timeline do ciclo de vida da mensagem
- Reenvio de mensagens com erro
- Paginação para navegar entre os registros
- Exportação de dados de disparos

### Configurações

Configurações técnicas da plataforma:
- Credenciais da API Meta
- Configuração de webhooks
- Gerenciamento de números WABA
- Configurações de eventos e notificações

## Status dos Envios

O sistema rastreia os seguintes status para cada mensagem:

- **Pendente**: Mensagem agendada, aguardando envio
- **Enviado**: Mensagem enviada para a API do WhatsApp
- **Entregue**: Mensagem entregue ao dispositivo do destinatário
- **Lido**: Mensagem visualizada pelo destinatário
- **Erro**: Falha no envio da mensagem

## Tema Escuro

O sistema oferece suporte completo a tema escuro:
- Alternador de tema no cabeçalho
- Cores otimizadas para leitura em ambientes escuros
- Transição suave entre temas claro e escuro
- Persistência da preferência do usuário

## Instalação e Configuração

### Requisitos

- Node.js 18.0 ou superior
- NPM ou Yarn
- Conta no WhatsApp Business API

### Passos para Instalação

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/sua-empresa/whatsapp-campaign-manager.git
   cd whatsapp-campaign-manager
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   npm install
   # ou
   yarn install
   \`\`\`

3. Configure as variáveis de ambiente:
   \`\`\`
   # .env.local
   META_APP_ID=seu_app_id
   META_APP_SECRET=seu_app_secret
   META_ACCESS_TOKEN=seu_token_de_acesso
   META_BUSINESS_ID=seu_business_id
   \`\`\`

4. Inicie o servidor de desenvolvimento:
   \`\`\`bash
   npm run dev
   # ou
   yarn dev
   \`\`\`

5. Acesse a aplicação em `http://localhost:3000`

## Integração com WhatsApp Business API

Para utilizar o sistema, é necessário:

1. Ter uma conta aprovada no WhatsApp Business API
2. Criar um aplicativo no Meta for Developers
3. Configurar os webhooks para receber notificações
4. Obter aprovação para os templates de mensagens

## Melhorias Implementadas

- **Paginação nas Tabelas**: Navegação eficiente em grandes conjuntos de dados
- **Modais para Ações de Contatos**: Interfaces para importação, exportação e criação de contatos
- **Modal para Exportação de Disparos**: Exportação de dados de envios em diferentes formatos
- **Tema Escuro**: Suporte completo a tema escuro em todo o sistema

## Melhorias Futuras

- **Autenticação e Multiusuário**: Sistema de login e permissões
- **Integrações Adicionais**: CRM, e-commerce e outras plataformas
- **Análise Avançada**: Relatórios personalizados e exportáveis
- **Automação Avançada**: Gatilhos baseados em comportamento
- **Chatbot**: Respostas automatizadas com IA
- **Multilingue**: Suporte a múltiplos idiomas

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Suporte

Para suporte, entre em contato através do email: suporte@suaempresa.com
