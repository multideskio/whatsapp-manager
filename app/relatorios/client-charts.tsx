"use client"

import dynamic from "next/dynamic"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Importação dinâmica dos componentes de gráficos com SSR desativado
const LineChartWrapper = dynamic(() => import("@/components/charts-wrapper").then((mod) => mod.LineChartWrapper), {
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-muted animate-pulse rounded-md" />,
})

const BarChartWrapper = dynamic(() => import("@/components/charts-wrapper").then((mod) => mod.BarChartWrapper), {
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-muted animate-pulse rounded-md" />,
})

const PieChartWrapper = dynamic(() => import("@/components/charts-wrapper").then((mod) => mod.PieChartWrapper), {
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-muted animate-pulse rounded-md" />,
})

export function RelatoriosClient() {
  return (
    <Tabs defaultValue="geral" className="space-y-4">
      <TabsList>
        <TabsTrigger value="geral">Geral</TabsTrigger>
        <TabsTrigger value="campanhas">Campanhas</TabsTrigger>
        <TabsTrigger value="contatos">Contatos</TabsTrigger>
        <TabsTrigger value="mensagens">Mensagens</TabsTrigger>
      </TabsList>

      <TabsContent value="geral" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Contatos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,345</div>
              <p className="text-xs text-muted-foreground">+180 nos últimos 30 dias</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mensagens Enviadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,543</div>
              <p className="text-xs text-muted-foreground">+2,350 nos últimos 30 dias</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Abertura</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87.5%</div>
              <p className="text-xs text-muted-foreground">+2.1% em relação ao mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Campanhas Ativas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+3 em relação ao mês anterior</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Mensagens por Dia</CardTitle>
              <CardDescription>Número de mensagens enviadas nos últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent className="pl-2 h-[300px]">
              <LineChartWrapper />
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Desempenho por Campanha</CardTitle>
              <CardDescription>Taxa de abertura e resposta por campanha</CardDescription>
            </CardHeader>
            <CardContent className="pl-2 h-[300px]">
              <BarChartWrapper />
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="campanhas" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Desempenho de Campanhas</CardTitle>
            <CardDescription>Análise detalhada do desempenho de suas campanhas</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <BarChartWrapper />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="contatos" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Crescimento de Contatos</CardTitle>
            <CardDescription>Evolução do número de contatos ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <LineChartWrapper />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="mensagens" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Análise de Mensagens</CardTitle>
            <CardDescription>Estatísticas de envio e recebimento de mensagens</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <PieChartWrapper />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
