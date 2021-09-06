import * as S from './PostCard.style'

export default function PostCard() {
 
  return (
    <S.Container>
      <S.ImageWrapper>
        <img src="" />
      </S.ImageWrapper>
      <S.ContentWrapper>
        <S.PostTitle>포스트 제목</S.PostTitle>
        <S.PostContent>
          포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트
          내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트
          내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용포스트
          내용포스트 내용포스트 내용포스트 내용포스트 내용포스트 내용
        </S.PostContent>
        <S.TimeStemp>2020.11.11</S.TimeStemp>
      </S.ContentWrapper>
    </S.Container>
  )
}
