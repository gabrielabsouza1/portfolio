import '../styles/globals.scss'
import { MotionConfig } from 'framer-motion'
import { Analytics } from '@vercel/analytics/next'

export default function MyApp({ Component, pageProps }) {
  return (
    <MotionConfig reducedMotion="user">
      <Component {...pageProps} />
      <Analytics />
    </MotionConfig>
  )
}
