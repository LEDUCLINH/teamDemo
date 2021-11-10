import 'nprogress/nprogress.css'
import '../src/styles/global.scss'

import { DefaultSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import AuthProvider from '../src/utils/auth/auth-context'
import CityProvider from '../src/utils/city/city-context'
import { initFirebaseApp } from '../src/utils/firebase/firebase-app'
import MuiProvider from '../src/utils/mui/mui-provider'
import defaultSeoConfig from '../src/utils/seo/default-seo.config'
import UrqlProvider from '../src/utils/urql/urql-provider'
import UserProvider from '../src/utils/user/user-context'

import type { AppProps, NextWebVitalsMetric } from 'next/app'

const TopProgressBar = dynamic(
  () => import('../src/components/_shared/top-progress-bar/top-progress-bar'),
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {
  initFirebaseApp()

  return (
    <>
      <DefaultSeo {...defaultSeoConfig} />

      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MuiProvider>
        <AuthProvider>
          <UrqlProvider>
            <UserProvider>
              <CityProvider>
                <TopProgressBar />
                <Component {...pageProps} />
              </CityProvider>
            </UserProvider>
          </UrqlProvider>
        </AuthProvider>
      </MuiProvider>
    </>
  )
}

export default MyApp

// Record Web Vitals in GTM
// See:
// - https://nextjs.org/docs/advanced-features/measuring-performance#sending-results-to-analytics
// - https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-tag-manager
export async function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  if (!process.env['NEXT_PUBLIC_GTM_ID']) {
    return
  }

  ;(window as any).dataLayer.push({
    event: label,
    event_category: label === 'web-vital' ? 'Web Vitals' : `Next.js Metrics`,
    event_action: name,
    event_value: Math.round(name === 'CLS' ? value * 1000 : value),
    event_label: id,
  })
}
