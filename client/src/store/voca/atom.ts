import { VOCA_DATA } from '@pages/voca/data'
import { atom, selector } from 'recoil'

export enum TAB_ITEM {
  SPELL = 'Spell',
  MEAN = 'Mean',
  RANDOM = 'Random',
  LAST30 = 'Last 30',
}

export const selectedTab = atom({
  key: 'SelectedTab',
  default: TAB_ITEM.SPELL,
})

export const quizCount = atom({
  key: 'QuizCount',
  default: 10,
})

export const vocaList = selector({
  key: 'VocaList',
  get: ({ get }) => {
    const activeTab = get(selectedTab)
    const count = get(quizCount)

    const vocaList = [...VOCA_DATA].sort(() => Math.random() - 0.5).slice(0, count)
    switch (activeTab) {
      case TAB_ITEM.MEAN: {
        return vocaList.map((voca) => ({
          quiz: voca.voca,
          answer: voca.mean,
        }))
      }
      case TAB_ITEM.SPELL: {
        return vocaList.map((voca) => ({
          quiz: voca.mean,
          answer: voca.voca,
        }))
      }
      case TAB_ITEM.RANDOM: {
        return vocaList.map((voca) => {
          const random = Math.random()

          return random > 0.5
            ? { quiz: voca.mean, answer: voca.voca }
            : { quiz: voca.voca, answer: voca.mean }
        })
      }
      case TAB_ITEM.LAST30: {
        return VOCA_DATA.slice(VOCA_DATA.length - 30).map((voca) => {
          const random = Math.random()

          return random > 0.5
            ? { quiz: voca.mean, answer: voca.voca }
            : { quiz: voca.voca, answer: voca.mean }
        })
      }
    }
  },
})
