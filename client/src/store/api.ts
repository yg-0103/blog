import axios from 'axios'
import * as T from './type'

const API = axios.create({
  baseURL: 'http://localhost:4500',
})

export const addPost = async (payload: T.Post) => {
  console.log(333)
  try {
    const { data: post } = await API.post('/post', payload)
    return post
  } catch (e) {
    console.error(e)
  }
}

export const getPosts = async () => {
  try {
    const { data: posts } = await API.get<T.PostResponse[]>('/post')
    return posts
  } catch (e) {
    console.error(e)
  }
}

export const getPost = async (postId: string) => {
  try {
    const { data: post } = await API.get<T.PostResponse>(`/post/${postId}`)
    return post
  } catch (e) {
    console.error(e)
  }
}

export const deletePost = async (postId: string) => {
  try {
    await API.delete(`/post/${postId}`)
  } catch (e) {
    console.error(e)
  }
}
