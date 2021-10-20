export interface PostData {
  [key: string]: Post[]
}

export interface Post {
  title: string
  content: string
  category: string
  createdAt: string
}
