import * as S from './VocaInput.style'
import { FcOk, FcHighPriority } from 'react-icons/fc'
import { ChangeEvent, useRef, useState } from 'react'
import { getType } from '@utils/getType'

interface Props {
  answer: string | string[]
}

export default function VocaInput({ answer }: Props) {
  const [value, setValue] = useState('')
  const ref = useRef<HTMLInputElement>(null)
  const handleChageValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleScrollTop = () => {
    if (!ref.current) return
    const top = ref.current.getBoundingClientRect().y

    window.scrollTo({
      top: top + window.scrollY - 30,
      behavior: 'smooth',
    })
  }
  const currentAnswer = getType(answer) === 'string' ? [answer] : answer
  const isSuccess = currentAnswer.includes(value)

  return (
    <S.Container>
      <S.Input ref={ref} value={value} onChange={handleChageValue} onFocus={handleScrollTop} />
      <S.Lable>{isSuccess ? <FcOk size={20} /> : <FcHighPriority size={20} />}</S.Lable>
    </S.Container>
  )
}
