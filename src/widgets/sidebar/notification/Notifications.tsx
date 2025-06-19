import { useNavigate } from 'react-router-dom'
import { useDeleteNoti } from '../../../shared/hooks/useDeleteNoti'
import { useNoti } from '../../../shared/hooks/useNoti'
import style from './notifications.module.scss'

export interface INoty {
  id: string
  type: 'LIKE' | 'COMMENT' | 'REPLY'
  isRead: boolean
  createdAt: string
  fromUser: {
    id: string
    username: string
    photo: string | null
  }
  entityId?: string
  entityType?: 'POST' | 'COMMENT'
}

function Notification() {
  const { mutate } = useDeleteNoti()
  const navigate = useNavigate()
  // Вызов хука — корректно
  const { data = [] } = useNoti({ refetchInterval: 120000 })

  function handleClick(id: string) {
    mutate(id)
  }
  function getTimeAgo(dateString: string) {
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
    if (days > 1) return `${days} days`
    if (days > 0) return `${days} day`
    if (hours > 0) return `${hours} h`
    if (minutes > 0) return `${minutes} m`
    return `${seconds}s`
  }

  function handleBack() {
    navigate(-1) //вернуться назад
  }

  function getActionText(noti: INoty) {
    switch (noti.type) {
      case 'LIKE':
        return 'liked your post'
      case 'COMMENT':
        return 'commented on your post'
      case 'REPLY':
        return 'replied to your comment'
      default:
        return 'followed on you'
    }
  }

  return (
    <div className={style.secret}>
      <div className={style.notiBox}>
        <h2 className={style.title}>Notifications</h2>
        <span className={style.span}>New</span>
        <ul className={style.list}>
          {data?.map((noti: INoty) => {
            const userAvatar = noti.fromUser.photo || '/this_is_fine.png'
            return (
              <li key={noti.id} onClick={() => handleClick(noti.id)}>
                <div className={style.listItemRight}>
                  <img
                    className={style.userPhoto}
                    src={userAvatar}
                    alt='profile-photo'
                    width='44'
                    height='44'
                  />
                  <div>
                    <p className={style.username}>
                      {' '}
                      <span>{getActionText(noti)}</span>
                    </p>
                    <p>
                      {noti.entityType}{' '}
                      <span className={style.dateTime}>
                        {getTimeAgo(noti.createdAt)}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={style.background} onClick={handleBack}></div>
    </div>
  )
}
export default Notification
