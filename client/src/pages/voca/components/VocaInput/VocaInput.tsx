import * as S from './VocaInput.style'
import { FcOk, FcHighPriority } from 'react-icons/fc'
import { ChangeEvent, useRef, useState } from 'react'
import { getType } from '@utils/getType'
import useResponsive from 'src/hooks/useResposive'

interface Props {
  answer: string | string[]
}

export default function VocaInput({ answer }: Props) {
  const [value, setValue] = useState('')
  const { isSmall } = useResponsive()
  const ref = useRef<HTMLInputElement>(null)
  const handleChageValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleScrollTop = () => {
    if (!ref.current) return
    const top = ref.current.getBoundingClientRect().y

    window.scrollTo({
      top: top + window.scrollY - (isSmall ? 110 : 80),
      behavior: 'smooth',
    })
  }
  const currentAnswer = (getType(answer) === 'string' ? [answer] : answer) as string[]

  const isSuccess = currentAnswer
    .map((answer) => answer.toLocaleLowerCase().replaceAll(' ', ''))
    .includes(value.toLocaleLowerCase().replaceAll(' ', ''))

  return (
    <S.Container>
      <S.Input
        ref={ref}
        value={value}
        onChange={handleChageValue}
        onFocus={handleScrollTop}
        success={isSuccess}
      />
      <S.Lable>{isSuccess ? <FcOk size={16} /> : <FcHighPriority size={16} />}</S.Lable>
    </S.Container>
  )
}
