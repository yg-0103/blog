import { GetStaticProps } from 'next'
import fs from 'fs'
import { join } from 'path'
export { default } from '@pages/blog'

interface Posts {
  [key: string]: { title: string; content: string; category: string; createdAt: string }[]
}

const POSTS_PATH = join(process.cwd(), 'src/pages/blog/contents')

export const getStaticProps: GetStaticProps = () => {
  const categories = fs.readdirSync(POSTS_PATH).filter((category) => category !== '.DS_Store')

  const posts = categories.reduce<Posts>(
    (acc, cur) => {
      acc[cur] = fs
        .readdirSync(`${POSTS_PATH}/${cur}`)
        .filter((category) => category !== '.DS_Store')
        .map((file) => ({
          title: file.replace(/\.md/, ''),
          content: fs.readFileSync(`${POSTS_PATH}/${cur}/${file}`).toString(),
          category: cur,
          createdAt: new Date(
            fs.statSync(`${POSTS_PATH}/${cur}/${file}`).mtime
          ).toLocaleDateString(),
        }))
        .sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt))
      acc.all = [...acc.all, ...acc[cur]].sort(
        (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
      )
      return acc
    },
    { all: [] }
  )

  return {
    props: {
      postsData: posts,
    },
  }
}
