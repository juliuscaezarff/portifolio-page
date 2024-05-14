import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'About'
}

export default async function About() {
  const code = `
Olá 👋🏻, me chamo julius caezar, um dev full stack com
21 anos, tenho uma combinação única de enegia juvenil 
com habilidades técnicas.
Com um olhar afiado tanto para o frontend quanto para 
o backend, sou capaz de criar aplicações digitais para
os usuários. 
Reactjs e Typescript são minhas ferramentas favoritas, e 
com elas, posso transformar linhas de código em experiências 
incríveis.
Também me aventuro no mundo dos elementos tridimensionais, 
colocando 3D em sites para que os usuários tenham uma 
experiência mais imersiva ao navegarem.
Além do código gosto muito de video game, tanto FPS quanto 
os de sobrevivência, e na verdade foram eles que me apresentaram 
o mundo da programação.
Se quiser me conhecer mais na pasta de contatos e no ícone de 
perfil tem alguns links para redes sociais.`

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
