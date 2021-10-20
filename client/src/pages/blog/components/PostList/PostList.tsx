import { PostData } from '@store/blog/model'
import PostCard from '../PostCard'
import * as S from './PostList.style'

interface Props {
  postData: PostData
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
