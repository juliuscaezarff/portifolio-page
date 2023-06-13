'use client'

interface CodePreviewProps {
  code: string
}

export function CodePreview({ code }: CodePreviewProps) {

  const lines = code.split('\n')

  return (
    <>
      <div className="flex">
        <div className="w-12 mr-2 text-gray-500">
          {/* Números das linhas */}
          {lines.map((_, index) => (
            <div key={index} className="text-right">
              {index + 1}
            </div>
          ))}
        </div>
        
        <div
        id="shiki-code"
        className="absolute inset-0 overflow-auto leading-relaxed scrollbar scrollbar-thumb-[#2B283B] scrollbar-track-transparent"
        dangerouslySetInnerHTML={{ __html: code }}
      />
      
      </div>
    </>
  )
}
