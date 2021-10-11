import { getDate } from '@utils/getDate'
import * as S from './PostHeader.style'

interface Props {
  title: string
  category: string
  createdAt: string
}

export default function PostHeader({ title, category, createdAt }: Props) {
  return (
    <S.Container>
      <S.PostTitle>{title}</S.PostTitle>
      <S.Author>김연구</S.Author>
      <S.TimeStemp>{getDate(createdAt)}</S.TimeStemp>
      <S.HashTagWrapper>
        <S.HashTag>{category}</S.HashTag>
      </S.HashTagWrapper>
    </S.Container>
  )
}
