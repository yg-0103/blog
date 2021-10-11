import { getDate } from '@utils/getDate'
import * as S from './PostCard.style'
import Link from 'next/link'
interface Props {
  post: { title: string; content: string; category: string; createdAt: string }
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.title}`} passHref>
      <S.Container>
        <S.ImageWrapper>
          <img src="code.jpeg" alt="code" />
        </S.ImageWrapper>
        <S.ContentWrapper>
          <S.PostTitle>{post.title}</S.PostTitle>
          <S.PostContent>{post.content}</S.PostContent>
          <S.TimeStemp>{getDate(post.createdAt.replaceAll(' ', ''))}</S.TimeStemp>
        </S.ContentWrapper>
      </S.Container>
    </Link>
  )
}
