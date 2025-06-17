import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './providers/AppRoutes'
import { AuthProvider } from './providers/AuthProvider'
import './shared/styles/_global.scss'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
