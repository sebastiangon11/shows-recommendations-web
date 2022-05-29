import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

const companyName: string | undefined = process.env.NEXT_PUBLIC_COMPANY_NAME

export default function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{companyName}</title>
      </Head>

      <Header>{companyName}</Header>

      <main>
        <Component {...pageProps} />
      </main>

      <Footer>
        {companyName} @ {new Date().getFullYear()}
      </Footer>
    </>
  )
}
