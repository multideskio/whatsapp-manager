import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Certifique-se de que todas as rotas públicas estão listadas aqui
  const isPublicPath = path === "/" || path === "/auth/login" || path === "/auth/cadastro" || path === "/auth/recuperar"

  const isApiPath = path.startsWith("/api")
  const isApiDocsPath = path === "/api-docs.html"

  const token = request.cookies.get("auth")?.value || ""

  // Redireciona usuários autenticados para o dashboard se tentarem acessar páginas públicas
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Redireciona usuários não autenticados para o login se tentarem acessar páginas protegidas
  if (!isPublicPath && !isApiPath && !isApiDocsPath && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
}
