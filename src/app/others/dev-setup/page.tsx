import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Dev Setup'
}

export default async function DevSetup() {

  const code = `console.log("teste")`

  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon'
  })

  const output = highlighter.codeToHtml(code, { lang: 'js' })

  return (
    <>
      <CodePreview code={output} />
    </>
  )
}
