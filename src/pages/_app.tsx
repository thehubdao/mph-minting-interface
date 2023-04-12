import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins, Work_Sans  } from 'next/font/google'
import Humane from 'next/font/local'

const workSans = Work_Sans({ subsets: ['latin'], display: 'block' })
const poppins = Poppins({ subsets: ['latin'], display: 'block', weight: '700' })
const humane = Humane({ src: '../styles/fonts/Humane-Medium.woff2', display: 'block' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --work-font: ${workSans.style.fontFamily};
            --humane-font: ${humane.style.fontFamily};
            --poppins-font: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
