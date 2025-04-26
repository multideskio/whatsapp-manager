import fs from "fs"
import path from "path"
import type { Metadata } from "next"
import { remark } from "remark"
import html from "remark-html"

export const metadata: Metadata = {
  title: "Documentação Técnica | WhatsApp Marketing Dashboard",
  description: "Documentação técnica para desenvolvedores da plataforma WhatsApp Marketing Dashboard",
}

async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), "docs", "guia-tecnico.md")
  const fileContents = fs.readFileSync(filePath, "utf8")

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(fileContents)

  return processedContent.toString()
}

export default async function GuiaTecnicoPage() {
  const content = await getMarkdownContent()

  return (
    <div className="container mx-auto py-10">
      <div className="prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}
