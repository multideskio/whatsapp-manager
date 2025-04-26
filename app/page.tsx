import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, BarChart3, Users, Layers, Check, Star } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-green-600" />
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
          <Link href="/auth/login" className="inline-block">
            <Button variant="ghost" size="sm">
              Entrar
            </Button>
          </Link>
          <Link href="/auth/cadastro" className="inline-block">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Começar Grátis
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">Automatize seu Marketing no WhatsApp</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Aumente suas vendas e engajamento com campanhas personalizadas, funis de conversão e análises detalhadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/auth/cadastro" className="inline-block">
              <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700">
                Começar Agora
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard" className="inline-block">
              <Button variant="outline" size="lg">
                Ver Demo
              </Button>
            </Link>
          </div>
          <div className="w-full max-w-4xl mt-8 rounded-xl overflow-hidden border shadow-lg">
            <Image
              src="/dashboard-preview.png"
              alt="Dashboard Preview"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Recursos</div>
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
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
                <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-50" />
              </div>
              <h3 className="text-xl font-bold">Campanhas Automatizadas</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Crie e agende campanhas personalizadas para diferentes segmentos de clientes com mensagens direcionadas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
                <Layers className="h-6 w-6 text-green-600 dark:text-green-50" />
              </div>
              <h3 className="text-xl font-bold">Funis de Conversão</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Construa funis de vendas eficientes com múltiplas etapas, kanban visual e mensagens sequenciais.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
                <Users className="h-6 w-6 text-green-600 dark:text-green-50" />
              </div>
              <h3 className="text-xl font-bold">Gestão de Contatos</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Organize seus contatos em categorias, importe listas e segmente para comunicações mais eficazes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
                <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-50" />
              </div>
              <h3 className="text-xl font-bold">Análises Detalhadas</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Acompanhe o desempenho de suas campanhas com relatórios, gráficos e métricas avançadas em tempo real.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
                <svg
                  className="h-6 w-6 text-green-600 dark:text-green-50"
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
                Crie templates de mensagens personalizados para diferentes ocasiões, com variáveis dinâmicas e mídia.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
                <svg
                  className="h-6 w-6 text-green-600 dark:text-green-50"
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
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m2 12 3.5 3.5L12 9" />
                  <path d="m15 9 3 3L22 8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Multiempresa</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Gerencie múltiplas empresas ou departamentos em uma única plataforma com controle de acesso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">
                Como Funciona
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simples de configurar, poderoso nos resultados
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Em apenas 3 passos você pode começar a automatizar suas comunicações via WhatsApp
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800">
                <span className="text-2xl font-bold text-green-600 dark:text-green-50">1</span>
              </div>
              <h3 className="text-xl font-bold">Crie sua conta</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Registre-se gratuitamente e configure seu perfil em menos de 2 minutos.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800">
                <span className="text-2xl font-bold text-green-600 dark:text-green-50">2</span>
              </div>
              <h3 className="text-xl font-bold">Conecte seu WhatsApp</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Integre sua conta do WhatsApp Business com nossa plataforma de forma segura.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800">
                <span className="text-2xl font-bold text-green-600 dark:text-green-50">3</span>
              </div>
              <h3 className="text-xl font-bold">Comece a automatizar</h3>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Importe seus contatos, crie campanhas e acompanhe os resultados em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Preços</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Planos para todos os tamanhos de negócio
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Escolha o plano ideal para o seu negócio e comece a crescer hoje mesmo
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            {/* Plano Básico */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Básico</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Ideal para pequenos negócios</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">R$97</span>
                <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">/mês</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Até 500 contatos</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">1.000 mensagens/mês</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Campanhas ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Funis básicos</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Relatórios básicos</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/auth/cadastro?plan=basic" className="inline-block w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Começar Agora</Button>
                </Link>
              </div>
            </div>

            {/* Plano Profissional */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-lg dark:bg-gray-950 border-green-200 relative">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
                Mais Popular
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Profissional</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Para negócios em crescimento</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">R$197</span>
                <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">/mês</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Até 2.000 contatos</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">5.000 mensagens/mês</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Campanhas ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Funis avançados com Kanban</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Relatórios avançados</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Suporte prioritário</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/auth/cadastro?plan=pro" className="inline-block w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Escolher Plano</Button>
                </Link>
              </div>
            </div>

            {/* Plano Empresarial */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Empresarial</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Para grandes empresas</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">R$497</span>
                <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">/mês</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Contatos ilimitados</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">20.000 mensagens/mês</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Multiempresa</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">API personalizada</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Integrações avançadas</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span className="text-sm">Gerente de conta dedicado</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/auth/cadastro?plan=enterprise" className="inline-block w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Contatar Vendas</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">
                Depoimentos
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                O que nossos clientes dizem
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Veja como nossa plataforma tem ajudado empresas a crescer
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {/* Depoimento 1 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-950">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 text-gray-500 dark:text-gray-400">
                <p>
                  "Desde que começamos a usar o WhatsApp Dashboard, nossas taxas de conversão aumentaram em 35%. A
                  facilidade de criar campanhas e acompanhar os resultados é incrível."
                </p>
              </blockquote>
              <div className="mt-4 flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="flex h-full w-full items-center justify-center text-lg font-bold">M</div>
                </div>
                <div>
                  <p className="text-sm font-medium">Marcos Silva</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">CEO, TechSolutions</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-950">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 text-gray-500 dark:text-gray-400">
                <p>
                  "Os funis de conversão com visualização Kanban revolucionaram nossa forma de acompanhar leads.
                  Conseguimos aumentar nossas vendas em 42% no primeiro trimestre."
                </p>
              </blockquote>
              <div className="mt-4 flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="flex h-full w-full items-center justify-center text-lg font-bold">A</div>
                </div>
                <div>
                  <p className="text-sm font-medium">Ana Oliveira</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Diretora de Marketing, Moda Express</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-950">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 text-gray-500 dark:text-gray-400">
                <p>
                  "A funcionalidade multiempresa nos permitiu gerenciar as comunicações de 5 filiais em uma única
                  plataforma. O suporte é excelente e sempre nos ajuda rapidamente."
                </p>
              </blockquote>
              <div className="mt-4 flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="flex h-full w-full items-center justify-center text-lg font-bold">R</div>
                </div>
                <div>
                  <p className="text-sm font-medium">Roberto Mendes</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Gerente Regional, Supermercados BemMais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">FAQ</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Perguntas Frequentes</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Respostas para as dúvidas mais comuns sobre nossa plataforma
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 mt-12">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium">Como funciona a integração com o WhatsApp?</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Nossa plataforma se integra com a API oficial do WhatsApp Business. Você precisa ter uma conta do
                WhatsApp Business e seguir nosso processo de configuração simples para conectar sua conta à plataforma.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium">Posso usar meu número de WhatsApp pessoal na plataforma?</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Recomendamos o uso de um número dedicado para o WhatsApp Business. Embora seja possível usar um número
                pessoal, um número comercial dedicado proporciona uma experiência mais profissional e ajuda a separar
                comunicações pessoais e de negócios.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium">Existe limite de mensagens que posso enviar?</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Sim, cada plano tem um limite mensal de mensagens. O plano Básico permite até 1.000 mensagens/mês, o
                Profissional até 5.000 mensagens/mês e o Empresarial até 20.000 mensagens/mês. Caso precise de mais
                mensagens, oferecemos pacotes adicionais.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium">Como funciona o sistema de funis com Kanban?</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Nosso sistema de funis permite criar etapas personalizadas para seu processo de vendas. A visualização
                Kanban permite arrastar e soltar contatos entre as diferentes etapas, facilitando o acompanhamento do
                progresso de cada lead. Você também pode automatizar mensagens para cada etapa do funil.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium">A plataforma está em conformidade com a LGPD?</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Sim, nossa plataforma foi desenvolvida seguindo todas as diretrizes da Lei Geral de Proteção de Dados.
                Oferecemos ferramentas para obtenção de consentimento, gestão de preferências de contato e exclusão de
                dados quando solicitado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950">
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
            <Link href="/auth/cadastro" className="inline-block">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Criar Conta Grátis
              </Button>
            </Link>
            <Link href="#pricing" className="inline-block">
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
          <MessageSquare className="h-5 w-5 text-green-600" />
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
