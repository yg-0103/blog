import * as S from './VocaInput.style'
import { FcOk, FcHighPriority } from 'react-icons/fc'
import { ChangeEvent, useState } from 'react'

interface Props {
  mean: string[]
}

export default function VocaInput({ mean }: Props) {
  const [value, setValue] = useState('')

  const handleChageValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const isSuccess = mean.includes(value)
  console.log(mean, value)
  return (
    <S.Container>
      <S.Input value={value} onChange={handleChageValue} />
      <S.Lable>{isSuccess ? <FcOk size={20} /> : <FcHighPriority size={20} />}</S.Lable>
    </S.Container>
  )
}
