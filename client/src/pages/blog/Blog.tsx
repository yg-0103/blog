import Layout from 'src/Layout/Layout'
import * as CS from './common.style'
import PostList from './components/PostList'

interface Props {
  [key: string]: { title: string; content: string; category: string; createdAt: string }[]
}

export default function Blog({ posts }: Props) {
  return (
    <Layout>
      <CS.Section>
        <PostList posts={posts} />
      </CS.Section>
    </Layout>
  )
}
