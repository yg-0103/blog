import PostCard from '../PostCard'
import * as S from './PostList.style'

export default function PostList() {
  return (
    <S.Container>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </S.Container>
  )
}
