import { useState } from 'react'
import comment from '../../shared/assets/icons/comment.svg'
import heart from '../../shared/assets/icons/heart.svg'
import PostPhoto from '../../shared/assets/image/mock-post-img-2.png'
import UserPhoto from '../../shared/assets/image/mock-profile-photo.png'
import style from './home.module.scss'

function Home() {
  const [expanded, setExpanded] = useState(false)

  const limit = 20
  const text =
    '• Гарантия помощи с трудоустройством в ведущие IT-компании • Выпускники зарабатывают от 45к евро БЕСПЛАТНАЯ • Гарантия помощи с трудоустройством в ведущие IT-компании •Выпускники зарабатывают от 45к евро БЕСПЛАТНАЯ'

  const isTruncated = text.length > limit
  const visibleText = expanded ? text : text.slice(0, limit)
  return (
    <section className={style.section}>
      <div className={style.postsBox}>
        <div className={style.box}>
          <div className={style.userInfoBox}>
            <div className={style.imgBox}>
              <img src={UserPhoto} alt='UserPhoto' />
            </div>
            <p className={style.name}>
              sashaa <span className={style.time}>• 2 wek •</span>
            </p>
            <button className={style.follow}>follow</button>
          </div>
          <div>
            <div>
              <img src={PostPhoto} className={style.img} alt='PostPhoto' />
            </div>
            <div className={style.iconBox}>
              <img className={style.icon} src={heart} alt='heart' />
              <img className={style.icon} src={comment} alt='comment' />
            </div>
            <p className={style.likes}>
              <span className={style.score}>101824</span> likes
            </p>
            <p className={style.text}>
              <span className={style.likes}>Sashaa</span>
              {visibleText}
              {isTruncated && !expanded && '... '}
              {isTruncated && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className={style.more}
                >
                  {expanded ? 'less' : 'more'}
                </button>
              )}
            </p>
            <button className={style.allComments}>
              View all comments (732)
            </button>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.userInfoBox}>
            <div className={style.imgBox}>
              <img src={UserPhoto} alt='UserPhoto' />
            </div>
            <p className={style.name}>
              sashaa <span className={style.time}>• 2 wek •</span>
            </p>
            <button className={style.follow}>follow</button>
          </div>
          <div>
            <div>
              <img src={PostPhoto} className={style.img} alt='PostPhoto' />
            </div>
            <div className={style.iconBox}>
              <img className={style.icon} src={heart} alt='heart' />
              <img className={style.icon} src={comment} alt='comment' />
            </div>
            <p className={style.likes}>
              <span className={style.score}>101824</span> likes
            </p>
            <p className={style.text}>
              <span className={style.likes}>Sashaa</span>
              {visibleText}
              {isTruncated && !expanded && '... '}
              {isTruncated && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className={style.more}
                >
                  {expanded ? 'less' : 'more'}
                </button>
              )}
            </p>
            <button className={style.allComments}>
              View all comments (732)
            </button>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.userInfoBox}>
            <div className={style.imgBox}>
              <img src={UserPhoto} alt='UserPhoto' />
            </div>
            <p className={style.name}>
              sashaa <span className={style.time}>• 2 wek •</span>
            </p>
            <button className={style.follow}>follow</button>
          </div>
          <div>
            <div>
              <img src={PostPhoto} className={style.img} alt='PostPhoto' />
            </div>
            <div className={style.iconBox}>
              <img className={style.icon} src={heart} alt='heart' />
              <img className={style.icon} src={comment} alt='comment' />
            </div>
            <p className={style.likes}>
              <span className={style.score}>101824</span> likes
            </p>
            <p className={style.text}>
              <span className={style.likes}>Sashaa</span>
              {visibleText}
              {isTruncated && !expanded && '... '}
              {isTruncated && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className={style.more}
                >
                  {expanded ? 'less' : 'more'}
                </button>
              )}
            </p>
            <button className={style.allComments}>
              View all comments (732)
            </button>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.userInfoBox}>
            <div className={style.imgBox}>
              <img src={UserPhoto} alt='UserPhoto' />
            </div>
            <p className={style.name}>
              sashaa <span className={style.time}>• 2 wek •</span>
            </p>
            <button className={style.follow}>follow</button>
          </div>
          <div>
            <div>
              <img src={PostPhoto} className={style.img} alt='PostPhoto' />
            </div>
            <div className={style.iconBox}>
              <img className={style.icon} src={heart} alt='heart' />
              <img className={style.icon} src={comment} alt='comment' />
            </div>
            <p className={style.likes}>
              <span className={style.score}>101824</span> likes
            </p>
            <p className={style.text}>
              <span className={style.likes}>Sashaa</span>
              {visibleText}
              {isTruncated && !expanded && '... '}
              {isTruncated && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className={style.more}
                >
                  {expanded ? 'less' : 'more'}
                </button>
              )}
            </p>
            <button className={style.allComments}>
              View all comments (732)
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home
