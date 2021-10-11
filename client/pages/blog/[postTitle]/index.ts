import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'
import { join } from 'path'
export { default } from '@pages/postDetail'

interface allFile {
  [key: string]: { title: string; content: string; category: string }[]
}

const POSTS_PATH = join(process.cwd(), 'src/pages/blog/contents')

export const getStaticPaths: GetStaticPaths = () => {
  const categories = fs.readdirSync(POSTS_PATH)
  const postPaths = categories.map((category) => fs.readdirSync(`${POSTS_PATH}/${category}`)).flat()

  return {
    paths: postPaths.map((path) => ({ params: { postTitle: path } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const categories = fs.readdirSync(POSTS_PATH)

  const posts = categories.reduce<allFile>((acc, category) => {
    acc[category] = fs.readdirSync(`${POSTS_PATH}/${category}`).map((file) => ({
      title: file.replace(/\.md/, ''),
      content: fs.readFileSync(`${POSTS_PATH}/${category}/${file}`).toString(),
      category,
      createdAt: new Date(fs.statSync(`${POSTS_PATH}/${category}/${file}`).mtime).toLocaleString(),
    }))
    return acc
  }, {})

  return {
    props: {
      post: Object.values(posts)
        .flat()
        .find((post) => post.title === context?.params?.postTitle),
    },
  }
}
