import * as S from './VocaInput.style'
import { FcOk, FcHighPriority } from 'react-icons/fc'
import { ChangeEvent, useState } from 'react'
import { getType } from '@utils/getType'

interface Props {
  answer: string | string[]
}

export default function VocaInput({ answer }: Props) {
  const [value, setValue] = useState('')

  const handleChageValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const isSuccess = getType(answer) === 'string' ? answer === value : answer.includes(value)
  return (
    <S.Container>
      <S.Input value={value} onChange={handleChageValue} />
      <S.Lable>{isSuccess ? <FcOk size={20} /> : <FcHighPriority size={20} />}</S.Lable>
    </S.Container>
  )
}
