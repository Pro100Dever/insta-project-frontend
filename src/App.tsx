import './shared/styles/_global.scss'
import Footer from './widgets/footer/Footer'
import PostCreate from './widgets/sidebar/postCreate/PostCreate'
import Sidebar from './widgets/sidebar/Sidebar'

function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <PostCreate />
      </div>
      <Footer />
    </>
  )
}

export default App
