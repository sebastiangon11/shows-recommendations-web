import type { NextPage } from 'next'
import Head from 'next/head'

const companyName: String | undefined = process.env.NEXT_PUBLIC_COMPANY_NAME

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>{companyName} | Welcome</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-3xl font-bold">{companyName} web.</h1>
        <p className="mt-8">Comming soon...</p>
        <p>Wait for it</p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center font-extra-light">
        {companyName} @ {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Home
