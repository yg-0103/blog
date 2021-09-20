export interface Post {
  title: string
  content: string
  hashTags: string[]
}

export interface PostResponse extends Post {
  createdAt: string
  updateAt: string
  _id: string
}
