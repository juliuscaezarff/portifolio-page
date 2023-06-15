import {
  Briefcase,
  Contact,
  Cpu,
  FileJson,
  Film,
  Joystick,
  MoreHorizontal,
  Terminal,
  User
} from 'lucide-react'
import { OpenFilesSubMenu } from '../OpenFilesTabs/OpenFilesSubMenu'
import { File } from './File'
import { Folder } from './Folder'
import { SubMenu } from './SubMenu'

export type FileType = {
  title: string
  icon: React.ReactNode
}

export const explorerFiles: Record<string, FileType> = {
  '/vscode/instructions': {
    icon: <FileJson size={16} />,
    title: 'instructions.md'
  },
  '/vscode/about': {
    icon: <FileJson size={16} />,
    title: 'about.md'
  },
  '/vscode/skills': {
    icon: <FileJson size={16} />,
    title: 'skills.tsx'
  },
  '/terminal/projects': {
    icon: <Briefcase size={16} />,
    title: 'projects.md'
  },
  '/terminal/contact': { 
    icon: <Contact size={16} />, 
    title: 'contact.css' 
  },
  '/others/dev-setup': { 
    icon: <Cpu size={16} />, 
    title: 'dev.setup' 
  },
  '/others/personal': {
    icon: <User size={16} />,
    title: 'personal.json'
  }
}

export function Explorer() {
  return (
    <div className="py-2 px-4 text-[#8F8CA8]">
      <strong className="font-medium text-xs pl-2 flex items-center justify-between">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className="mt-4 flex flex-col">
        <SubMenu title="OPEN EDITORS">
          <OpenFilesSubMenu />
        </SubMenu>

        <SubMenu defaultOpen title="PORTIFOLIO">
          <Folder defaultOpen title="App">
            
            <File href="/vscode/instructions">
              <FileJson size={16} />
              instructions.md
            </File>
            <File href="/vscode/about">
            <FileJson size={16} />
            about.md
            </File>
            <File href="/vscode/skills">
              <FileJson size={16} />
              skills.tsx
            </File>
          </Folder>

          <Folder title="Outlines">
            <File href="/terminal/projects">
              <Briefcase size={16} />
              projects.md
            </File>
            <File href="/terminal/contact">
              <Contact size={16} />
              contact.css
            </File>
          </Folder>

          <Folder title="Others">
            <File href="/others/dev-setup">
              <Cpu size={16} />
              dev.setup
            </File>
            <File href="/others/personal">
              <User size={16} />
              personal.json
            </File>
            {/* <File href="/others/recording-setup">
            <Film size={16} />
            recording.setup
          </File> */}
          </Folder>
        </SubMenu>
      </nav>
    </div>
  )
}
