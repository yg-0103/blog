import { getDate } from '@utils/getDate'
import * as S from './PostCard.style'
import Link from 'next/link'
interface Props {
  post: { title: string; content: string; category: string; createdAt: string }
}

const image: { [key: string]: string } = {
  react: 'react.png',
  javascript: 'js.jpeg',
  typescript: 'ts.png',
  learn: 'code.jpeg',
}

export default function PostCard({ post }: Props) {
  console.log(post)
  return (
    <Link href={`/blog/${post.title}`} passHref>
      <S.Container>
        <S.ImageWrapper>
          <img src={image[post.category]} alt="code" />
        </S.ImageWrapper>
        <S.ContentWrapper>
          <S.PostTitle>{post.title}</S.PostTitle>
          <S.PostContent>{post.content}</S.PostContent>
          <S.TimeStemp>{getDate(post.createdAt.replaceAll?.(' ', ''))}</S.TimeStemp>
        </S.ContentWrapper>
      </S.Container>
    </Link>
  )
}
