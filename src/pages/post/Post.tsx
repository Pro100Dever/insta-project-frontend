import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Comments from '../../components/Comments'
import CommentIcon from '../../shared/assets/icons/comment.svg'
import Heart from '../../shared/assets/icons/heart.svg'
import HeartAlsComp from '../../shared/assets/icons/heartAlsComp'
import PostSet from '../../shared/assets/icons/postSet.svg'
import {
  useCreateComment,
  type IPost,
} from '../../shared/hooks/useCreateComment'
import { useDeletePost } from '../../shared/hooks/useDeletePost'
import { useGetPost } from '../../shared/hooks/useGetPost'
import { useLikePost } from '../../shared/hooks/useLikePost'
import styles from './post.module.scss'

function Post() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isLoading } = useGetPost(id)
  const { mutate } = useCreateComment()
  const [likes, setLikes] = useState(0)
  const [isPostLiked, setPostIsLiked] = useState(false)
  const { mutate: mutatePostLiked } = useLikePost(id, isPostLiked)
  const [isActive, setIsActive] = useState(false)
  const { mutate: mutatePostDelete } = useDeletePost()
  // const [isFollowed, setIsFollowed] = useState(false)

  // комменты раскрыты
  const [commentText, setCommentText] = useState('')

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!commentText.trim()) return
    const newComment: IPost = { postId: id, text: commentText }
    mutate(newComment)
    setCommentText('')
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

  function handleCommentLike() {
    if (isPostLiked) {
      setLikes((prev: number) => prev - 1)
    } else {
      setLikes((prev: number) => prev + 1)
    }
    setPostIsLiked((prev: boolean) => !prev)
    mutatePostLiked()
  }

  function backClick() {
    navigate(-1)
  }

  useEffect(() => {
    if (data) {
      setLikes(data._count?.likes || 0)
      setPostIsLiked(data.isLiked || false)
    }
  }, [data])

  function modalClick() {
    setIsActive(prev => !prev)
  }
  function handleDelete() {
    mutatePostDelete(id, {
      onSuccess: () => {
        navigate('/home')
      },
    })
  }

  // const handleFollow = () => {
  //   setIsFollowed(prev => !prev)
  // }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.section}>
      <div className={styles.modalContent}>
        <div className={styles.modalOverlay} onClick={handleBack}></div>
        <div className={styles.postImgBox}>
          <img className={styles.img} src={data.mediaUrl} alt='post' />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.usersCommentContainer}>
            <div className={styles.authorBox}>
              <div className={styles.usernameBox}>
                <img
                  className={styles.userImg}
                  src={data.author.profile.photo}
                  alt='UserPhoto'
                />
                <p className={styles.username}>{data.author.username}</p>
              </div>
              {/* <button onClick={handleFollow}>
                {isFollowed ? 'Unfollow' : 'Follow'}
              </button> */}
              <img src={PostSet} alt='PostSet' onClick={modalClick} />
              {isActive && (
                <div className={styles.modal}>
                  <p onClick={handleDelete} style={{ color: 'red' }}>
                    Delete
                  </p>
                  <p>Edit</p>
                  <Link to={`/post/${id}`}>Go to post</Link>
                  <p onClick={backClick}>Cancel</p>
                </div>
              )}
            </div>
            <div className={styles.descBox}>
              <img
                className={styles.userImg}
                src={data.author.profile.photo}
                alt='UserPhoto'
              />

              <div>
                <p className={styles.descText}>
                  <span className={styles.username}>
                    {data.author.username}
                  </span>{' '}
                  {data.text}
                </p>
                <p className={styles.time}>{getTimeAgo(data.createdAt)}</p>
              </div>
            </div>
            <div className={styles.commentBlock}>
              <Comments comments={data?.comments} />
            </div>
          </div>
          <div>
            <div className={styles.postLikesBlock}>
              <div className={styles.imgBlock}>
                {!isPostLiked ? (
                  <img
                    className={styles.img}
                    src={Heart}
                    onClick={handleCommentLike}
                    alt='heart'
                  />
                ) : (
                  <div className={styles.img} onClick={handleCommentLike}>
                    <HeartAlsComp size={24} />
                  </div>
                )}
                <img
                  className={styles.img}
                  src={CommentIcon}
                  alt='CommentIcon'
                />
              </div>
              <p className={styles.likeCount}>{likes} likes</p>
              <p className={styles.time}>{getTimeAgo(data.createdAt)}</p>
            </div>
            <form className={styles.form} onSubmit={handleAddComment}>
              <input
                className={styles.formInput}
                type='text'
                name='text'
                placeholder='Add comment'
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
              />
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post
