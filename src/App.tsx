import EditProfile from './pages/editProfile/EditProfile'
import './shared/styles/_global.scss'
import Footer from './widgets/footer/Footer'
import Sidebar from './widgets/sidebar/Sidebar'

function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <EditProfile />
      </div>
      <Footer />
    </>
  )
}

export default App
