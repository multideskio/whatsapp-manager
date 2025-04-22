"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function CadastroPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de cadastro
    // Em um ambiente real, você faria uma chamada à API para registrar o usuário
    setTimeout(() => {
      // Definir um cookie para simular a autenticação
      document.cookie = "auth=true; path=/; max-age=86400"
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold">WhatsApp Manager</h1>
          <p className="text-muted-foreground">Crie sua conta e comece a gerenciar suas campanhas</p>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Criar conta</CardTitle>
            <CardDescription>Preencha os dados abaixo para criar sua conta</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Nome</Label>
                  <Input id="first-name" placeholder="João" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Sobrenome</Label>
                  <Input id="last-name" placeholder="Silva" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" required autoComplete="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" placeholder="Nome da sua empresa" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="sr-only">{showPassword ? "Ocultar senha" : "Mostrar senha"}</span>
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  A senha deve ter pelo menos 8 caracteres, incluindo letras e números
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required className="mt-1" />
                <Label htmlFor="terms" className="text-sm font-normal">
                  Eu concordo com os{" "}
                  <Link href="/termos" className="text-blue-500 hover:text-blue-400">
                    Termos de Serviço
                  </Link>{" "}
                  e{" "}
                  <Link href="/privacidade" className="text-blue-500 hover:text-blue-400">
                    Política de Privacidade
                  </Link>
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Criando conta..." : "Criar conta"}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <Link href="/auth/login" className="text-blue-500 hover:text-blue-400">
                  Faça login
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
