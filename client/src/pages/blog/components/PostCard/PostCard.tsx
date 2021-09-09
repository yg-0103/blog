import { PostResponse } from '@store/type'
import { getDate } from 'src/utill/getDate'
import * as S from './PostCard.style'
import Link from 'next/link'
interface Props {
  post: PostResponse
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post._id}`}>
      <S.Container>
        <S.ImageWrapper>
          <img src="" />
        </S.ImageWrapper>
        <S.ContentWrapper>
          <S.PostTitle>{post.title}</S.PostTitle>
          <S.PostContent>{post.content}</S.PostContent>
          <S.TimeStemp>{getDate(post.createdAt)}</S.TimeStemp>
        </S.ContentWrapper>
      </S.Container>
    </Link>
  )
}
