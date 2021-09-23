import type { AppProps } from 'next/app'
import { GlobalStyle } from '@styles/globalStyle'
import { RecoilRoot } from 'recoil'
import { Head } from 'next/document'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="manifest.json" />
        <script type="module">
          import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate' const el =
          document.createElement('pwa-update') document.body.appendChild(el)
        </script>
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}
export default MyApp
