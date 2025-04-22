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
  // Em um ambiente real, você verificaria um cookie ou token JWT
  const isAuthenticated = request.cookies.has("auth")

  // Se o usuário não está autenticado e tenta acessar uma rota do dashboard
  if (!isAuthenticated && dashboardPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  // Se o usuário está autenticado e tenta acessar a página inicial
  if (isAuthenticated && pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Se o usuário está autenticado e tenta acessar páginas de autenticação
  if (isAuthenticated && pathname.startsWith("/auth/")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

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
