import { blogHashTag } from '@store/atom'
import { KeyboardEvent, useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './HashTagInput.style'

export default function HashTagInput({ defaultHashTags = [] }: { defaultHashTags?: string[] }) {
  const [hashTags, setHashTags] = useRecoilState(blogHashTag)
  const ref = useRef<HTMLInputElement>(null)

  const handleHashTags = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!ref.current || !['Enter', ' '].includes(e.key)) return
    setHashTags((prev) => [...prev, ref.current!.value])
    ref.current.value = ''
  }

  useEffect(() => {
    setHashTags((prev) => defaultHashTags || prev)
  }, [])

  return (
    <S.Container>
      {hashTags.map((hashTag) => (
        <S.HashTag key={hashTag}>{hashTag}</S.HashTag>
      ))}
      <S.Input ref={ref} placeholder="키워드를 입력해주세요." onKeyPress={handleHashTags} />
    </S.Container>
  )
}
