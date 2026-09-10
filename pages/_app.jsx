import '../styles/globals.scss'
import ContextApiAnimation from '../context/useAnimationContext'
import { MotionConfig } from 'framer-motion'

export default function MyApp({ Component, pageProps }) {

  return (
    <MotionConfig reducedMotion="user">
      <ContextApiAnimation>
        <Component {...pageProps} />
      </ContextApiAnimation>
    </MotionConfig>
  )

}
