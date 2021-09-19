import Layout from 'src/Layout/Layout'
import VocaBox from './components/VocaBox'
import * as CS from './common.style'

export default function Voca() {
  return (
    <Layout>
      <CS.Section>
        <VocaBox />
      </CS.Section>
    </Layout>
  )
}
