import type { AppProps } from 'next/app'
import { GlobalStyle } from '@styles/globalStyle'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default MyApp
