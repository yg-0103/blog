import PostHeader from './components/PostHeader'
import Layout from 'src/Layout/Layout'
import * as CS from './common.style'
import PostBody from './components/PostBody'
export default function PostDetail() {
  return (
    <Layout>
      <CS.Section>
        <PostHeader />
        <PostBody />
      </CS.Section>
    </Layout>
  )
}
