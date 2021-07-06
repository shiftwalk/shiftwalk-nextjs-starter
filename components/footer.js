import Container from '@/components/container'

export default function Footer() {
  return (
    <footer className="mb-4">
      <Container>
        <div className="border-t border-black py-4">
          <div className="flex flex-wrap text-xs">
            <div className="flex space-x-1 mb-1 md:mb-0">
              <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500 focus:text-gray-500">MIT License</a>

              <span className="block">&bull;</span>

              <span className="block"><a href="https://github.com/samuelgoddard/next-tailwind-motion" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500 focus:text-gray-500">Github</a></span>

              <span className="block">&bull;</span>

              <span className="block"><a href="https://twitter.com/samuelgoddard" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500 focus:text-gray-500">Twitter</a></span>
            </div>

            <div className="md:ml-auto w-full md:w-auto flex space-x-1">
              <span className="block">Maintained by <a href="https://samgoddard.co.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500 focus:text-gray-500">Sam Goddard</a></span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}