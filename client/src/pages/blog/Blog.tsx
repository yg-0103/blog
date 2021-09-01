import Button from '@components/Button'
import { useState } from 'react'
import Layout from 'src/Layout/Layout'
import * as CS from './common.style'
import MarkdownEditor from './components/MarkdownEditor'
import SearchInput from './components/SearchInput'

enum MODE {
  READ = '글 쓰기',
  WRITE = '저장',
}

export default function Blog() {
  const [mode, setMode] = useState<MODE>(MODE.READ)

  const handleChangeMode = () => {
    setMode((prev) => (prev === MODE.READ ? MODE.WRITE : MODE.READ))
  }
  return (
    <Layout>
      <CS.Section>
        <CS.FlexWrapper>
          <SearchInput />
          <Button onClick={handleChangeMode}>{mode}</Button>
        </CS.FlexWrapper>
        {mode === MODE.WRITE && <MarkdownEditor onChange={console.log} />}
      </CS.Section>
    </Layout>
  )
}
