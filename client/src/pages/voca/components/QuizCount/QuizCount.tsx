import { VOCA_DATA } from '@pages/voca/data'
import { quizCount } from '@store/voca/atom'
import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './QuizCount.style'

export default function QuizCount() {
  const [count, setCount] = useRecoilState(quizCount)

  const handleChangeCout = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (isNaN(value)) return
    value >= VOCA_DATA.length ? setCount(VOCA_DATA.length) : setCount(value)
  }

  return (
    <S.Container>
      <S.Label>Number of quizzes</S.Label>
      <S.Input type="text" value={count} onChange={handleChangeCout} />
    </S.Container>
  )
}
