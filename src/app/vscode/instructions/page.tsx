import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Terminal'
}

export default async function instructions() {
  const code = `# Bem vindo ao meu Portifolio

  ## Ideia
  - É um vscode aonde cada pasta conta um pouco sobre mim
  - É possível navegar entre as pastas
  - Cada pasta tem um tipo de arquivo, json, js, md...
  - Existe uma barra lateral caso ocorra um corte no conteúdo
  - Divirta-se 😄`

  const highlighter = await shiki.getHighlighter({
    theme: 'dark-plus'
  })

  const output = highlighter.codeToHtml(code, { lang: 'md' })

  return (
    <>
      <CodePreview code={output} />
    </>
  )
}
