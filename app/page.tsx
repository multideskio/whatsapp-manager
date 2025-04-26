import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, BarChart3, Users, Layers } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-bold">WhatsApp Dashboard</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
            Recursos
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
            Preços
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
            Depoimentos
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/auth/login">
            <Button variant="ghost" size="sm">
              Entrar
            </Button>
          </Link>
          <Link href="/auth/cadastro">
            <Button size="sm">Começar Grátis</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">Automatize seu Marketing no WhatsApp</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Aumente suas vendas e engajamento com campanhas personalizadas, funis de conversão e análises detalhadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/auth/cadastro">
              <Button size="lg" className="gap-2">
                Começar Agora
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg">
                Ver Demo
              </Button>
            </Link>
          </div>
          <div className="w-full max-w-3xl mt-8 aspect-video rounded-xl overflow-hidden border shadow-lg">
            <img src="/whatsapp-marketing-dashboard.png" alt="Dashboard Preview" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Recursos</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tudo que você precisa para crescer
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Nossa plataforma oferece todas as ferramentas necessárias para automatizar e otimizar suas comunicações
                via WhatsApp.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-800">
                <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-50" />
              </div>
              <h3 className="text-xl font-bold">Campanhas Automatizadas</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Crie e agende campanhas personalizadas para diferentes segmentos de clientes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-800">
                <Layers className="h-6 w-6 text-blue-600 dark:text-blue-50" />
              </div>
              <h3 className="text-xl font-bold">Funis de Conversão</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Construa funis de vendas eficientes com múltiplas etapas e mensagens sequenciais.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-800">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-50" />
              </div>
              <h3 className="text-xl font-bold">Gestão de Contatos</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Organize seus contatos em categorias e segmente para comunicações mais eficazes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-800">
                <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-50" />
              </div>
              <h3 className="text-xl font-bold">Análises Detalhadas</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Acompanhe o desempenho de suas campanhas com relatórios e métricas avançadas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 md:col-span-2 lg:col-span-1">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-800">
                <svg
                  className="h-6 w-6 text-blue-600 dark:text-blue-50"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Templates Personalizáveis</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Crie templates de mensagens personalizados para diferentes ocasiões e objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Pronto para transformar seu marketing no WhatsApp?
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Comece hoje mesmo e veja os resultados em sua comunicação e vendas.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/auth/cadastro">
              <Button size="lg">Criar Conta Grátis</Button>
            </Link>
            <Link href="#pricing">
              <Button variant="outline" size="lg">
                Ver Planos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-blue-600" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2023 WhatsApp Dashboard. Todos os direitos reservados.
          </p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Termos de Serviço
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}
