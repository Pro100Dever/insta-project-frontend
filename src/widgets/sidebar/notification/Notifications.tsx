import PostPhoto from '../../../shared/assets/image/mock-post-img.png'
import ProfilePhoto from '../../../shared/assets/image/mock-profile-photo.png'
import style from './notifications.module.scss'

function Notification() {
  return (
    <div>
      <div className={style.notiBox}>
        <h2 className={style.title}>Notifications</h2>
        <span className={style.span}>New</span>
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
                  <p className={style.username}>
                    Username <span>liked your</span>
                  </p>
                  <p>
                    photo. <span className={style.dateTime}>2 d</span>
                  </p>
                </div>
              </div>
              <img
                src={PostPhoto}
                className={style.postPhoto}
                alt='PostPhoto'
                width='44'
                height='44'
              />
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
                  <p className={style.username}>
                    Username <span>liked your</span>
                  </p>
                  <p>
                    photo. <span className={style.dateTime}>2 d</span>
                  </p>
                </div>
              </div>
              <img
                src={PostPhoto}
                className={style.postPhoto}
                alt='PostPhoto'
                width='44'
                height='44'
              />
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
                  <p className={style.username}>
                    Username <span>liked your</span>
                  </p>
                  <p>
                    photo. <span className={style.dateTime}>2 d</span>
                  </p>
                </div>
              </div>
              <img
                src={PostPhoto}
                className={style.postPhoto}
                alt='PostPhoto'
                width='44'
                height='44'
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.background}></div>
    </div>
  )
}
export default Notification
