import Post from './pages/post/Post'
import './shared/styles/_global.scss'
import Footer from './widgets/footer/Footer'
import Sidebar from './widgets/sidebar/Sidebar'

function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        {/* <Home /> */}
        <Post />
      </div>
      <Footer />
    </>
  )
}

export default App
