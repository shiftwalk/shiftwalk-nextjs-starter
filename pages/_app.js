import '@/styles/main.css'
import { useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const containerRef = useRef(null)

  return (
    <>
      <DefaultSeo {...SEO} />

      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.05
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
      </LocomotiveScrollProvider>
    </>
  )
}