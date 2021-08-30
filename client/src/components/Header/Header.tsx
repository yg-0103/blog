import Logo from '@components/Logo'
import Navigation from '@components/Navigation'
import * as S from './Header.style'

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <Logo />
        <Navigation />
      </S.Container>
    </S.Header>
  )
}
