import Button from '@components/Button'
import Layout from 'src/Layout/Layout'
import * as CS from './common.style'
import MarkdownEditor from './components/MarkdownEditor'
import Input from './components/Input'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { blogContent, blogMode, MODE, postState } from '@store/atom'
import PostList from './components/PostList'

export default function Blog() {
  const [mode, setMode] = useRecoilState(blogMode)
  const setContent = useSetRecoilState(blogContent)
  const post = useRecoilValue(postState)

  const handleChangeMode = () => {
    setContent('')
    setMode((prev) => (prev === MODE.READ ? MODE.WRITE : MODE.READ))
  }

  return (
    <Layout>
      <CS.Section>
        <CS.FlexWrapper>
          <Input />
          <Button onClick={handleChangeMode}>{mode}</Button>
        </CS.FlexWrapper>
        {mode === MODE.WRITE && <MarkdownEditor />}
        <PostList />
      </CS.Section>
    </Layout>
  )
}
