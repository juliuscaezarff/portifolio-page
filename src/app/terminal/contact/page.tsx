import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Fish',
}

export default async function Contact() {

  const code = `.contact {
    email: 'julius.caezar25@gmail.com';
    linkedin: 'www.linkedin.com/in/julius-caezar';
  }`

  const highlighter = await shiki.getHighlighter({
    theme: 'dark-plus'
  })

  const output = highlighter.codeToHtml(code, { lang: 'css' })

  return (
    <>
      <CodePreview code={output} />
    </>
  )
}
