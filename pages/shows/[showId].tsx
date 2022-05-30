import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { Show } from '../../types'
import { apiClient } from '../../utils/api'

const ShowPage: NextPage = () => {
  const router = useRouter()
  const [show, setShow] = useState<Show | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const showId = useMemo(() => parseInt(router.query.showId?.toString() || '', 10), [router.query])

  useEffect(() => {
    if (!showId) return

    apiClient<Show>(`/api/shows/${showId}`).then(setShow).catch(setError)
  }, [showId])

  if (error)
    return (
      <h1>
        An error happenned <p>{error.message}</p>
      </h1>
    )

  if (!show) return null

  return (
    <section className="text-center">
      <span className="font-semibold ml-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs text-purple-800 dark:bg-purple-200 dark:text-purple-900">
        {show.type}
      </span>
      <h1 className="my-3 text-3xl">
        {show.title} ({show.year})
      </h1>
      <div className="my-6 w-full">
        <Image className="rounded-md" src={show.cover} width={300} height={400} />
      </div>
      <p></p>
      {show.genres.map((genre: string) => (
        <span key={genre}>{genre}&nbsp;</span>
      ))}
      <h2 className="my-6 font-extra-light">{show.overview}</h2>
    </section>
  )
}

export default ShowPage
