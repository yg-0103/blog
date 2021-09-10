import Button from '@components/Button'
import { getDate } from 'src/utill/getDate'
import * as S from './PostHeader.style'

interface Props {
  id: number
  title: string
  createdAt: string
  hashTags: string[]
}

export default function PostHeader({ title, createdAt, hashTags }: Props) {
  return (
    <S.Container>
      <S.PostTitle>{title}</S.PostTitle>
      <S.Author>김연구</S.Author>
      <S.TimeStemp>{getDate(createdAt)}</S.TimeStemp>
      <S.HashTagWrapper>
        {hashTags.map((hashTag) => (
          <S.HashTag>{hashTag}</S.HashTag>
        ))}
      </S.HashTagWrapper>
      <S.ButtonWrapper>
        <Button>수정</Button>
        <Button>삭제</Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}
