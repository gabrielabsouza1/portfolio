import '../styles/globals.scss'
import ContextApiAnimation from '../context/useAnimationContext'

export default function MyApp({ Component, pageProps }) {

  return (
    <ContextApiAnimation>
      <Component {...pageProps} />
    </ContextApiAnimation>
  )

}


