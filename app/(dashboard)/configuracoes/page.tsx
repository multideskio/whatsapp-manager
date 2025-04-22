import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">Gerencie as configurações da sua conta</p>
      </div>

      <Tabs defaultValue="meta" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="meta">Credenciais Meta</TabsTrigger>
          <TabsTrigger value="webhook">Webhook</TabsTrigger>
          <TabsTrigger value="waba">Números WABA</TabsTrigger>
        </TabsList>

        <TabsContent value="meta" className="space-y-4 py-4">
          <Card>
            <CardHeader>
              <CardTitle>Credenciais do App Meta</CardTitle>
              <CardDescription>
                Configure as credenciais do seu aplicativo Meta para integração com a API do WhatsApp Business.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="app-id">App ID</Label>
                <Input id="app-id" placeholder="Digite o ID do seu aplicativo Meta" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="app-secret">App Secret</Label>
                <Input id="app-secret" type="password" placeholder="Digite o secret do seu aplicativo Meta" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="access-token">Access Token</Label>
                <Input id="access-token" placeholder="Digite o token de acesso permanente" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-id">Business ID</Label>
                <Input id="business-id" placeholder="Digite o ID do seu negócio" />
              </div>
              <Button className="mt-4">Salvar credenciais</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhook" className="space-y-4 py-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuração de Webhook</CardTitle>
              <CardDescription>
                Configure o webhook para receber notificações da API do WhatsApp Business.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Status do Webhook</h3>
                  <p className="text-sm text-muted-foreground">O webhook está ativo e recebendo notificações</p>
                </div>
                <Badge variant="default">Ativo</Badge>
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-url">URL do Webhook</Label>
                <div className="flex gap-2">
                  <Input
                    id="webhook-url"
                    value="https://api.seudominio.com/webhook/whatsapp"
                    readOnly
                    className="bg-muted"
                  />
                  <Button variant="outline">Copiar</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="verify-token">Token de Verificação</Label>
                <div className="flex gap-2">
                  <Input id="verify-token" type="password" value="seu_token_secreto" readOnly className="bg-muted" />
                  <Button variant="outline">Copiar</Button>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-sm font-medium">Eventos inscritos</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="messages" defaultChecked />
                    <Label htmlFor="messages">Mensagens</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="status" defaultChecked />
                    <Label htmlFor="status">Status de entrega</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="template-status" defaultChecked />
                    <Label htmlFor="template-status">Status de templates</Label>
                  </div>
                </div>
              </div>

              <Button className="mt-4">Atualizar configurações</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="waba" className="space-y-4 py-4">
          <Card>
            <CardHeader>
              <CardTitle>Números WABA</CardTitle>
              <CardDescription>Gerencie os números do WhatsApp Business conectados à sua conta.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Número</TableHead>
                    <TableHead>Nome de exibição</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>+5511987654321</TableCell>
                    <TableCell>Atendimento Principal</TableCell>
                    <TableCell>
                      <Badge variant="default">Conectado</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>+5511987654322</TableCell>
                    <TableCell>Suporte Técnico</TableCell>
                    <TableCell>
                      <Badge variant="default">Conectado</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>+5511987654323</TableCell>
                    <TableCell>Vendas</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Desconectado</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Reconectar
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button className="mt-4">Adicionar número</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
