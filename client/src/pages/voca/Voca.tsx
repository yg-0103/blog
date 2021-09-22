import Layout from 'src/Layout/Layout'
import VocaBox from './components/VocaBox'
import * as CS from './common.style'
import VocaTab from './components/VocaTab'
import QuizCount from './components/QuizCount'

export default function Voca() {
  return (
    <Layout>
      <CS.Section>
        <CS.OptionsWrapper>
          <VocaTab />
          <QuizCount />
        </CS.OptionsWrapper>
        <VocaBox />
      </CS.Section>
    </Layout>
  )
}
