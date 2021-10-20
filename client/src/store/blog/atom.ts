import { atom } from 'recoil'
import { PostData } from './model'

export const postsList = atom<PostData | null>({
  key: 'Posts',
  default: null,
})

export const quizCount = atom({
  key: 'QuizCount',
  default: 10,
})
