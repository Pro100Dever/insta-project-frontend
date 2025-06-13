import NotFound from './pages/notFound/NotFound'
import './shared/styles/_global.scss'
import Footer from './widgets/footer/Footer'
import Sidebar from './widgets/sidebar/Sidebar'

function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <NotFound />
      </div>
      <Footer />
    </>
  )
}

export default App
