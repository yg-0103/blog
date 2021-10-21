import { selectedPostTab } from '@store/blog/atom'
import { useRecoilState } from 'recoil'
import * as S from './PostTab.style'

interface Props {
  categories: string[]
}

export default function PostTab({ categories }: Props) {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedPostTab)

  return (
    <S.Container>
      {categories.map((category) => (
        <S.TabItem
          key={category}
          active={selectedTab === category}
          onClick={() => setSelectedTab(category)}
        >
          {category.replace(/./, (letter) => letter.toUpperCase())}
        </S.TabItem>
      ))}
    </S.Container>
  )
}
