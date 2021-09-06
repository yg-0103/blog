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
    const { data: post } = await API.get('/post')
    return post
  } catch (e) {
    console.error(e)
  }
}
