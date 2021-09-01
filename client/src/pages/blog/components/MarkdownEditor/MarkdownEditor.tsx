import dynamic from 'next/dynamic'
import React, { useRef } from 'react'
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor'
import { TuiEditorWithForwardedProps } from './MarkdownEditorWrapper'
import '@toast-ui/editor/dist/toastui-editor.css'
import * as S from './MarkdownEditor.style'

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: React.ReactNode): void
}
const Editor = dynamic<TuiEditorWithForwardedProps>(() => import('./MarkdownEditorWrapper'), {
  ssr: false,
})

const EditorWithForwardedRef = React.forwardRef<EditorType | undefined, EditorPropsWithHandlers>(
  (props, ref) => <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
)

interface Props extends EditorProps {
  onChange(value: string): void

  valueType?: 'markdown' | 'html'
}

export default function MarkdownEditor({ onChange }: Props) {
  const editorRef = useRef<EditorType>()
  const handleChange = () => {
    if (!editorRef.current) {
      return
    }

    const instance = editorRef.current.getInstance()

    onChange(instance.getHTML())
  }

  return (
    <S.Container>
      <EditorWithForwardedRef
        previewStyle={'vertical'}
        height="600px"
        initialEditType="markdown"
        ref={editorRef}
        onChange={handleChange}
      />
    </S.Container>
  )
}
