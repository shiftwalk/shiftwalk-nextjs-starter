import Container from './container'

export default function Footer() {
  return (
    <footer className="mb-4">
      <Container>
        <div className="border-t border-black py-4">
          <small className="flex flex-wrap">
            <span className="block">Hello from the footer</span>
            <span className="ml-auto block">&copy; { new Date().getFullYear() }</span>
          </small>
        </div>
      </Container>
    </footer>
  )
}