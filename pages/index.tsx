import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Show recommendations web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="font-bold text-3xl">Show recommendations web</h1>
        <h2 className="mt-8">Comming soon.</h2>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  )
}

export default Home
