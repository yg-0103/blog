import Button from '@components/Button'
import * as S from './PostHeader.style'

export default function PostHeader() {
  return (
    <S.Container>
      <S.PostTitle>포스트 제목</S.PostTitle>
      <S.Author>김연구</S.Author>
      <S.TimeStemp>5일 전</S.TimeStemp>
      <S.HashTagWrapper>
        <S.HashTag>리액트</S.HashTag>
        <S.HashTag>타입스크립트</S.HashTag>
        <S.HashTag>익스프레스</S.HashTag>
        <S.HashTag>몽고디비</S.HashTag>
        <S.HashTag>넥스트제이에스</S.HashTag>
      </S.HashTagWrapper>
      <S.ButtonWrapper>
        <Button>수정</Button>
        <Button>삭제</Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}
