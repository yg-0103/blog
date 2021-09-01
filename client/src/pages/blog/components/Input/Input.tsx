import { blogInputValue, blogMode, blogSearch, blogTitle, MODE } from '@store/atom'
import { FocusEventHandler, useEffect } from 'react'
import { ChangeEvent } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './Input.style'

export default function Input() {
  const setTitle = useSetRecoilState(blogTitle)
  const setSearch = useSetRecoilState(blogSearch)
  const value = useRecoilValue(blogInputValue)
  const mode = useRecoilValue(blogMode)

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    mode === MODE.READ ? setSearch(e.target.value) : setTitle(e.target.value)
  }

  useEffect(() => {
    setTitle('')
    setSearch('')
  }, [mode])

  return (
    <S.Container>
      <S.Input
        onChange={handleChangeValue}
        value={value}
        onFocus={(e) => {
          e.target.select()
        }}
      />
    </S.Container>
  )
}
