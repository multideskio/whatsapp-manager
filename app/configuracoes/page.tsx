import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <div className="container max-w-4xl mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">Gerencie as configurações da sua conta</p>
      </div>

      <Tabs defaultValue="webhook" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="webhook">Webhook</TabsTrigger>
          <TabsTrigger value="sms">Integração SMS</TabsTrigger>
        </TabsList>

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
