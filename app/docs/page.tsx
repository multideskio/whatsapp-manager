import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Code, BookOpen } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Documentação da Plataforma</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Bem-vindo à documentação da plataforma WhatsApp Marketing Dashboard. Aqui você encontrará guias e informações
        técnicas para ajudá-lo a utilizar nossa plataforma.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Guia do Usuário
            </CardTitle>
            <CardDescription>Aprenda a utilizar todas as funcionalidades da plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Um guia completo passo a passo para usuários da plataforma, desde a criação da conta até o gerenciamento
              avançado de campanhas e funis.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/guia-usuario" className="w-full">
              <Button variant="outline" className="w-full">
                Ver Guia do Usuário
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Documentação Técnica
            </CardTitle>
            <CardDescription>Informações técnicas para desenvolvedores</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Documentação detalhada sobre a arquitetura da plataforma, APIs, estrutura de dados e considerações
              técnicas para desenvolvedores.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/docs/guia-tecnico" className="w-full">
              <Button variant="outline" className="w-full">
                Ver Documentação Técnica
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              API Reference
            </CardTitle>
            <CardDescription>Referência completa da API</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Documentação detalhada de todos os endpoints da API, parâmetros, respostas e exemplos de uso para
              integração com outros sistemas.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/api/swagger" className="w-full">
              <Button variant="outline" className="w-full">
                Ver API Reference
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
