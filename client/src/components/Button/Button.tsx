import { HTMLAttributes } from 'react'
import * as S from './Button.style'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, ...restProps }: Props) {
  return <S.Button {...restProps}>{children}</S.Button>
}
