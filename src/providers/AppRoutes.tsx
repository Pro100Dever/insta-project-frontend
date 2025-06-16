import { Route, Routes, useLocation } from 'react-router-dom'
import Chat from '../pages/chat/Chat'
import EditProfile from '../pages/editProfile/EditProfile'
import Explore from '../pages/explore/Explore'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import NewPass from '../pages/newPass/NewPass'
import NotFound from '../pages/notFound/NotFound'
import Post from '../pages/post/Post'
import Profile from '../pages/profile/Profile'
import ResetPassword from '../pages/reset/ResetPassword'
import SingUp from '../pages/singUp/SingUp'
import Notification from '../widgets/sidebar/notification/Notifications'
import PostCreate from '../widgets/sidebar/postCreate/PostCreate'
import Search from '../widgets/sidebar/search/Search'
import MainLayout from './MainLayout'

function AppRoutes() {
  const location = useLocation()
  const background = location.state?.background

  return (
    <>
      <Routes location={background || location}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SingUp />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/new-password' element={<NewPass />} />

        <Route element={<MainLayout />}>
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
          <Route path='/search' element={<Search />} />
          <Route path='/notifications' element={<Notification />} />
          <Route path='/post/create' element={<PostCreate />} />
          <Route path='/post' element={<Post />} /> {/*Добавить для пути /:id*/}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/search' element={<Search />} />
            <Route path='/notifications' element={<Notification />} />
            <Route path='/post/create' element={<PostCreate />} />
            <Route path='/post/:id' element={<Post />} />
          </Route>
        </Routes>
      )}
    </>
  )
}

export default AppRoutes
