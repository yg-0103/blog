import { PostResponse } from '@store/type'
import * as S from './PostCard.style'

interface Props {
  post: PostResponse
}

export default function PostCard({ post }: Props) {
  return (
    <S.Container>
      <S.ImageWrapper>
        <img src="" />
      </S.ImageWrapper>
      <S.ContentWrapper>
        <S.PostTitle>{post.title}</S.PostTitle>
        <S.PostContent>{post.content}</S.PostContent>
        <S.TimeStemp>{post.createdAt}</S.TimeStemp>
      </S.ContentWrapper>
    </S.Container>
  )
}
