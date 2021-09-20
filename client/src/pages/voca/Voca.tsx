import Layout from 'src/Layout/Layout'
import VocaBox from './components/VocaBox'
import * as CS from './common.style'
import VocaTab from './components/VocaTab'

export default function Voca() {
  return (
    <Layout>
      <CS.Section>
        <VocaTab />
        <VocaBox />
      </CS.Section>
    </Layout>
  )
}
