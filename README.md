# WhatsApp Campaign Manager

![WhatsApp Campaign Manager](/dashboard-preview.png)

## Visão Geral

O WhatsApp Campaign Manager é uma plataforma completa para gerenciamento de campanhas de disparo em massa via WhatsApp Business API. Desenvolvido com Next.js 15 e Tailwind CSS, o sistema oferece uma interface moderna e responsiva para gerenciar contatos, criar campanhas, configurar funis de mensagens automatizadas e monitorar o desempenho dos envios.

## Funcionalidades Principais

- **Dashboard Analítico**: Visualização de métricas e KPIs importantes
- **Gerenciamento de Contatos**: Importação, categorização, edição e segmentação de contatos
- **Campanhas**: Criação e agendamento de campanhas de mensagens
- **Funis de Mensagens**: Automação de sequências de mensagens com visualização Kanban
- **Templates**: Criação e gerenciamento de templates aprovados pelo WhatsApp
- **Monitoramento de Disparos**: Acompanhamento em tempo real do status de cada mensagem
- **Relatórios**: Gráficos e análises detalhadas de desempenho
- **Configurações**: Integração com Meta Business API e configuração de webhooks
- **Tema Escuro**: Suporte completo a tema escuro em toda a aplicação
- **Integração SMS**: Envio de SMS como alternativa ou fallback para mensagens WhatsApp
- **Landing Page**: Página de marketing com planos, preços e depoimentos
- **Autenticação**: Sistema de login, cadastro e recuperação de senha

## Tecnologias Utilizadas

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Gráficos**: Chart.js, React-Chartjs-2
- **Drag and Drop**: @dnd-kit/core para funcionalidade Kanban
- **Formulários**: React Hook Form
- **Integração**: WhatsApp Business API, Meta API, SMS APIs

## Estrutura do Projeto

\`\`\`
whatsapp-dashboard/
├── app/                    # Rotas e páginas (App Router)
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Landing page principal
│   ├── layout-dashboard.tsx # Layout compartilhado para área administrativa
│   ├── dashboard/          # Área administrativa
│   │   ├── page.tsx        # Dashboard principal
│   │   └── layout.tsx      # Layout para dashboard
│   ├── contatos/           # Gerenciamento de contatos
│   ├── categorias/         # Gerenciamento de categorias
│   ├── campanhas/          # Gerenciamento de campanhas
│   ├── funis/              # Gerenciamento de funis
│   │   ├── page.tsx        # Lista de funis
│   │   └── [id]/           # Detalhes do funil com visualização Kanban
│   ├── templates/          # Gerenciamento de templates
│   ├── disparos/           # Monitoramento de disparos
│   ├── relatorios/         # Relatórios e análises
│   ├── configuracoes/      # Configurações do sistema
│   └── auth/               # Páginas de autenticação
│       ├── login/          # Login
│       ├── cadastro/       # Cadastro
│       └── recuperar/      # Recuperação de senha
├── components/             # Componentes reutilizáveis
│   ├── charts.tsx          # Componentes de gráficos
│   ├── charts-wrapper.tsx  # Wrappers de cliente para os gráficos
│   ├── dashboard-cards.tsx # Cards do dashboard
│   ├── header.tsx          # Cabeçalho da aplicação
│   ├── sidebar.tsx         # Barra lateral de navegação
│   ├── footer.tsx          # Rodapé da aplicação
│   ├── edit-contact-modal.tsx # Modal de edição de contatos
│   ├── new-campaign-modal.tsx # Modal de nova campanha
│   ├── new-category-modal.tsx # Modal de nova categoria
│   ├── new-funnel-modal.tsx   # Modal de novo funil
│   ├── new-template-modal.tsx # Modal de novo template
│   ├── new-contact-modal.tsx  # Modal de novo contato
│   ├── import-contacts-modal.tsx # Modal de importação de contatos
│   ├── export-modal.tsx    # Modal de exportação de dados
│   ├── send-details-modal.tsx # Modal de detalhes do envio
│   ├── table-pagination.tsx # Componente de paginação para tabelas
│   ├── theme-toggle.tsx    # Alternador de tema claro/escuro
│   └── ui/                 # Componentes de UI (shadcn)
├── hooks/                  # Hooks personalizados
│   └── use-resize-observer.ts # Hook para observar redimensionamento
├── lib/                    # Utilitários e funções auxiliares
│   └── utils.ts            # Funções utilitárias
├── middleware.ts           # Middleware para autenticação e redirecionamentos
├── public/                 # Arquivos estáticos
│   └── dashboard-preview.png # Imagem de preview do dashboard
└── tailwind.config.ts      # Configuração do Tailwind CSS
\`\`\`

## Funcionalidades Detalhadas

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
- Edição de contatos através de modal dedicado
- Visualização de status (ativo/inativo)
- Modal para adicionar novos contatos

### Funis

Automação de sequências de mensagens:
- Criação de funis com múltiplas etapas
- Visualização Kanban com drag-and-drop para gerenciar etapas
- Configuração de intervalos entre mensagens
- Seleção de templates para cada etapa
- Ativação/desativação de funis
- Página detalhada para cada funil

### Relatórios

Análise detalhada de desempenho:
- Gráficos interativos para visualização de dados
- Métricas de conversão e engajamento
- Análise de desempenho por campanha
- Exportação de relatórios

## Navegação e Autenticação

O sistema implementa um fluxo completo de navegação e autenticação:

- **Landing Page**: Apresenta o produto com informações sobre recursos, preços e depoimentos
- **Autenticação**: Sistema de login, cadastro e recuperação de senha
- **Middleware**: Protege rotas privadas e redireciona usuários não autenticados
- **Navegação**: Sidebar intuitiva para acesso a todas as funcionalidades
- **Logout**: Processo seguro de saída que limpa cookies e redireciona para a página de login

## Instalação e Configuração

### Requisitos

- Node.js 18.18.0 ou superior
- NPM, Yarn ou pnpm
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
   # ou
   pnpm install
   \`\`\`

3. Configure as variáveis de ambiente:
   \`\`\`
   # .env.local
   META_APP_ID=seu_app_id
   META_APP_SECRET=seu_app_secret
   META_ACCESS_TOKEN=seu_token_de_acesso
   META_BUSINESS_ID=seu_business_id
   SMS_API_KEY=sua_chave_api_sms
   SMS_API_URL=url_api_sms
   \`\`\`

4. Inicie o servidor de desenvolvimento:
   \`\`\`bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   \`\`\`

5. Acesse a aplicação em `http://localhost:3000`

### Construção para Produção

1. Construa a aplicação:
   \`\`\`bash
   npm run build
   # ou
   yarn build
   # ou
   pnpm build
   \`\`\`

2. Inicie o servidor de produção:
   \`\`\`bash
   npm start
   # ou
   yarn start
   # ou
   pnpm start
   \`\`\`

## Resolução de Problemas Comuns

### Erro de Renderização de Componentes

Se encontrar erros relacionados a componentes indefinidos durante a construção:

1. Verifique se todos os componentes estão sendo exportados corretamente
2. Para componentes que usam hooks do React, certifique-se de que estão marcados com `'use client'`
3. Para páginas que usam componentes do cliente, use wrappers específicos (como `charts-wrapper.tsx`)

### Problemas de Navegação

Se os links não estiverem funcionando corretamente:

1. Verifique o middleware.ts para garantir que as rotas estão configuradas corretamente
2. Certifique-se de que os componentes Link estão implementados corretamente
3. Para operações de logout, use `window.location.href` em vez de `router.push()`

## Integração com WhatsApp Business API

Para utilizar o sistema, é necessário:

1. Ter uma conta aprovada no WhatsApp Business API
2. Criar um aplicativo no Meta for Developers
3. Configurar os webhooks para receber notificações
4. Obter aprovação para os templates de mensagens

## Melhorias Implementadas

- **Visualização Kanban para Funis**: Interface drag-and-drop para gerenciar etapas de funis
- **Edição de Contatos**: Modal dedicado para edição de informações de contatos
- **Relatórios Avançados**: Gráficos interativos para análise de desempenho
- **Landing Page Completa**: Informações detalhadas sobre o produto, preços e depoimentos
- **Navegação Aprimorada**: Fluxo intuitivo entre páginas públicas e área administrativa
- **Tema Escuro**: Suporte completo a tema escuro em todo o sistema
- **Autenticação Robusta**: Sistema completo de login, cadastro e recuperação de senha

## Melhorias Futuras

- **Multiusuário**: Sistema de permissões e papéis de usuário
- **Integrações Adicionais**: CRM, e-commerce e outras plataformas
- **Análise Avançada**: Relatórios personalizados e exportáveis
- **Automação Avançada**: Gatilhos baseados em comportamento
- **Chatbot**: Respostas automatizadas com IA
- **Multilingue**: Suporte a múltiplos idiomas
- **Notificações**: Sistema de alertas e notificações em tempo real
- **Temas Personalizáveis**: Opções adicionais de personalização visual

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## Suporte

Para suporte, entre em contato através do email: suporte@suaempresa.com
