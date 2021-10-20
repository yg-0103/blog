import { GetStaticProps } from 'next'
import fs from 'fs'
import { join } from 'path'
export { default } from '@pages/blog'

interface Posts {
  [key: string]: { title: string; content: string; category: string }[]
}

const POSTS_PATH = join(process.cwd(), 'src/pages/blog/contents')

export const getStaticProps: GetStaticProps = () => {
  const categories = fs.readdirSync(POSTS_PATH).filter((category) => category !== '.DS_Store')

  const posts = categories.reduce<Posts>((acc, cur) => {
    acc[cur] = fs.readdirSync(`${POSTS_PATH}/${cur}`).map((file) => ({
      title: file.replace(/\.md/, ''),
      content: fs.readFileSync(`${POSTS_PATH}/${cur}/${file}`).toString(),
      category: cur,
      createdAt: new Date(fs.statSync(`${POSTS_PATH}/${cur}/${file}`).mtime).toLocaleString(),
    }))
    return acc
  }, {})

  return {
    props: {
      postsData: posts,
    },
  }
}
