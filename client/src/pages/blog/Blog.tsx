import Button from '@components/Button'
import Layout from 'src/Layout/Layout'
import * as CS from './common.style'
import MarkdownEditor from './components/MarkdownEditor'
import Input from './components/Input'
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import { asyncGetPost, blogContent, blogHashTag, blogMode, MODE, postState } from '@store/atom'
import PostList from './components/PostList'
import * as API from '@store/api'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'

export default function Blog() {
  const [mode, setMode] = useRecoilState(blogMode)
  const router = useRouter()
  const postData = useRecoilValue(postState)
  const setContent = useSetRecoilState(blogContent)
  const setHashTags = useSetRecoilState(blogHashTag)
  const getHash = (path: string) => path.match(/#.+/g)?.join('').replace('#', '') || ''
  const post = useRecoilValueLoadable(asyncGetPost(getHash(router.asPath)))
  console.log(post)
  const handleChangeMode = async () => {
    setMode((prev) => (prev === MODE.READ ? MODE.WRITE : MODE.READ))

    mode === MODE.WRITE && (await API.addPost(postData))
    setContent('')
    setHashTags([])
  }

  useEffect(() => {
    console.log(getHash(router.asPath))
    getHash(router.asPath) ? setMode(MODE.EDIT) : setMode(MODE.READ)
  }, [])

  if (post.state !== 'hasValue') return null

  return (
    <Layout>
      <CS.Section>
        <CS.FlexWrapper>
          <Input title={post.contents?.title} />
          <Button onClick={handleChangeMode}>{mode}</Button>
          {mode !== MODE.READ && <Button onClick={() => setMode(MODE.READ)}>취소</Button>}
        </CS.FlexWrapper>
        {mode !== MODE.READ ? (
          <MarkdownEditor content={post.contents?.content} hashTags={post.contents?.hashTags} />
        ) : (
          <PostList />
        )}
      </CS.Section>
    </Layout>
  )
}
