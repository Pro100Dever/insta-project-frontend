// import Post from './pages/post/Post'
import { Home, Search } from 'lucide-react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Chat from './pages/chat/Chat'
import EditProfile from './pages/editProfile/EditProfile'
import Explore from './pages/explore/Explore'
import Login from './pages/login/Login'
import NewPass from './pages/newPass/NewPass'
import NotFound from './pages/notFound/NotFound'
import Post from './pages/post/Post'
import Profile from './pages/profile/Profile'
import ResetPassword from './pages/reset/ResetPassword'
import SingUp from './pages/singUp/SingUp'
import './shared/styles/_global.scss'
import Footer from './widgets/footer/Footer'
import Notification from './widgets/sidebar/notification/Notifications'
import PostCreate from './widgets/sidebar/postCreate/PostCreate'
// import Footer from './widgets/footer/Footer'
// import Sidebar from './widgets/sidebar/Sidebar'

function App() {
  const location = useLocation()
  const background = location.state?.background

  return (
    <BrowserRouter>
      <Routes location={background || location}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SingUp />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/new-password' element={<NewPass />} />

        <Route element={<Footer />}>
          <Route path='/home' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/messages' element={<Chat />} />
          <Route
            path='/user/:id/profile'
            element={<Profile myProfile={false} />}
          />
          <Route
            path='/user/my-profile'
            element={<Profile myProfile={true} />}
          />
          <Route path='/user/my-profile/edit' element={<EditProfile />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route element={<Footer />}>
            <Route path='/search' element={<Search />} />
            <Route path='/notifications' element={<Notification />} />
            <Route path='/post/create' element={<PostCreate />} />
            <Route path='/post/:id' element={<Post />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App
