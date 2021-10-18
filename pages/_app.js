import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default App
