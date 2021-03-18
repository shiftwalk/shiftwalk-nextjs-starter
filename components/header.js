import Link from 'next/link'
import Container from './container'

export default function Header() {
  return (
    <header className="py-4 bg-gray-200 mb-4 md:mb-6 xl:mb-8">
      <Container>
        <div className="flex flex-wrap">
          <span>SG Next Starter</span>

          <div className="ml-auto">
            <Link href="/">
              <a aria-label="Navigate to about page" className="underline inline-block ml-5">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a aria-label="Navigate to about page" className="underline inline-block ml-5">
                About
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}