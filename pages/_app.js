import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header, Footer } from '@/components'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className='container mx-auto'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </QueryClientProvider>
  )
}
