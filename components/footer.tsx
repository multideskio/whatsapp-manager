import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} WhatsApp Manager. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/api/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Documentação da API
            </Link>
            <Link href="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
