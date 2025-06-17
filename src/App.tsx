import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './providers/AppRoutes'
import { AuthProvider } from './providers/AuthProvider'
import './shared/styles/_global.scss'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
