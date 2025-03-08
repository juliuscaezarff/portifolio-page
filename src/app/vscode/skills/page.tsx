import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
  title: 'Skills'
}

export default async function Skills() {
  const code = `interface SkillsProps {
    skill: string,
    level: string,
  }
  
  const SkillsData: SkillsProps[] = [
    { skill: 'JavaScript', level: 'Avançado' },
    { skill: 'TypeScript', level: 'Avançado' },
    { skill: 'React', level: 'Avançado' },
    { skill: 'Next.js', level: 'Avançado' },
    { skill: 'ReactNative', level: 'Intermediário' },
    { skill: 'Node.js', level: 'Intermediário' },
    { skill: 'CSS', level: 'Avançado' },
    { skill: 'Tailwind', level: 'Avançado' },
    { skill: 'Figma', level: 'Intermediário' },
    { skill: 'Ui/Ux', level: 'Avançado' },
    { skill: 'Spline', level: 'Básico' },
  ];
  
  export default function MySkills({ skill, level }: SkillsProps) {
    return (
      <div className="skills-content">
      <h3>{skill}</h3>
      <p>{level}</p>
    </div>
    )
  }`

  const highlighter = await shiki.getHighlighter({
    theme: 'dark-plus'
  })

  const output = highlighter.codeToHtml(code, { lang: 'js' })

  return (
    <>
      <CodePreview code={output} />
    </>
  )
}
