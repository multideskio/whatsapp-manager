import { Contact, MessageSquare, Send, LayoutTemplateIcon as Templates } from "lucide-react"

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border bg-card p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            <Contact className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total de contatos</p>
            <h3 className="text-2xl font-bold">5.842</h3>
          </div>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total de campanhas</p>
            <h3 className="text-2xl font-bold">24</h3>
          </div>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
            <Send className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Envios realizados</p>
            <h3 className="text-2xl font-bold">12.458</h3>
          </div>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
            <Templates className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total de templates</p>
            <h3 className="text-2xl font-bold">18</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
