import Button from '@components/Button'
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
      <S.NumberInput type="text" value={count} onChange={handleChangeCout} />
      <Button style={{ width: '8rem', height: '4rem' }}>선택</Button>
    </S.Container>
  )
}
