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
  BestDuo é um projeto para o mundo dos games, consiste na criação de anúncios onde os usuários encontram pessoas para se 
  conectarem e poderem jogar. Disponível tanto na versão web com React quanto na versão mobile com React Native, os dados 
  criados se conectam com uma API criada em Node.
  - https://github.com/juliuscaezarff/BestDuo-App


  ## Random-Thoughts 💬
  Javascript, Template engine, Node, MySQL, Sequelize
	Esse projeto foi criado com intuito de postar pensamentos e ideias que um 	usuário possui, conta com criação de usuário,
  verificação de conta, encriptação de senha e informações. Existe uma dashboard onde o usuário pode verificar os pensamentos 
  já postados e pode excluir ou editar esses pensamentos. Todos os pensamentos postados ficam na página principal para todos 
  verem.
  - https://github.com/juliuscaezarff/Random-thoughts


  ## Login Design System 🧬
  Reactjs, Typescript, Storybook, Tailwind, CI/CD, Github Actions
	O projeto se trata de um login feito em React e estilizado com Tailwind, o 	objetivo desse projeto foi documentar o 
  front-end onde utilizei a tecnologia storybook, criando os components lá dentro onde possibilita o desenvolvedor mexer 
  em vários aspectos visuais do projeto sem interferir no código, no deploy usei o storybook-deployer e o github actions 
  para cada push feito dentro do repositório automaticmante atualiza o deploy do 	storybook.
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
