import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
  title: 'VSCode Extensions'
}

export default async function Skills() {
  const code = `const skills = {
    javascript: true,
    typescript: true,
    reactjs: true,
    vite: true,
    nextjs: true,
    reactNative: true,
    expo: true,
    styledComponents: true,
    tailwind: true,
    node: true,
    apiRestful: true,
    prisma: true,
    mysql: true,
    mongodb: true,
    git: true,
    github: true
  };
  
  console.log('Minhas habilidades:');
  for (const skill in skills) {
    if (skills[skill]) {
      console.log(skill);
    }
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
