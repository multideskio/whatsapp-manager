import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Este array contém os caminhos que fazem parte do dashboard
const dashboardPaths = [
  "/dashboard",
  "/contatos",
  "/categorias",
  "/campanhas",
  "/funis",
  "/templates",
  "/disparos",
  "/configuracoes",
]

// Este array contém os caminhos públicos (marketing e autenticação)
const publicPaths = ["/", "/auth/login", "/auth/cadastro", "/auth/recuperar"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Simulação de verificação de autenticação
  const isAuthenticated = request.cookies.has("auth")

  // Verificação mais precisa para rotas do dashboard
  const isDashboardPath = dashboardPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`))

  // Se o usuário não está autenticado e tenta acessar uma rota do dashboard
  if (!isAuthenticated && isDashboardPath) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  // Se o usuário está autenticado e tenta acessar páginas de autenticação
  if (isAuthenticated && pathname.startsWith("/auth/")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Não redirecionamos mais usuários autenticados da página inicial
  // Isso permite que todos os usuários acessem a landing page

  return NextResponse.next()
}

// Configurar o matcher para que o middleware seja executado apenas nas rotas especificadas
export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/contatos/:path*",
    "/categorias/:path*",
    "/campanhas/:path*",
    "/funis/:path*",
    "/templates/:path*",
    "/disparos/:path*",
    "/configuracoes/:path*",
    "/auth/:path*",
  ],
}
