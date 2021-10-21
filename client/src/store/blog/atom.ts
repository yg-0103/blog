import { atom, selector } from 'recoil'
import { PostData } from './model'

export const postsList = atom<PostData | null>({
  key: 'Posts',
  default: null,
})

export const selectedPostTab = atom({
  key: 'SelectedPostTab',
  default: 'all',
})

export const currentPostList = selector({
  key: 'CurrentPostList',
  get: ({ get }) => {
    const postList = get(postsList)
    const selectedTab = get(selectedPostTab)

    return postList?.[selectedTab]
  },
})
