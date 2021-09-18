import dynamic from 'next/dynamic'
import React, { useEffect, useRef } from 'react'
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor'
import { TuiEditorWithForwardedProps } from './MarkdownEditorWrapper'
import '@toast-ui/editor/dist/toastui-editor.css'
import * as S from './MarkdownEditor.style'
import { useSetRecoilState } from 'recoil'
import { blogContent } from '@store/atom'
import HashTagInput from '../HashTagInput'

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import('./MarkdownEditorWrapper'), {
  ssr: false,
})

const EditorWithForwardedRef = React.forwardRef<EditorType | undefined, EditorProps>(
  (props, ref) => <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
)

export default function MarkdownEditor({
  content,
  hashTags,
}: {
  content?: string
  hashTags?: string[]
}) {
  const editorRef = useRef<EditorType>()
  const setContent = useSetRecoilState(blogContent)

  const handleChange = () => {
    if (!editorRef.current) {
      return
    }

    const instance = editorRef.current.getInstance()
    setContent(instance.getMarkdown())
  }

  useEffect(() => {
    setContent(content || '')
  }, [])

  return (
    <S.Container>
      <HashTagInput defaultHashTags={hashTags} />
      <EditorWithForwardedRef
        previewStyle={'vertical'}
        height="600px"
        initialEditType="markdown"
        ref={editorRef}
        onChange={handleChange}
        initialValue={content}
      />
    </S.Container>
  )
}
