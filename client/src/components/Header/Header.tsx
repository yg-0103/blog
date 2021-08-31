import Logo from '@components/Logo'
import Navigation from '@components/Navigation'
import { useEffect } from 'react'
import { useState } from 'react'
import useResponsive from 'src/hooks/useResposive'
import * as S from './Header.style'

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false)
  const { isSmall } = useResponsive()

  const handleActive = () => {
    setActiveMenu((prev) => !prev)
  }

  useEffect(() => {
    setActiveMenu(false)
  }, [isSmall])
  return (
    <S.Header>
      <S.Container>
        <Logo />
        <Navigation activeMenu={activeMenu} handleActive={handleActive} />

        {isSmall && (
          <S.HamburgerButton active={activeMenu} onClick={handleActive}>
            <S.CenterBar />
          </S.HamburgerButton>
        )}
      </S.Container>
    </S.Header>
  )
}
