import '../styles/globals.scss'
import { MotionConfig } from 'framer-motion'

export default function MyApp({ Component, pageProps }) {
  return (
    <MotionConfig reducedMotion="user">
      <Component {...pageProps} />
    </MotionConfig>
  )
}
