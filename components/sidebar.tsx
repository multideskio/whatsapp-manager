"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Contact,
  FolderKanban,
  Home,
  LayoutTemplate,
  MessageSquare,
  Send,
  Settings,
  Tag,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

// Verificar se os links estão corretos
const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Contatos",
    href: "/contatos",
    icon: Contact,
  },
  {
    name: "Categorias",
    href: "/categorias",
    icon: Tag,
  },
  {
    name: "Campanhas",
    href: "/campanhas",
    icon: MessageSquare,
  },
  {
    name: "Funis",
    href: "/funis",
    icon: FolderKanban,
  },
  {
    name: "Templates",
    href: "/templates",
    icon: LayoutTemplate,
  },
  {
    name: "Disparos",
    href: "/disparos",
    icon: Send,
  },
  {
    name: "Relatórios",
    href: "/relatorios",
    icon: BarChart3,
  },
  {
    name: "Configurações",
    href: "/configuracoes",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-card md:block md:w-64">
      <div className="flex h-14 items-center border-b px-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold text-lg text-blue-600 dark:text-blue-400"
        >
          <BarChart3 className="h-6 w-6" />
          <span>WhatsApp Manager</span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="px-3 py-2">
          <nav className="flex flex-col gap-1">
            {sidebarItems.map((item) => {
              // Verificar se o pathname atual corresponde à rota do item
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

              return (
                <Button
                  key={item.href}
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "justify-start gap-2 text-sm font-medium",
                    isActive
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                      : "text-slate-600 dark:text-slate-300",
                  )}
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              )
            })}
          </nav>
        </div>
      </ScrollArea>
    </div>
  )
}
