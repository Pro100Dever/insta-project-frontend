import Explore from '../../shared/assets/icons/compas.svg'
import Create from '../../shared/assets/icons/create.svg'
import Notification from '../../shared/assets/icons/heart.svg'
import Home from '../../shared/assets/icons/home.svg'
import Search from '../../shared/assets/icons/loop.svg'
import Massage from '../../shared/assets/icons/message.svg'
import Logo from '../../shared/assets/image/Logo.png'
import ProfilePhoto from '../../shared/assets/image/mock-profile-photo.png'
import style from './sidebar.module.scss'

function Sidebar() {
  return (
    <nav className={style.nav}>
      <img src={Logo} alt='Logo' width='97' height='55' />
      <ul className={style.list}>
        <li>
          <a href=''>
            <img src={Home} alt='Home' />
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href=''>
            <img src={Search} alt='Search' />
            <p>Search</p>
          </a>
        </li>
        <li>
          <a href=''>
            <img src={Explore} alt='Explore' />
            <p>Explore</p>
          </a>
        </li>
        <li>
          <a href=''>
            <img src={Massage} alt='Massage' />
            <p>Massage</p>
          </a>
        </li>
        <li>
          <a href=''>
            <img src={Notification} alt='Notification' />
            <p>Notification</p>
          </a>
        </li>
        <li>
          <a href=''>
            <img src={Create} alt='Create' />
            <p>Create</p>
          </a>
        </li>
      </ul>
      <a className={style.profileLink}>
        <img src={ProfilePhoto} alt='ProfilePhoto' />
        <p>Default name</p>
      </a>
    </nav>
  )
}

export default Sidebar
