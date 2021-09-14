import { asyncGetPosts } from '@store/atom'
import { useEffect } from 'react'
import { useRecoilValueLoadable, useResetRecoilState } from 'recoil'
import PostCard from '../PostCard'
import * as S from './PostList.style'

export default function PostList() {
  const posts = useRecoilValueLoadable(asyncGetPosts)
  const refetch = useResetRecoilState(asyncGetPosts)

  useEffect(() => {
    refetch()
  }, [])

  if (posts.state !== 'hasValue') return null

  return (
    <S.Container>
      {posts.contents?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </S.Container>
  )
}
