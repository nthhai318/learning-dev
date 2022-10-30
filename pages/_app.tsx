import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { FunctionComponent, ReactElement } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page:ReactElement) => page)

  return getLayout(
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )

}
