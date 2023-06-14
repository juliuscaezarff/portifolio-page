import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Terminal'
}

export default async function Projects() {
  const code = `# PROJETOS 💼

  ## BestDuo 🤝
  Reactjs, React Native, Typescript, Node, SQLite, Prisma, Tailwind, RadixUI
  - https://github.com/juliuscaezarff/BestDuo-App

  ## Random-Thoughts 💬
  Javascript, Template engine, Node, MySQL, Sequelize
  - https://github.com/juliuscaezarff/Random-thoughts

  ## Login Design System 🧬
  Reactjs, Typescript, Storybook, Tailwind, CI/CD, Github Actions
  - https://github.com/juliuscaezarff/Design-System-project`

  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon'
  })

  const output = highlighter.codeToHtml(code, { lang: 'md' })

  return (
    <>
      <CodePreview code={output} />
    </>
  )
}
