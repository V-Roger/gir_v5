import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import useKonami from 'react-use-konami'
import Context from '../components/context'

function MyApp({ Component, pageProps }: AppProps) {
  const [negative, setNegative] = useState(false);
  useKonami(() => {
    setNegative(!negative)
  }, {
    code: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'], 
  });

  return  <Context.Provider value={{ negative }}>
            <Component {...pageProps} />
          </Context.Provider>
}
export default MyApp
