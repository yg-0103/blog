import axios from 'axios'
import * as T from './type'

const API = axios.create({
  baseURL: 'http://localhost:5500',
})

export const addPost = async (payload: T.Post) => {
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

export const deletePost = async (postId: string) => {
  try {
    await API.delete(`/post/${postId}`)
  } catch (e) {
    console.error(e)
  }
}

export const updatePost = async (postId: string, payload: T.Post) => {
  try {
    await API.patch(`/post/${postId}`, payload)
  } catch (e) {
    console.error(e)
  }
}
