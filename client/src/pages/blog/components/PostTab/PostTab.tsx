import * as S from './PostTab.style'

interface Props {
  categories: string[]
}

export default function PostTab({ categories }: Props) {
  return (
    <S.Container>
      {['all', ...categories].map((category) => (
        <S.TabItem key={category}>
          {category.replace(/./, (letter) => letter.toUpperCase())}
        </S.TabItem>
      ))}
    </S.Container>
  )
}
