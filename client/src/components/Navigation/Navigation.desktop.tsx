import { useRouter } from 'next/dist/client/router'
import * as S from './Navigation.style'
import Link from 'next/link'
const navItems = ['home', 'about', 'blog', 'contact']

export default function NavigationDesktop() {
  const { pathname } = useRouter()

  return (
    <S.Nav>
      {navItems.map((navItem) => (
        <Link href={`/${navItem}`} key={navItem}>
          <S.NavItem active={pathname.includes(navItem)}>
            {navItem.replace(/./, (letter) => letter.toUpperCase())}
          </S.NavItem>
        </Link>
      ))}
    </S.Nav>
  )
}
