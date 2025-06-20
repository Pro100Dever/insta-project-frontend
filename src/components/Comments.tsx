import { ThumbsUp } from 'lucide-react'
import styles from '../pages/post/post.module.scss'

function Comments({
  comments,

  toggleReplies,
  handleCommentLike,
}: {
  comments: any[]
  expanded: Record<number, boolean>
  toggleReplies: (id: number) => void
  handleCommentLike: (id: number) => void
}) {
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

  return (
    <>
      {comments.map(comment => (
        <div className={styles.comment} key={comment.id}>
          <img
            src={comment.author.profile.photo}
            alt='avatar'
            className={styles.avatar}
          ></img>
          <div className={styles.bubbleContainer}>
            <div className={styles.bubble}>
              <div className={styles.usernameBox}>
                <p className={styles.username}>{comment.author.username}</p>
                <span className={styles.time}>
                  {getTimeAgo(comment.createdAt)}
                </span>
              </div>
              <p className={styles.commentText}>{comment.text}</p>
            </div>

            <div className={styles.actions}>
              <button onClick={() => handleCommentLike(comment.id)}>
                <ThumbsUp size={16} />
                <span>
                  {comment.likes}
                  {comment._count.likes}
                </span>
              </button>
              <button onClick={() => toggleReplies(comment.id)}></button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Comments
