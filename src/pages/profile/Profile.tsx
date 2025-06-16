import { useState } from 'react'
import LinkIcon from '../../shared/assets/icons/link.svg'
import PostPhoto2 from '../../shared/assets/image/mock-post-img-2.png'
import PostPhoto from '../../shared/assets/image/mock-post-img.png'
import ProfilePhoto from '../../shared/assets/image/mock-profile-photo.png'
import style from './profile.module.scss'

type ProfileProps = {
  myProfile: boolean
}

function Profile({ myProfile }: ProfileProps) {
  const [expanded, setExpanded] = useState(false)

  const limit = 120
  const text =
    '• Гарантия помощи с трудоустройством в ведущие IT-компании • Выпускники зарабатывают от 45к евро БЕСПЛАТНАЯ • Гарантия помощи с трудоустройством в ведущие IT-компании •Выпускники зарабатывают от 45к евро БЕСПЛАТНАЯ'

  const isTruncated = text.length > limit
  const visibleText = expanded ? text : text.slice(0, limit)

  return (
    <section className={style.section}>
      <div className={style.userInfoBox}>
        <div>
          <img
            src={ProfilePhoto}
            alt='ProfilePhoto'
            width='168'
            height='168'
            className={style.userPhoto}
          />
        </div>
        <div className={style.uerRightBox}>
          <div className={style.userNameBox}>
            <h3 className={style.userName}>itcareerhub</h3>
            {!myProfile ? (
              <div className={style.followBox}>
                <button className={`${style.btn} ${style.follow}`}>
                  Follow
                </button>
                <a className={`${style.btn} ${style.message}`}>Message</a>
              </div>
            ) : (
              <a href='' className={style.editProfile}>
                Edit profile
              </a>
            )}
          </div>
          <div className={style.countBox}>
            <p>
              <b className={style.followCount}>129</b> posts
            </p>
            <p>
              <b className={style.followCount}>9993</b> followers
            </p>
            <p>
              <b className={style.followCount}>59</b> following
            </p>
          </div>
          <div>
            <div className={style.aboutMeBox}>
              <p className={style.text}></p>
              {visibleText}
              {isTruncated && !expanded && '... '}
              {isTruncated && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className={style.expandedBtn}
                >
                  {expanded ? 'less' : 'more'}
                </button>
              )}
            </div>
            <div className={style.linkBox}>
              <img src={LinkIcon} alt='LinkIcon' width='12' height='12' />
              <p>bit.ly/3rpiIbh</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.userPostBox}>
        <a href=''>
          <img src={PostPhoto} alt='photo' width='307' height='307' />
        </a>
        <a href=''>
          <img src={PostPhoto2} alt='photo' width='307' height='307' />
        </a>
        <a href=''>
          <img src={PostPhoto} alt='photo' width='307' height='307' />
        </a>
        <a href=''>
          <img src={PostPhoto2} alt='photo' width='307' height='307' />
        </a>
        <a href=''>
          <img src={PostPhoto} alt='photo' width='307' height='307' />
        </a>
        <a href=''>
          <img src={PostPhoto2} alt='photo' width='307' height='307' />
        </a>
      </div>
    </section>
  )
}
export default Profile
