import { Link } from 'react-router-dom'
import style from './footer.module.scss'

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.list}>
        <li>
          <Link to=''>Home</Link>
        </li>
        <li>
          <Link to=''>Search</Link>
        </li>
        <li>
          <Link to=''>Explore</Link>
        </li>
        <li>
          <Link to=''>Messages</Link>
        </li>
        <li>
          <Link to=''>Notifications</Link>
        </li>
        <li>
          <Link to=''>Create</Link>
        </li>
      </ul>
      <h4 className={style.inc}>© 2024 ICHgram</h4>
    </footer>
  )
}

export default Footer
