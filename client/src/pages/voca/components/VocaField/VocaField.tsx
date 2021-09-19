import { Voca } from '@pages/voca/data'
import { ChangeEvent } from 'react'
import VocaInput from '../VocaInput'
import * as S from './VocaField.style'

interface Props {
  voca: Voca
}

export default function VocaField({ voca }: Props) {
  return (
    <S.VocaField>
      <S.Vocabulary>{voca.voca}</S.Vocabulary>
      {voca.mean.map(() => (
        <VocaInput mean={voca.mean} />
      ))}
    </S.VocaField>
  )
}
