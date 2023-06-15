import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Terminal'
}

export default async function About() {
  const code = `
Olá 👋🏻, me chamo julius caezar, um dev full stack com
21 anos, tenho uma combinação única de enegia juvenil 
com habilidades técnicas.
Com um olhar afiado tanto para o frontend quanto para 
o backend, sou capaz de criar aplicações digitais pra
os usuários. 
Reactjs e Typescript são minhas ferramentas favoritas, e 
com elas, posso transformar linhas de código em experiências 
incríveis.
Além do código gosto muito de video game, tanto FPS quanto 
os de sobrevivência, e na verade foram eles que me apresentaram 
o mundo da programação.
Se quiser me conhecer mais tem a pasta de contatos e no ícone de 
perfil.`

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
