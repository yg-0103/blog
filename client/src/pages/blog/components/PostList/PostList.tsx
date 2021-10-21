import { Post } from '@store/blog/model'
import PostCard from '../PostCard'
import * as S from './PostList.style'

interface Props {
  postData: Post[]
}

export default function PostList({ postData }: Props) {
  const posts = Object.values(postData).flat()

  return (
    <S.Container>
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </S.Container>
  )
}
