"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RecuperarPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de envio de email
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
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
          <p className="text-muted-foreground">Recupere o acesso à sua conta</p>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Recuperar senha</CardTitle>
            <CardDescription>Enviaremos um link para redefinir sua senha</CardDescription>
          </CardHeader>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Enviar link de recuperação"}
                </Button>
                <Link
                  href="/auth/login"
                  className="flex items-center justify-center text-sm text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para o login
                </Link>
              </CardFooter>
            </form>
          ) : (
            <CardContent className="space-y-4">
              <Alert className="border-green-600/20 bg-green-600/10 text-green-600">
                <AlertDescription>
                  Enviamos um email para <strong>{email}</strong> com instruções para redefinir sua senha.
                </AlertDescription>
              </Alert>
              <div className="text-center text-sm text-muted-foreground">
                <p>Não recebeu o email? Verifique sua pasta de spam ou</p>
                <Button
                  variant="link"
                  className="p-0 text-blue-500 hover:text-blue-400"
                  onClick={() => setIsSubmitted(false)}
                >
                  tente novamente
                </Button>
              </div>
              <div className="pt-4">
                <Link href="/auth/login">
                  <Button variant="outline" className="w-full">
                    Voltar para o login
                  </Button>
                </Link>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}
