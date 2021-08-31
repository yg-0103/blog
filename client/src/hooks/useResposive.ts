import { useMediaQuery } from 'react-responsive'

const useResponsive = () => {
  const isSmall = useMediaQuery({ maxWidth: 800 })
  const isLarge = useMediaQuery({ minWidth: 801 })

  return {
    isSmall,
    isLarge,
  }
}

export default useResponsive
