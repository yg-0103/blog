import { asyncGetPosts } from '@store/atom'
import { useRecoilValueLoadable } from 'recoil'
import PostCard from '../PostCard'
import * as S from './PostList.style'

export default function PostList() {
  const posts = useRecoilValueLoadable(asyncGetPosts)

  if (posts.state !== 'hasValue') return null
  return (
    <S.Container>
      {posts.contents?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </S.Container>
  )
}
