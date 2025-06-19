import { useState } from 'react'
import type { IHomePost } from '../pages/home/Home'
import style from '../pages/home/home.module.scss'
import comment from '../shared/assets/icons/comment.svg'
import heart from '../shared/assets/icons/heart.svg'
import defaultPhoto from '/public/this_is_fine.png'

function HomePost({ postData }: { postData: IHomePost }) {
  const [expanded, setExpanded] = useState(false)
  const { author, createdAt, isLiked, id, mediaUrl, text, _count } = postData
  const authorPhoto = author.profile.photo || defaultPhoto

  const limit = 20
  const textContent = text ?? ''
  const isTruncated = textContent.length > limit
  const visibleText = expanded ? textContent : textContent.slice(0, limit)

  function getTimeAgo(dateString) {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now - date

    const seconds = Math.floor(diffMs / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)
    const months = Math.floor(days / 30)
    const years = Math.floor(days / 365)

    if (years > 1) return `${years} years`
    if (years > 0) return `${years} year`
    if (months > 1) return `${months} months`
    if (months > 0) return `${months} month`
    if (weeks > 1) return `${weeks} weeks`
    if (weeks > 0) return `${weeks} week`
    if (days > 1) return `${weeks} days`
    if (days > 0) return `${days} day`
    if (hours > 0) return `${hours} h`
    if (minutes > 0) return `${minutes} m`
    return `${seconds}s`
  }

  return (
    <div className={style.box}>
      <div className={style.userInfoBox}>
        <div className={style.imgBox}>
          <img src={authorPhoto} alt='UserPhoto' />
        </div>
        <p className={style.name}>
          {author.username}{' '}
          <span className={style.time}>• {getTimeAgo(createdAt)} •</span>
        </p>
        <button className={style.follow}>follow</button>
      </div>
      <div>
        <div>
          <img src={mediaUrl} className={style.img} alt='PostPhoto' />
        </div>
        <div className={style.iconBox}>
          <img className={style.icon} src={heart} alt='heart' />
          <img className={style.icon} src={comment} alt='comment' />
        </div>
        <p className={style.likes}>
          <span className={style.score}>{_count.likes}</span> likes
        </p>
        <p className={style.text}>
          <span className={style.likes}>{author.username}</span>
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
          View all comments ({_count.comments})
        </button>
      </div>
    </div>
  )
}
export default HomePost
