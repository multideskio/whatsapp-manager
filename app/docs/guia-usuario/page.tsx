import fs from "fs"
import path from "path"
import type { Metadata } from "next"
import { remark } from "remark"
import html from "remark-html"

export const metadata: Metadata = {
  title: "Guia do Usuário | WhatsApp Marketing Dashboard",
  description: "Guia completo para usuários da plataforma WhatsApp Marketing Dashboard",
}

async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), "docs", "guia-usuario.md")
  const fileContents = fs.readFileSync(filePath, "utf8")

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(fileContents)

  return processedContent.toString()
}

export default async function GuiaUsuarioPage() {
  const content = await getMarkdownContent()

  return (
    <div className="container mx-auto py-10">
      <div className="prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}
