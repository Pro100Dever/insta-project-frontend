import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './providers/AppRoutes'
import { AuthProvider } from './providers/AuthProvider'
import './shared/styles/_global.scss'

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
