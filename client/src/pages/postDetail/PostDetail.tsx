import PostHeader from './components/PostHeader'
import Layout from 'src/Layout/Layout'
import * as CS from './common.style'
import PostBody from './components/PostBody'

interface Props {
  post: {
    title: string
    content: string
    category: string
    createdAt: string
  }
}

function PostDetail({ post }: Props) {
  const { title, content, category, createdAt } = post || {}

  return (
    <Layout>
      <CS.Section>
        <PostHeader title={title} category={category} createdAt={createdAt} />
        <PostBody content={content} />
      </CS.Section>
    </Layout>
  )
}

export default PostDetail
