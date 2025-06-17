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
import { AccessRoute } from '../widgets/accessRoute/AccessRoute'
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
        <Route
          path='/login'
          element={
            <AccessRoute onlyPublic>
              <Login />
            </AccessRoute>
          }
        />
        <Route
          path='/register'
          element={
            <AccessRoute onlyPublic>
              <SingUp />
            </AccessRoute>
          }
        />
        <Route
          path='/reset-password'
          element={
            <AccessRoute onlyPublic>
              <ResetPassword />
            </AccessRoute>
          }
        />
        <Route
          path='/new-password'
          element={
            <AccessRoute onlyPublic>
              <NewPass />
            </AccessRoute>
          }
        />

        <Route element={<MainLayout />}>
          <Route
            path='/home'
            element={
              <AccessRoute>
                <Home />
              </AccessRoute>
            }
          />
          <Route
            path='/explore'
            element={
              <AccessRoute>
                <Explore />
              </AccessRoute>
            }
          />
          <Route
            path='/messages'
            element={
              <AccessRoute>
                <Chat />
              </AccessRoute>
            }
          />
          <Route
            path='/user/:id/profile'
            element={
              <AccessRoute>
                <Profile myProfile={false} />
              </AccessRoute>
            }
          />
          <Route
            path='/user/my-profile'
            element={
              <AccessRoute>
                <Profile myProfile={true} />
              </AccessRoute>
            }
          />
          <Route
            path='/user/my-profile/edit'
            element={
              <AccessRoute>
                <EditProfile />
              </AccessRoute>
            }
          />
          <Route
            path='/search'
            element={
              <AccessRoute>
                <Search />
              </AccessRoute>
            }
          />
          <Route
            path='/notifications'
            element={
              <AccessRoute>
                <Notification />
              </AccessRoute>
            }
          />
          <Route
            path='/post/create'
            element={
              <AccessRoute>
                <PostCreate />
              </AccessRoute>
            }
          />
          <Route
            path='/post'
            element={
              <AccessRoute>
                <Post />
              </AccessRoute>
            }
          />{' '}
          {/*Добавить для пути /:id*/}
          <Route
            path='*'
            element={
              <AccessRoute>
                <NotFound />
              </AccessRoute>
            }
          />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              path='/search'
              element={
                <AccessRoute>
                  <Search />
                </AccessRoute>
              }
            />
            <Route
              path='/notifications'
              element={
                <AccessRoute>
                  <Notification />
                </AccessRoute>
              }
            />
            <Route
              path='/post/create'
              element={
                <AccessRoute>
                  <PostCreate />
                </AccessRoute>
              }
            />
            <Route
              path='/post/:id'
              element={
                <AccessRoute>
                  <Post />
                </AccessRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  )
}

export default AppRoutes
