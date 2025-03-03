
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
// import Friend from './pages/Friend'
import Products from './pages/Products'

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Friend /> */}
        <Products />
      </QueryClientProvider>

    </>
  )
}

export default App
