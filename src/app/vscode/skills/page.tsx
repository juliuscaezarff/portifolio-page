import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
  title: 'VSCode Extensions'
}

export default async function Skills() {
  const code = `export default function MySkills() {
    return (
      <>
        <p>javascript</p>
        <p>typescript</p>
        <p>reactjs</p>
        <p>vite</p>
        <p>nextjs</p>
        <p>reactNative</p>
        <p>styledComponents</p>
        <p>tailwind</p>
        <p>node</p>
        <p>apiRestful</p>
        <p>mysql</p>
        <p>mongodb</p>
        <p>git</p>
        <p>github</p>
      </>
    )
  }`

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