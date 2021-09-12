import { atom, selector, selectorFamily } from 'recoil'
import { getPost, getPosts } from './api'
import { Post, PostResponse } from './type'

export enum MODE {
  READ = '글 쓰기',
  WRITE = '저장',
}

export const blogMode = atom({
  key: 'BlogMode',
  default: MODE.READ,
})

export const blogTitle = atom({
  key: 'BlogTitle',
  default: '',
})

export const blogSearch = atom({
  key: 'BlogSearch',
  default: '',
})

export const blogContent = atom({
  key: 'BlogContent',
  default: '',
})

export const blogHashTag = atom<string[]>({
  key: 'BlogHashTag',
  default: [],
})

export const blogInputValue = selector({
  key: 'BlogInputValue',
  get: ({ get }) => {
    const mode = get(blogMode)

    switch (mode) {
      case MODE.READ:
        return get(blogSearch)
      case MODE.WRITE:
        return get(blogTitle)
    }
  },
})

export const postState = selector<Post>({
  key: 'PostState',
  get: ({ get }) => ({
    title: get(blogTitle),
    content: get(blogContent),
    hashTags: get(blogHashTag),
  }),
})

export const asyncGetPosts = atom({
  key: 'AsyncGetPosts',
  default: selector({
    key: 'AsyncGetPost/Default',
    get: () => getPosts(),
  }),
})

export const asyncGetPost = selectorFamily({
  key: 'AsyncGetPost',
  get:
    (postId: string) =>
    async ({}) => {
      const post = await getPost(postId)
      return post
    },
})
