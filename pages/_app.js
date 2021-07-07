import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <DefaultSeo {...SEO} />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}