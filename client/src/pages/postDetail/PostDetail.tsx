import PostHeader from './components/PostHeader'
import Layout from 'src/Layout/Layout'
import * as CS from './common.style'
import PostBody from './components/PostBody'
import { useRouter } from 'next/dist/client/router'
import { useRecoilValueLoadable } from 'recoil'
import { asyncGetPost } from '@store/blog/atom'
import withCSR from 'src/hoc/withCSR'

function PostDetail() {
  const { query } = useRouter()
  const post = useRecoilValueLoadable(asyncGetPost(query.postId as string))

  if (post.state !== 'hasValue' && !post.contents) return null
  const { _id, title, hashTags, content, createdAt } = post.contents || {}

  return (
    <Layout>
      <CS.Section>
        <PostHeader id={_id} title={title} hashTags={hashTags} createdAt={createdAt} />
        <PostBody content={content} />
      </CS.Section>
    </Layout>
  )
}

export default withCSR(PostDetail)
