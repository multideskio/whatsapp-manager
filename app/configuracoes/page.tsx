import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SettingsPage() {
  return (
    <div className="container max-w-4xl mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">Gerencie as configurações da sua conta</p>
      </div>

      <Tabs defaultValue="meta" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="meta">Credenciais Meta</TabsTrigger>
          <TabsTrigger value="webhook">Webhook</TabsTrigger>
          <TabsTrigger value="waba">Números WABA</TabsTrigger>
          <TabsTrigger value="sms">Integração SMS</TabsTrigger>
        </TabsList>
        <TabsContent value="meta" className="space-y-4 py-4">
          <Card>
            <CardHeader>
              <CardTitle>Credenciais Meta</CardTitle>
              <CardDescription>Configure suas credenciais da Meta Business Platform.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="app-id">App ID</Label>
                <Input id="app-id" placeholder="Seu App ID" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="app-secret">App Secret</Label>
                <Input id="app-secret" type="password" placeholder="Seu App Secret" />
              </div>
              <Button>Salvar alterações</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="webhook" className="space-y-4 py-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Webhook</CardTitle>
              <CardDescription>Configure a URL do webhook para receber notificações.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhook-url">URL do Webhook</Label>
                <Input id="webhook-url" placeholder="https://seu-servidor.com/webhook" />
              </div>
              <Button>Salvar alterações</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="waba" className="space-y-4 py-4">
          <Card>
            <CardHeader>
              <CardTitle>Números WABA</CardTitle>
              <CardDescription>Gerencie seus números WhatsApp Business API (WABA).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                </TableBody>
              </Table>
              <Button>Adicionar número</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sms" className="space-y-4 py-4">
          <Card>
            <CardHeader>
              <CardTitle>Integração de SMS</CardTitle>
              <CardDescription>
                Configure a integração com o provedor de SMS para envio de mensagens alternativas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sms-provider">Provedor de SMS</Label>
                <Select defaultValue="twilio">
                  <SelectTrigger id="sms-provider">
                    <SelectValue placeholder="Selecione um provedor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="twilio">Twilio</SelectItem>
                    <SelectItem value="zenvia">Zenvia</SelectItem>
                    <SelectItem value="infobip">Infobip</SelectItem>
                    <SelectItem value="sinch">Sinch</SelectItem>
                    <SelectItem value="custom">Personalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sms-api-url">URL da API</Label>
                <Input id="sms-api-url" placeholder="https://api.provedor.com/sms/send" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sms-api-key">API Key</Label>
                <Input id="sms-api-key" type="password" placeholder="Sua chave de API" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sms-sender-id">ID do Remetente</Label>
                <Input id="sms-sender-id" placeholder="Nome ou número do remetente" />
                <p className="text-xs text-muted-foreground">
                  O ID do remetente que aparecerá para os destinatários (sujeito a restrições do provedor)
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-sm font-medium">Configurações adicionais</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="sms-fallback" />
                    <Label htmlFor="sms-fallback">Usar SMS como fallback para WhatsApp</Label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Envia automaticamente um SMS quando a mensagem do WhatsApp falhar
                  </p>
                </div>
              </div>

              <Button className="mt-4">Testar conexão</Button>
              <Button className="mt-2">Salvar configurações</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
