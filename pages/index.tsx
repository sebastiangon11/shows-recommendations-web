import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Show } from '../types'
import { getErrorMessage } from '../utils/getErrorMessage'

const companyName: string | undefined = process.env.NEXT_PUBLIC_COMPANY_NAME

const getShow = async ({ showId }: { showId: number }): Promise<Show> => {
  try {
    const apiResponse = await fetch(`/api/shows/${showId}`)

    if (!apiResponse.ok) {
      const errorJson = await apiResponse.json()
      throw new Error(errorJson.message)
    }

    const show = apiResponse.json()
    return show
  } catch (error) {
    console.error(
      `Something went wrong while fetching show with id ${showId}`,
      getErrorMessage(error)
    )
    throw error
  }
}

const Home: NextPage = () => {
  const [show, setShow] = useState<Show | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getShow({ showId: 1 }).then(setShow).catch(setError)
  }, [])

  if (error)
    return (
      <h1>
        An error happenned <p>{error.message}</p>
      </h1>
    )

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>{companyName} | Welcome</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        {show ? (
          <>
            <h1 className="mx-4 my-6 text-3xl">{show.title}</h1>
            <p>Year {show.year}</p>
            <p>
              <span className="font-semibold rounded bg-purple-100 px-2.5 py-0.5 text-xs text-purple-800 dark:bg-purple-200 dark:text-purple-900">
                {show.type}
              </span>
            </p>
            <h2 className="mx-4 my-6 font-extra-light">{show.overview}</h2>
            <div className="my-6 w-full text-center">
              <Image className="rounded-md" src={show.cover} width={300} height={400} />
            </div>
          </>
        ) : null}
      </main>

      <footer className="flex h-24 w-full items-center justify-center font-extra-light">
        {companyName} @ {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Home
