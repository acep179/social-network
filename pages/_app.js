import { Header, Footer } from '@/components'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='container mx-auto'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
