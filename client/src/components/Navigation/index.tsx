import useResponsive from 'src/hooks/useResposive'
import NavigationDesktop from './Navigation.desktop'
import NavigationMobile from './Navigation.mobile'

interface Props {
  activeMenu: boolean
  handleActive: () => void
}

export default function Navigation({ activeMenu, handleActive }: Props) {
  const { isSmall } = useResponsive()

  return isSmall ? (
    <NavigationMobile activeMenu={activeMenu} handleActive={handleActive} />
  ) : (
    <NavigationDesktop />
  )
}
