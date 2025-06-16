import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './providers/AppRoutes'
import './shared/styles/_global.scss'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
