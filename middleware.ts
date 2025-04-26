import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Verificar se o usuário está autenticado (simulado)
  const isAuthenticated = true // Em produção, isso seria verificado com cookies/sessão

  // Obter o caminho da URL
  const path = request.nextUrl.pathname

  // Permitir acesso à landing page (rota raiz)
  if (path === "/") {
    return NextResponse.next()
  }

  // Permitir acesso às rotas de autenticação
  if (path.startsWith("/auth/")) {
    // Se o usuário já estiver autenticado, redirecionar para o dashboard
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    return NextResponse.next()
  }

  // Permitir acesso à documentação da API
  if (path.startsWith("/api/docs") || path.startsWith("/api/v1") || path.startsWith("/api/swagger")) {
    return NextResponse.next()
  }

  // Para todas as outras rotas, verificar autenticação
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$).*)",
  ],
}
