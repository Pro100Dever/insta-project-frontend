import './shared/styles/_global.scss'
import Footer from './widgets/footer/Footer'
import Search from './widgets/sidebar/search/Search'
import Sidebar from './widgets/sidebar/Sidebar'

function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Search />
      </div>
      <Footer />
    </>
  )
}

export default App
