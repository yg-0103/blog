import { blogInputValue, blogMode, blogSearch, blogTitle, MODE } from '@store/blog/atom'
import { useEffect } from 'react'
import { ChangeEvent } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './Input.style'

const placeholder: Record<MODE, string> = {
  [MODE.READ]: '검색어를 입력해주세요',
  [MODE.WRITE]: '제목을 입력해주세요',
  [MODE.EDIT]: '제목을 입력해주세요',
}

export default function Input({ title }: { title?: string }) {
  const setTitle = useSetRecoilState(blogTitle)
  const setSearch = useSetRecoilState(blogSearch)
  const value = useRecoilValue(blogInputValue)
  const mode = useRecoilValue(blogMode)

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    mode === MODE.READ ? setSearch(e.target.value) : setTitle(e.target.value)
  }

  useEffect(() => {
    setTitle(title || '')
    setSearch('')
  }, [mode, setSearch, setTitle, title])

  return (
    <S.Container>
      <S.Input
        placeholder={placeholder[mode]}
        onChange={handleChangeValue}
        value={value}
        defaultValue={title}
        onFocus={(e) => {
          e.target.select()
        }}
      />
    </S.Container>
  )
}
