import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="text-center mt-4 col-md-6 mx-auto"> 
        <h1 className="text-danger mb-5">Hello Bootstrap</h1>
        <div className='mb-5'>
        <p>
        <Link className='mb-5' href="/company/about-us">About us</Link>
        </p>
        <p>
        <Link href="/company/approach">Approach</Link>
        </p>
        <p>
          <Link href="/company/partnership">Partnership</Link>
        </p>
        </div>
      </div>
    </main>
  )
}