import { Outlet } from 'react-router-dom'
import Footer from '../widgets/footer/Footer'
import Sidebar from '../widgets/sidebar/Sidebar'

function MainLayout() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />

        <Outlet />
      </div>
      <Footer />
    </>
  )
}
export default MainLayout
