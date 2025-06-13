import style from './footer.module.scss'

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.list}>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>Search</a>
        </li>
        <li>
          <a href=''>Explore</a>
        </li>
        <li>
          <a href=''>Messages</a>
        </li>
        <li>
          <a href=''>Notifications</a>
        </li>
        <li>
          <a href=''>Create</a>
        </li>
      </ul>
      <h4 className={style.inc}>© 2024 ICHgram</h4>
    </footer>
  )
}

export default Footer
