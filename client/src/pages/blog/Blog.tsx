import { postsList } from '@store/blog/atom'
import { Post } from '@store/blog/model'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
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
  const [posts, setPosts] = useRecoilState(postsList)

  useEffect(() => {
    setPosts(postsData)
  }, [])

  if (!posts) return null
  const categories = Object.keys(posts)
  return (
    <Layout>
      <CS.Section>
        <PostTab categories={categories} />
        <PostList postData={posts} />
      </CS.Section>
    </Layout>
  )
}
