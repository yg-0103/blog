import { atom, atomFamily, selector, selectorFamily } from 'recoil'
import { getPost, getPosts } from './api'
import { Post } from './type'

export enum MODE {
  READ = '글 쓰기',
  WRITE = '저장',
  EDIT = '수정',
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
      case MODE.EDIT:
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

export const _postTrigger = atomFamily({
  key: 'PostTrigger',
  default: Date.now(),
})

export const asyncGetPosts = selector({
  key: 'AsyncGetPosts',
  get: async ({ get }) => {
    get(_postTrigger('asyncGetPosts'))
    const posts = await getPosts()
    return posts
  },
  set: ({ set }) => {
    set(_postTrigger('asyncGetPosts'), Date.now())
  },
})

export const asyncGetPost = atomFamily({
  key: 'AsyncGetPost',
  default: selectorFamily({
    key: 'AsycnGetPost/Default',
    get:
      (postId: string) =>
      ({ get }) => {
        const posts = get(asyncGetPosts)
        return posts?.find((post) => post._id === postId)
      },
  }),
})
