import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import Explore from '../../shared/assets/icons/compas.svg'
import Create from '../../shared/assets/icons/create.svg'
import Notification from '../../shared/assets/icons/heart.svg'
import Home from '../../shared/assets/icons/home.svg'
import Search from '../../shared/assets/icons/loop.svg'
import Massage from '../../shared/assets/icons/message.svg'
import Logo from '../../shared/assets/image/Logo.png'
import style from './sidebar.module.scss'

function Sidebar() {
  const { user } = useContext(AuthContext)
  const location = useLocation()
  const userAvatar = user?.avatar || '/this_is_fine.png'

  return (
    <nav className={style.nav}>
      <div className={style.navBox}>
        <img src={Logo} alt='Logo' width='97' height='55' />
        <ul className={style.list}>
          <li>
            <Link to='/home'>
              <img src={Home} alt='Home' />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to='search' state={{ background: location }}>
              <img src={Search} alt='Search' />
              <p>Search</p>
            </Link>
          </li>
          <li>
            <Link to='/explore'>
              <img src={Explore} alt='Explore' />
              <p>Explore</p>
            </Link>
          </li>
          <li>
            <Link to='/messages'>
              <img src={Massage} alt='Massage' />
              <p>Massage</p>
            </Link>
          </li>
          <li>
            <Link to='/notifications' state={{ background: location }}>
              <img src={Notification} alt='Notification' />
              <p>Notification</p>
            </Link>
          </li>
          <li>
            <Link to='/post/create' state={{ background: location }}>
              <img src={Create} alt='Create' />
              <p>Create</p>
            </Link>
          </li>
        </ul>
        <Link to='/user/my-profile' className={style.profileLink}>
          <img src={userAvatar} alt='ProfilePhoto' />
          <p>{user?.fullName}</p>
        </Link>
      </div>
    </nav>
  )
}

export default Sidebar
