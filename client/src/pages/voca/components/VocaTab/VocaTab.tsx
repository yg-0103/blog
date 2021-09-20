import { selectedTab, TAB_ITEM } from '@store/voca/atom'
import { useRecoilState } from 'recoil'
import * as S from './VocaTab.style'

const TabItem: Record<TAB_ITEM, string> = {
  [TAB_ITEM.SPELL]: 'Spell',
  [TAB_ITEM.MEAN]: 'Mean',
  [TAB_ITEM.RANDOM]: 'Random',
}

export default function VocaTab() {
  const [activeTab, setActiveTab] = useRecoilState(selectedTab)

  const handleChangeActiveTab = (tab: TAB_ITEM) => {
    setActiveTab(tab)
  }

  return (
    <S.Container>
      {Object.keys(TabItem).map((tab) => (
        <S.TabItem
          active={activeTab === tab}
          onClick={() => handleChangeActiveTab(tab as TAB_ITEM)}
        >
          {TabItem[tab as TAB_ITEM]}
        </S.TabItem>
      ))}
    </S.Container>
  )
}
