import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <section>
      <p>Home Page</p>

      <span className="mt-4 inline-block">
        <Link href="/shows/1">Check a show detail</Link>
      </span>
    </section>
  )
}

export default Home
