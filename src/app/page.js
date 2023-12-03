import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Empuls3</h1>
      <p>
        <Link href="/company/about">
         About Us
        </Link>
      </p>
    </main>
  )
}