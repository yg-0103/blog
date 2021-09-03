import { asyncGetPosts } from '@store/atom'
import { useRecoilValueLoadable } from 'recoil'
import PostCard from '../PostCard'
import * as S from './PostList.style'

export default function PostList() {
  const posts = useRecoilValueLoadable(asyncGetPosts)
  console.log(posts)
  return (
    <S.Container>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </S.Container>
  )
}
