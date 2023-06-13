import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Gaming Setup'
}

export default async function Personal() {
  const code = `{
    "name": "Julius Caezar",
    "version": 21,
    "description": "Características físicas",
    "private": true,
    "scripts": {
      "dev": "julius dev",
      "build": "julius build",
      "start": "julius start",
    },
    "dependencies": {
      "peso": 74,
      "altura": 1.8,
      "sexo": "masculino",
      "cor": "branco"
    },
    "devDependencies": {
      "cor/favorita": "Preto",
      "estilo/Musical": "Eletrônica",
      "jogo/favorito": "Rainbow six siege"
    }
  }`

  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon'
  })

  const output = highlighter.codeToHtml(code, { lang: 'json' })

  return (
    <>
      <CodePreview code={output} />
    </>
  )
}
