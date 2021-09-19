import { VOCA_DATA } from '@pages/voca/data'
import VocaField from '../VocaField'
import * as S from './VocaBox.style'

export default function VocaBox() {
  return (
    <S.Container>
      {VOCA_DATA.map((voca) => (
        <VocaField voca={voca} />
      ))}
    </S.Container>
  )
}
