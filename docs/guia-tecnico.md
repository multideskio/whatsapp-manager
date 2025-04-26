# Documentação Técnica - WhatsApp Marketing Dashboard

## Índice

1. [Visão Geral da Arquitetura](#visão-geral-da-arquitetura)
2. [Fluxo de Funcionamento](#fluxo-de-funcionamento)
3. [Requisitos Técnicos](#requisitos-técnicos)
4. [Autenticação e Autorização](#autenticação-e-autorização)
5. [Integração com WhatsApp Business API](#integração-com-whatsapp-business-api)
6. [Estrutura de Dados](#estrutura-de-dados)
7. [API Endpoints](#api-endpoints)
8. [Webhooks](#webhooks)
9. [Processamento de Mensagens](#processamento-de-mensagens)
10. [Sistema de Filas](#sistema-de-filas)
11. [Limitações e Considerações](#limitações-e-considerações)
12. [Monitoramento e Logs](#monitoramento-e-logs)
13. [Segurança](#segurança)
14. [Escalabilidade](#escalabilidade)

## Visão Geral da Arquitetura

O WhatsApp Marketing Dashboard é uma aplicação web construída com:

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js/Express ou similar (a ser implementado)
- **Banco de Dados**: PostgreSQL/MySQL para dados estruturados
- **Cache**: Redis para gerenciamento de sessões e cache
- **Filas**: RabbitMQ/Redis para processamento assíncrono de mensagens
- **Armazenamento**: S3 ou similar para armazenamento de arquivos

A arquitetura segue um modelo de microserviços com os seguintes componentes principais:

1. **Serviço de Autenticação**: Gerencia usuários, autenticação e autorização
2. **Serviço de Contatos**: Gerencia contatos e categorias
3. **Serviço de Mensagens**: Gerencia templates e campanhas
4. **Serviço de Disparos**: Gerencia o envio e monitoramento de mensagens
5. **Serviço de Funis**: Gerencia funis de vendas e etapas
6. **Serviço de Relatórios**: Gera e armazena relatórios e métricas
7. **Serviço de Integração**: Gerencia a comunicação com a API do WhatsApp Business

## Fluxo de Funcionamento

O fluxo básico de funcionamento da plataforma é:

1. **Onboarding do Usuário**:
   - Criação de conta
   - Verificação de e-mail
   - Configuração inicial do perfil

2. **Integração com WhatsApp Business API**:
   - Configuração das credenciais da API do Facebook
   - Verificação e validação da conexão
   - Configuração do webhook para recebimento de mensagens

3. **Configuração da Plataforma**:
   - Criação de categorias para organização de contatos
   - Importação inicial de contatos
   - Configuração de campos personalizados

4. **Criação de Templates**:
   - Criação de templates de mensagens
   - Submissão para aprovação do WhatsApp
   - Monitoramento do status de aprovação

5. **Gerenciamento de Campanhas**:
   - Criação de campanhas
   - Seleção de contatos/categorias
   - Agendamento de envios

6. **Gerenciamento de Funis**:
   - Criação de funis de vendas
   - Definição de etapas
   - Movimentação de contatos entre etapas

7. **Monitoramento e Análise**:
   - Acompanhamento de métricas de envio
   - Geração de relatórios
   - Análise de desempenho

## Requisitos Técnicos

### Backend

- Node.js 18+ ou similar
- Framework web (Express, Fastify, NestJS)
- ORM para acesso ao banco de dados (Prisma, Sequelize, TypeORM)
- Sistema de filas para processamento assíncrono
- Sistema de cache

### Banco de Dados

- PostgreSQL 14+ ou MySQL 8+
- Redis para cache e filas

### Infraestrutura

- Serviço de hospedagem com suporte a containers (AWS, GCP, Azure)
- Sistema de CI/CD
- Monitoramento e logging
- Backup automatizado

## Autenticação e Autorização

### Sistema de Autenticação

- Autenticação baseada em JWT (JSON Web Tokens)
- Refresh tokens para renovação de sessão
- Opção de autenticação de dois fatores (2FA)
- Integração com provedores OAuth (Google, Facebook)

### Níveis de Acesso

1. **Administrador**: Acesso completo a todas as funcionalidades
2. **Gerente**: Acesso a gerenciamento de campanhas, contatos e relatórios
3. **Operador**: Acesso limitado a contatos e funis
4. **Visualizador**: Acesso somente leitura a relatórios e dados

## Integração com WhatsApp Business API

### Requisitos para Integração

1. Conta Business no Facebook
2. Número de telefone verificado para WhatsApp Business
3. Acesso à API do WhatsApp Business (via Facebook Developer Portal)
4. Token de acesso permanente ou processo de renovação

### Processo de Integração

1. O usuário obtém as credenciais no Facebook Developer Portal
2. Configura as credenciais na plataforma
3. A plataforma valida as credenciais
4. Configura o webhook para recebimento de mensagens
5. Testa a conexão enviando uma mensagem de teste

### Webhooks

A plataforma deve configurar um endpoint para receber notificações da API do WhatsApp sobre:

- Entrega de mensagens
- Leitura de mensagens
- Respostas de usuários
- Erros de envio
- Atualizações de status de templates

## Estrutura de Dados

### Principais Entidades

#### Usuários
\`\`\`json
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "password": "string (hashed)",
  "company": "string",
  "role": "enum (admin, manager, operator, viewer)",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
\`\`\`

#### Configuração WhatsApp
\`\`\`json
{
  "id": "uuid",
  "userId": "uuid",
  "phoneNumberId": "string",
  "businessAccountId": "string",
  "accessToken": "string (encrypted)",
  "webhookSecret": "string",
  "status": "enum (active, inactive, pending)",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
\`\`\`

#### Categorias
\`\`\`json
{
  "id": "uuid",
  "userId": "uuid",
  "name": "string",
  "description": "string",
  "color": "string (hex)",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
\`\`\`

#### Contatos
\`\`\`json
{
  "id": "uuid",
  "userId": "uuid",
  "name": "string",
  "phoneNumber": "string",
  "email": "string",
  "customFields": "json",
  "tags": "array",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
\`\`\`

#### Contato-Categoria (Relação)
\`\`\`json
{
  "contactId": "uuid",
  "categoryId": "uuid"
}
\`\`\`

#### Templates
\`\`\`json
{
  "id": "uuid",
  "userId": "uuid",
  "name": "string",
  "category": "enum (marketing, utility, authentication)",
  "content": "string",
  "variables": "array",
  "components": "json",
  "status": "enum (pending, approved, rejected)",
  "whatsappTemplateId": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
\`\`\`

#### Campanhas
\`\`\`json
{
  "id": "uuid",
  "userId": "uuid",
  "name": "string",
  "description": "string",
  "templateId": "uuid",
  "status": "enum (draft, scheduled, in_progress, completed, cancelled)",
  "scheduledAt": "timestamp",
  "completedAt": "timestamp",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
\`\`\`

#### Campanha-Contato (Relação)
\`\`\`json
{
  "campaignId": "uuid",
  "contactId": "uuid",
  "status": "enum (pending, sent, delivered, read, replied, failed)",
  "sentAt": "timestamp",
  "deliveredAt": "timestamp",
  "readAt": "timestamp",
  "repliedAt": "timestamp",
  "errorMessage": "string"
}
\`\`\`

#### Funis
\`\`\`json
{
  "id": "uuid",
  "userId": "uuid",
  "name": "string",
  "description": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
\`\`\`

#### Etapas do Funil
\`\`\`json
{
  "id": "uuid",
  "funnelId": "uuid",
  "name": "string",
  "color": "string (hex)",
  "position": "integer",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
\`\`\`

#### Contato no Funil
\`\`\`json
{
  "id": "uuid",
  "funnelId": "uuid",
  "stageId": "uuid",
  "contactId": "uuid",
  "notes": "string",
  "value": "decimal",
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "history": "array of stage changes with timestamps"
}
\`\`\`

## API Endpoints

A API deve seguir os princípios RESTful e incluir os seguintes endpoints principais:

### Autenticação

- `POST /api/auth/register` - Registro de novo usuário
- `POST /api/auth/login` - Login de usuário
- `POST /api/auth/refresh` - Renovação de token
- `POST /api/auth/logout` - Logout de usuário
- `POST /api/auth/forgot-password` - Solicitação de recuperação de senha
- `POST /api/auth/reset-password` - Redefinição de senha

### Configuração WhatsApp

- `POST /api/whatsapp/setup` - Configuração inicial da API do WhatsApp
- `GET /api/whatsapp/status` - Verificação do status da conexão
- `PUT /api/whatsapp/update` - Atualização das configurações
- `POST /api/whatsapp/test` - Envio de mensagem de teste

### Categorias

- `GET /api/categories` - Listagem de categorias
- `POST /api/categories` - Criação de categoria
- `GET /api/categories/:id` - Detalhes de uma categoria
- `PUT /api/categories/:id` - Atualização de categoria
- `DELETE /api/categories/:id` - Exclusão de categoria

### Contatos

- `GET /api/contacts` - Listagem de contatos
- `POST /api/contacts` - Criação de contato
- `GET /api/contacts/:id` - Detalhes de um contato
- `PUT /api/contacts/:id` - Atualização de contato
- `DELETE /api/contacts/:id` - Exclusão de contato
- `POST /api/contacts/import` - Importação de contatos
- `GET /api/contacts/export` - Exportação de contatos

### Templates

- `GET /api/templates` - Listagem de templates
- `POST /api/templates` - Criação de template
- `GET /api/templates/:id` - Detalhes de um template
- `PUT /api/templates/:id` - Atualização de template
- `DELETE /api/templates/:id` - Exclusão de template
- `GET /api/templates/:id/status` - Verificação do status de aprovação

### Campanhas

- `GET /api/campaigns` - Listagem de campanhas
- `POST /api/campaigns` - Criação de campanha
- `GET /api/campaigns/:id` - Detalhes de uma campanha
- `PUT /api/campaigns/:id` - Atualização de campanha
- `DELETE /api/campaigns/:id` - Exclusão de campanha
- `POST /api/campaigns/:id/schedule` - Agendamento de campanha
- `POST /api/campaigns/:id/cancel` - Cancelamento de campanha
- `GET /api/campaigns/:id/stats` - Estatísticas da campanha

### Funis

- `GET /api/funnels` - Listagem de funis
- `POST /api/funnels` - Criação de funil
- `GET /api/funnels/:id` - Detalhes de um funil
- `PUT /api/funnels/:id` - Atualização de funil
- `DELETE /api/funnels/:id` - Exclusão de funil
- `GET /api/funnels/:id/stages` - Listagem de etapas de um funil
- `POST /api/funnels/:id/stages` - Criação de etapa
- `PUT /api/funnels/:id/stages/:stageId` - Atualização de etapa
- `DELETE /api/funnels/:id/stages/:stageId` - Exclusão de etapa
- `GET /api/funnels/:id/contacts` - Listagem de contatos em um funil
- `POST /api/funnels/:id/contacts` - Adição de contato ao funil
- `PUT /api/funnels/:id/contacts/:contactId/move` - Movimentação de contato entre etapas

### Disparos

- `GET /api/dispatches` - Listagem de disparos
- `GET /api/dispatches/:id` - Detalhes de um disparo
- `GET /api/dispatches/stats` - Estatísticas gerais de disparos

### Relatórios

- `GET /api/reports/campaigns` - Relatórios de campanhas
- `GET /api/reports/funnels` - Relatórios de funis
- `GET /api/reports/contacts` - Relatórios de contatos
- `GET /api/reports/messages` - Relatórios de mensagens
- `GET /api/reports/dashboard` - Dados para o dashboard

### Webhooks

- `POST /api/webhooks/whatsapp` - Endpoint para recebimento de eventos do WhatsApp

## Processamento de Mensagens

### Fluxo de Envio

1. Campanha é agendada ou iniciada manualmente
2. Sistema gera as mensagens individuais para cada contato
3. Mensagens são adicionadas à fila de processamento
4. Serviço de disparos processa a fila respeitando limites de taxa
5. Mensagens são enviadas via API do WhatsApp
6. Status de envio é atualizado com base nas respostas da API
7. Webhooks recebem atualizações de status (entrega, leitura)

### Personalização de Mensagens

- Sistema substitui variáveis nos templates com dados dos contatos
- Suporte a variáveis básicas (nome, empresa) e campos personalizados
- Validação de conteúdo antes do envio

## Sistema de Filas

Para garantir escalabilidade e resiliência, o sistema deve utilizar filas para:

1. **Fila de Envio**: Mensagens a serem enviadas
2. **Fila de Processamento de Webhooks**: Eventos recebidos via webhook
3. **Fila de Geração de Relatórios**: Processamento assíncrono de relatórios

Recomendações:
- RabbitMQ ou Redis para implementação das filas
- Retry automático em caso de falhas
- Dead letter queue para mensagens com problemas persistentes
- Monitoramento de tamanho e latência das filas

## Limitações e Considerações

### Limites da API do WhatsApp Business

- Taxa de envio: Respeitar os limites de mensagens por segundo
- Janela de 24 horas: Apenas mensagens de resposta são permitidas após 24h do último contato do cliente
- Templates: Necessidade de aprovação prévia pelo WhatsApp
- Conteúdo: Restrições quanto ao tipo de conteúdo permitido
- Opt-in: Necessidade de consentimento explícito dos contatos

### Considerações de Privacidade e Conformidade

- LGPD/GDPR: Garantir conformidade com leis de proteção de dados
- Opt-in: Implementar e documentar processo de consentimento
- Opt-out: Facilitar processo de cancelamento de recebimento de mensagens
- Retenção de dados: Política clara sobre armazenamento e exclusão de dados

## Monitoramento e Logs

### Métricas a Monitorar

- Taxa de entrega de mensagens
- Taxa de leitura de mensagens
- Taxa de resposta
- Tempo médio de resposta
- Erros de envio
- Tamanho das filas
- Latência da API
- Uso de recursos (CPU, memória, disco)

### Logs

- Logs de acesso
- Logs de envio de mensagens
- Logs de erros
- Logs de webhooks
- Logs de autenticação

Recomendação: Utilizar um serviço centralizado de logs como ELK Stack ou similar.

## Segurança

### Práticas Recomendadas

- Armazenamento seguro de credenciais (tokens criptografados)
- HTTPS para todas as comunicações
- Validação de entrada em todos os endpoints
- Proteção contra ataques comuns (CSRF, XSS, SQL Injection)
- Rate limiting para prevenção de abuso
- Auditoria de ações sensíveis
- Backup regular e seguro dos dados

### Autenticação da API

- Uso de JWT com expiração curta
- Refresh tokens para renovação de sessão
- Revogação de tokens em caso de suspeita de comprometimento
- Autenticação de dois fatores para ações sensíveis

## Escalabilidade

### Estratégias

- Arquitetura de microserviços para escalar componentes independentemente
- Balanceamento de carga para distribuir requisições
- Caching para reduzir carga no banco de dados
- Sharding de banco de dados para grandes volumes de dados
- Auto-scaling baseado em métricas de uso
- CDN para conteúdo estático

### Considerações para Grandes Volumes

- Otimização de consultas ao banco de dados
- Índices adequados
- Paginação em todas as listagens
- Processamento em lotes para operações pesadas
- Compressão de dados para reduzir tráfego

## Implementação do Backend

Para implementar o backend desta plataforma, recomendamos:

1. **Tecnologias**:
   - Node.js com TypeScript
   - Express ou NestJS como framework
   - Prisma como ORM
   - PostgreSQL como banco de dados principal
   - Redis para cache e filas
   - Jest para testes

2. **Estrutura de Diretórios**:
   \`\`\`
   /src
     /controllers
     /services
     /repositories
     /models
     /middlewares
     /utils
     /config
     /tests
   \`\`\`

3. **Padrões de Projeto**:
   - Repository Pattern para acesso a dados
   - Service Layer para lógica de negócios
   - Dependency Injection para facilitar testes
   - DTO (Data Transfer Objects) para validação de entrada

4. **Documentação da API**:
   - Swagger/OpenAPI para documentação automática
   - Exemplos de uso para cada endpoint
   - Descrição clara de parâmetros e respostas

5. **Testes**:
   - Testes unitários para serviços e utilidades
   - Testes de integração para APIs
   - Testes end-to-end para fluxos críticos

## Conclusão

Esta documentação técnica fornece uma visão geral da arquitetura e funcionamento do WhatsApp Marketing Dashboard. Para implementação bem-sucedida, é essencial seguir as práticas recomendadas de desenvolvimento, segurança e escalabilidade descritas neste documento.

A plataforma foi projetada para ser modular e escalável, permitindo adições futuras de funcionalidades e integração com outros sistemas. A conformidade com as políticas do WhatsApp Business API é crucial para o funcionamento adequado da plataforma.

Para dúvidas técnicas adicionais ou esclarecimentos, entre em contato com a equipe de desenvolvimento.
