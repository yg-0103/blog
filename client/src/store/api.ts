import axios from 'axios'
import { Post } from './type'

const API = axios.create({
  baseURL: 'http://localhost:4500',
})

export const addPost = async (payload: Post) => {
  try {
    const { data: post } = await API.post('/post', payload)
    return post
  } catch (e) {
    console.error(e)
  }
}

export const getPosts = async () => {
  try {
    const { data: post } = await API.get('/post')
    return post
  } catch (e) {
    console.error(e)
  }
}
