import { VOCA_DATA } from '@pages/voca/data'
import { atom, selector } from 'recoil'

export enum TAB_ITEM {
  SPELL = 'Spell',
  MEAN = 'Mean',
  RANDOM = 'Random',
}

export const selectedTab = atom({
  key: 'SelectedTab',
  default: TAB_ITEM.SPELL,
})

export const vocaList = selector({
  key: 'VocaList',
  get: ({ get }) => {
    const activeTab = get(selectedTab)

    switch (activeTab) {
      case TAB_ITEM.MEAN: {
        return VOCA_DATA.map((voca) => ({
          quiz: voca.voca,
          answer: voca.mean,
        }))
      }
      case TAB_ITEM.SPELL: {
        return VOCA_DATA.map((voca) => ({
          quiz: voca.mean,
          answer: voca.voca,
        }))
      }
      case TAB_ITEM.RANDOM: {
        return VOCA_DATA.map((voca) => {
          const random = Math.random()

          return random > 0.5
            ? { quiz: voca.mean, answer: voca.voca }
            : { quiz: voca.voca, answer: voca.mean }
        })
      }
    }
  },
})
