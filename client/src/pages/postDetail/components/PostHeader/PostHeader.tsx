import Button from '@components/Button'
import { deletePost } from '@store/blog/api'
import { blogMode, MODE } from '@store/blog/atom'
import { useRouter } from 'next/dist/client/router'
import { useSetRecoilState } from 'recoil'
import { getDate } from '@utils/getDate'
import * as S from './PostHeader.style'

interface Props {
  id: string
  title: string
  createdAt: string
  hashTags: string[]
}

export default function PostHeader({ id, title, createdAt, hashTags }: Props) {
  const router = useRouter()
  const setMode = useSetRecoilState(blogMode)
  const handleRemovePost = async () => {
    await deletePost(id)
    setMode(MODE.READ)
    router.back()
  }

  const handleEditPost = () => {
    router.push(`/blog#${id}`)
    setMode(MODE.WRITE)
  }

  return (
    <S.Container>
      <S.PostTitle>{title}</S.PostTitle>
      <S.Author>김연구</S.Author>
      <S.TimeStemp>{getDate(createdAt)}</S.TimeStemp>
      <S.HashTagWrapper>
        {hashTags?.map((hashTag) => (
          <S.HashTag key={hashTag}>{hashTag}</S.HashTag>
        ))}
      </S.HashTagWrapper>
      <S.ButtonWrapper>
        <Button onClick={handleEditPost}>수정</Button>
        <Button onClick={handleRemovePost}>삭제</Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}
