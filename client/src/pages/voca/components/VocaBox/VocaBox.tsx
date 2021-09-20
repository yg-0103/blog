import { VOCA_DATA } from '@pages/voca/data'
import { vocaList } from '@store/voca/atom'
import { useRecoilValue } from 'recoil'
import VocaField from '../VocaField'
import * as S from './VocaBox.style'

export default function VocaBox() {
  const vocaData = useRecoilValue(vocaList)

  console.log(vocaData)

  return (
    <S.Container>
      {vocaData.map((voca) => (
        <VocaField voca={voca} />
      ))}
    </S.Container>
  )
}
