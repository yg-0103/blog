import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const useResponsive = () => {
  const small = useMediaQuery({ maxWidth: 800 })
  const large = useMediaQuery({ minWidth: 801 })
  const [viewSize, setViewSize] = useState({
    isSmall: false,
    isLarge: false,
  })
  const { isSmall, isLarge } = viewSize

  useEffect(() => {
    setViewSize({
      isSmall: small,
      isLarge: large,
    })
  }, [small, large])
  return {
    isSmall,
    isLarge,
  }
}

export default useResponsive
