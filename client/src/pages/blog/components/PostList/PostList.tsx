import PostCard from '../PostCard'
import * as S from './PostList.style'

interface Props {
  [key: string]: {
    title: string
    content: string
    category: string
    createdAt: string
  }[]
}

export default function PostList({ posts }: Props) {
  const p = Object.values(posts).flat()

  return (
    <S.Container>
      {p.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
      {/* {posts.contents?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))} */}
    </S.Container>
  )
}
