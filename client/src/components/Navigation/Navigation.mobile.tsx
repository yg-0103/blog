import { useRouter } from 'next/dist/client/router'
import * as S from './Navigation.mobile.style'
import Link from 'next/link'

interface Props {
  activeMenu: boolean
  handleActive: () => void
}

const navItems = ['home', 'about', 'blog', 'contact', 'voca']

export default function NavigationMobile({ activeMenu, handleActive }: Props) {
  const { pathname } = useRouter()

  return (
    <S.Nav active={activeMenu}>
      {navItems.map((navItem) => (
        <Link href={`/${navItem}`}>
          <S.NavItem key={navItem} onClick={handleActive} active={pathname.includes(navItem)}>
            {navItem.replace(/./, (letter) => letter.toUpperCase())}
          </S.NavItem>
        </Link>
      ))}
    </S.Nav>
  )
}
