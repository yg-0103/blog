import * as S from './PostBody.style'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  content: string
}

export default function PostBody({ content }: Props) {
  return (
    <S.Container>
      <S.Content
        components={{
          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter style={materialDark} language="js" PreTag="div">
                {String(children)?.replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className}>{children}</code>
            )
          },
        }}
      >
        {content}
      </S.Content>
    </S.Container>
  )
}
