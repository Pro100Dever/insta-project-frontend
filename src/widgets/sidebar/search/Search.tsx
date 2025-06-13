import ProfilePhoto from '../../../shared/assets/image/mock-profile-photo.png'
import style from './search.module.scss'

function Search() {
  return (
    <div>
      <div className={style.notiBox}>
        <h2 className={style.title}>Search</h2>
        <div>
          <input className={style.input} type='search' placeholder='Search' />
        </div>
        <div>
          <p className={style.listName}>Recent</p>
          <ul className={style.list}>
            <li>
              <a href=''>
                <div className={style.listItemRight}>
                  <img
                    className={style.userPhoto}
                    src={ProfilePhoto}
                    alt='profile-photo'
                    width='44'
                    height='44'
                  />
                  <div>
                    <p className={style.username}>Username</p>
                    <p className={style.fullName}>Full name</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href=''>
                <div className={style.listItemRight}>
                  <img
                    className={style.userPhoto}
                    src={ProfilePhoto}
                    alt='profile-photo'
                    width='44'
                    height='44'
                  />
                  <div>
                    <p className={style.username}>Username</p>
                    <p className={style.fullName}>Full name</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href=''>
                <div className={style.listItemRight}>
                  <img
                    className={style.userPhoto}
                    src={ProfilePhoto}
                    alt='profile-photo'
                    width='44'
                    height='44'
                  />
                  <div>
                    <p className={style.username}>Username</p>
                    <p className={style.fullName}>Full name</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.background}></div>
    </div>
  )
}
export default Search
