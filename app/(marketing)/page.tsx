import type React from "react"
import Link from "next/link"
import { Check, MessageSquare, Send, BarChart3, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">WhatsApp Manager</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="text-muted-foreground hover:text-foreground">
              Recursos
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
              Planos
            </Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-foreground">
              Depoimentos
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link href="/auth/cadastro">
              <Button>Começar grátis</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container flex flex-col items-center justify-center gap-6 py-24 text-center md:py-32">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Potencialize seu marketing no WhatsApp
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Gerencie campanhas, automatize mensagens e aumente suas conversões com a plataforma mais completa para
            WhatsApp Business.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/auth/cadastro">
            <Button size="lg" className="h-12">
              Teste grátis por 14 dias
            </Button>
          </Link>
          <Link href="#demo">
            <Button size="lg" variant="outline" className="h-12">
              Ver demonstração
            </Button>
          </Link>
        </div>
        <div className="mt-8 rounded-lg border bg-card/50 p-4 backdrop-blur">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">+5.000 empresas</span> já utilizam nossa plataforma
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Recursos completos para seu negócio</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Tudo o que você precisa para gerenciar suas campanhas de WhatsApp em um só lugar
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Send className="h-10 w-10 text-blue-600" />}
            title="Campanhas automatizadas"
            description="Crie e agende campanhas de mensagens para seus contatos com segmentação avançada."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-blue-600" />}
            title="Gestão de contatos"
            description="Organize seus contatos em categorias e segmente para campanhas específicas."
          />
          <FeatureCard
            icon={<BarChart3 className="h-10 w-10 text-blue-600" />}
            title="Análises detalhadas"
            description="Acompanhe o desempenho das suas campanhas com relatórios e métricas em tempo real."
          />
          <FeatureCard
            icon={<MessageSquare className="h-10 w-10 text-blue-600" />}
            title="Templates personalizados"
            description="Crie templates de mensagens aprovados pelo WhatsApp com variáveis dinâmicas."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-blue-600" />}
            title="Conformidade com WhatsApp"
            description="Plataforma 100% em conformidade com as políticas do WhatsApp Business API."
          />
          <FeatureCard
            icon={<BarChart3 className="h-10 w-10 text-blue-600" />}
            title="Funis de conversão"
            description="Configure sequências de mensagens automatizadas baseadas em comportamento."
          />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-card/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Planos para todos os tamanhos de negócio</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Escolha o plano ideal para suas necessidades e escale conforme seu negócio cresce
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Básico"
              price="R$ 97"
              description="Ideal para pequenas empresas e iniciantes"
              features={[
                "1 número de WhatsApp",
                "Até 1.000 contatos",
                "Até 5.000 mensagens/mês",
                "5 templates personalizados",
                "Campanhas básicas",
                "Suporte por email",
              ]}
              buttonText="Começar grátis"
              buttonVariant="outline"
            />
            <PricingCard
              title="Profissional"
              price="R$ 297"
              description="Para empresas em crescimento"
              features={[
                "3 números de WhatsApp",
                "Até 10.000 contatos",
                "Até 50.000 mensagens/mês",
                "20 templates personalizados",
                "Funis de conversão",
                "Relatórios avançados",
                "Suporte prioritário",
              ]}
              buttonText="Começar grátis"
              buttonVariant="default"
              popular
            />
            <PricingCard
              title="Enterprise"
              price="R$ 997"
              description="Para grandes empresas e agências"
              features={[
                "10 números de WhatsApp",
                "Contatos ilimitados",
                "Até 500.000 mensagens/mês",
                "Templates ilimitados",
                "API completa",
                "Integrações personalizadas",
                "Gerente de conta dedicado",
                "SLA garantido",
              ]}
              buttonText="Falar com vendas"
              buttonVariant="outline"
            />
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Todos os planos incluem teste grátis de 14 dias. Não é necessário cartão de crédito.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">O que nossos clientes dizem</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Empresas de todos os tamanhos estão aumentando suas conversões com o WhatsApp Manager
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="Aumentamos nossas conversões em 43% no primeiro mês de uso. A plataforma é intuitiva e os relatórios são excelentes."
            author="Ana Silva"
            role="Marketing Manager, TechCorp"
          />
          <TestimonialCard
            quote="A automação de funis nos permitiu escalar nosso atendimento sem aumentar a equipe. Resultado incrível!"
            author="Carlos Mendes"
            role="CEO, Mendes E-commerce"
          />
          <TestimonialCard
            quote="O suporte é excepcional e a plataforma é muito completa. Conseguimos segmentar nossos clientes de forma muito eficiente."
            author="Juliana Costa"
            role="Diretora de Vendas, Grupo Nexus"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-card/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Perguntas frequentes</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">Tire suas dúvidas sobre nossa plataforma</p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6">
            <FaqItem
              question="Como funciona o período de teste gratuito?"
              answer="Você tem acesso a todas as funcionalidades do plano escolhido por 14 dias, sem necessidade de cartão de crédito. Ao final do período, você pode escolher um plano para continuar usando a plataforma."
            />
            <FaqItem
              question="Preciso ter uma conta WhatsApp Business API?"
              answer="Sim, você precisa ter uma conta aprovada no WhatsApp Business API. Podemos auxiliar no processo de solicitação e aprovação da sua conta."
            />
            <FaqItem
              question="Posso mudar de plano depois?"
              answer="Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas no próximo ciclo de cobrança."
            />
            <FaqItem
              question="Como funciona o suporte?"
              answer="Oferecemos suporte por email para todos os planos. Clientes do plano Profissional têm acesso a suporte prioritário, e clientes Enterprise contam com um gerente de conta dedicado."
            />
            <FaqItem
              question="A plataforma é compatível com quais dispositivos?"
              answer="Nossa plataforma é baseada em nuvem e acessível por qualquer navegador moderno em computadores, tablets e smartphones."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-24">
        <div className="rounded-lg bg-blue-600 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Pronto para transformar seu marketing no WhatsApp?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Comece seu teste gratuito de 14 dias hoje mesmo e veja os resultados.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/auth/cadastro">
                <Button size="lg" variant="secondary" className="h-12">
                  Começar agora
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" variant="outline" className="h-12 border-blue-400 text-white hover:bg-blue-700">
                  Agendar demonstração
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold">WhatsApp Manager</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                A plataforma completa para gerenciamento de campanhas no WhatsApp Business.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Produto</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                    Planos
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-foreground">
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Empresa</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/sobre" className="text-muted-foreground hover:text-foreground">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/carreiras" className="text-muted-foreground hover:text-foreground">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-muted-foreground hover:text-foreground">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/termos" className="text-muted-foreground hover:text-foreground">
                    Termos de Serviço
                  </Link>
                </li>
                <li>
                  <Link href="/privacidade" className="text-muted-foreground hover:text-foreground">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-6">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} WhatsApp Manager. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant = "default",
  popular = false,
}: {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant?: "default" | "outline"
  popular?: boolean
}) {
  return (
    <Card className={`border-border ${popular ? "relative border-blue-600 shadow-lg" : "bg-card"}`}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="rounded-full bg-blue-600 px-4 py-1 text-xs font-medium text-white">Mais popular</span>
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/mês</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="/auth/cadastro" className="w-full">
          <Button variant={buttonVariant} className="w-full">
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <Card className="border-border bg-card">
      <CardContent className="pt-6">
        <div className="mb-4 text-4xl">"</div>
        <p className="mb-4 text-muted-foreground">{quote}</p>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{answer}</p>
      </CardContent>
    </Card>
  )
}
