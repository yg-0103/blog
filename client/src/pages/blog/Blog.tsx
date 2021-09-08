import Button from '@components/Button'
import Layout from 'src/Layout/Layout'
import * as CS from './common.style'
import MarkdownEditor from './components/MarkdownEditor'
import Input from './components/Input'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { blogContent, blogHashTag, blogMode, MODE, postState } from '@store/atom'
import PostList from './components/PostList'
import * as API from '@store/api'
import { useRouter } from 'next/dist/client/router'

export default function Blog() {
  const [mode, setMode] = useRecoilState(blogMode)
  const post = useRecoilValue(postState)
  const setContent = useSetRecoilState(blogContent)
  const setHashTags = useSetRecoilState(blogHashTag)
  const router = useRouter()

  const handleChangeMode = async () => {
    setMode((prev) => (prev === MODE.READ ? MODE.WRITE : MODE.READ))

    mode === MODE.WRITE && (await API.addPost(post))
    setContent('')
    setHashTags([])
  }

  return (
    <Layout>
      <CS.Section>
        <CS.FlexWrapper>
          <Input />
          <Button onClick={handleChangeMode}>{mode}</Button>
          {mode === MODE.WRITE && <Button onClick={() => setMode(MODE.READ)}>취소</Button>}
        </CS.FlexWrapper>
        {mode === MODE.WRITE ? <MarkdownEditor /> : <PostList />}
      </CS.Section>
    </Layout>
  )
}
