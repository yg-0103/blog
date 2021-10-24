import { currentPostList, postsList } from '@store/blog/atom'
import { Post } from '@store/blog/model'
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Layout from 'src/Layout/Layout'
import * as CS from './common.style'
import PostList from './components/PostList'
import PostTab from './components/PostTab'

interface Props {
  postsData: {
    [key: string]: Post[]
  }
}

export default function Blog({ postsData }: Props) {
  const setPosts = useSetRecoilState(postsList)
  const currentPosts = useRecoilValue(currentPostList)
  useEffect(() => {
    setPosts(postsData)
  }, [])

  if (!currentPosts) return null

  const categories = Object.keys(postsData)
  return (
    <Layout>
      <CS.Section>
        <PostTab categories={categories} />
        <PostList postData={currentPosts} />
      </CS.Section>
    </Layout>
  )
}
