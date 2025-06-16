import { ChevronDown, ChevronUp, MessageCircle, ThumbsUp } from 'lucide-react'
import { useState } from 'react'
import CommentIcon from '../../shared/assets/icons/comment.svg'
import LikeIcon from '../../shared/assets/icons/heart.svg'
import PostSet from '../../shared/assets/icons/postSet.svg'
import PostImage from '../../shared/assets/image/mock-post-img.png'
import UserPhoto from '../../shared/assets/image/mock-profile-photo.png'
import styles from './post.module.scss'

function Post() {
  const initialComments = [
    {
      id: 3,
      author: 'vladimir',
      text: 'Это супер, поздравляю ребят!',
      likes: 5,
      replies: [
        {
          id: 101,
          author: 'anna',
          text: 'Согласна, это круто!',
        },
      ],
    },
    {
      id: 2,
      author: 'dev_john',
      text: 'TailBook — очень нужный проект!',
      likes: 2,
      replies: [],
    },
    {
      id: 1,
      author: 'frontend_kate',
      text: 'Класс, удачи на Web Summit!',
      likes: 4,
      replies: [
        {
          id: 103,
          author: 'mike',
          text: 'Спасибо большое!',
        },
      ],
    },
  ]

  const [comments, setComments] = useState(initialComments)
  const [expanded, setExpanded] = useState({}) // для отслеживания, какие комменты раскрыты

  const toggleReplies = id => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const likeComment = id => {
    setComments(prev =>
      prev.map(comment =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    )
  }

  return (
    <div className={styles.section}>
      <div className={styles.modalOverlay}></div>
      <div className={styles.modalContent}>
        <div className={styles.postImgBox}>
          <img className={styles.img} src={PostImage} alt='post' />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.usersCommentContainer}>
            <div className={styles.authorBox}>
              <div className={styles.usernameBox}>
                <img
                  className={styles.userImg}
                  src={UserPhoto}
                  alt='UserPhoto'
                />
                <p className={styles.username}>itcareerhub</p>
              </div>
              <img src={PostSet} alt='PostSet' />
            </div>
            <div className={styles.descBox}>
              <div>
                <img
                  className={styles.userImg}
                  src={UserPhoto}
                  alt='UserPhoto'
                />
              </div>
              <div>
                <p className={styles.descText}>
                  <span className={styles.username}>itcareerhub</span>{' '}
                  Потрясающие новости пришли к нам из Черногории! Проект по
                  поддержке бездомных животных TailBook, в разработке которого
                  участвуют сразу 9 наших стажfff
                </p>
                <p className={styles.time}>1 day</p>
              </div>
            </div>
            <div className={styles.commentBlock}>
              {comments.map(comment => (
                <div className={styles.comment} key={comment.id}>
                  <div className={styles.avatar}></div>
                  <div className={styles.bubbleContainer}>
                    <div className={styles.bubble}>
                      <div className={styles.usernameBox}>
                        <p className={styles.username}>{comment.author}</p>{' '}
                        <span className={styles.time}>23 h.</span>
                      </div>
                      <p className={styles.commentText}>{comment.text}</p>
                    </div>

                    <div className={styles.actions}>
                      <button onClick={() => likeComment(comment.id)}>
                        <ThumbsUp size={16} />
                        <span>{comment.likes}</span>
                      </button>
                      <button onClick={() => toggleReplies(comment.id)}>
                        {expanded[comment.id] ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                        <span>
                          {expanded[comment.id]
                            ? 'Скрыть ответы'
                            : `Показать ответы (${comment.replies.length})`}
                        </span>
                      </button>
                      <button>
                        <MessageCircle size={16} />
                        <span>Ответить</span>
                      </button>
                    </div>
                    {/* {expanded[comment.id] && (
                      <div className={styles.replies}>
                        {comment.replies.map(reply => (
                          <div className={styles.reply} key={reply.id}>
                            <div className={styles.replyAvatar}></div>
                            <div className={styles.bubble}>
                              <div className={styles.usernameBox}>
                                <p className={styles.username}>
                                  {reply.author}
                                </p>{' '}
                                <span className={styles.time}>23 h.</span>
                              </div>
                              <p className={styles.commentText}>{reply.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )} */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className={styles.postLikesBlock}>
              <div className={styles.imgBlock}>
                <img className={styles.img} src={LikeIcon} alt='LikeIcon' />
                <img
                  className={styles.img}
                  src={CommentIcon}
                  alt='CommentIcon'
                />
              </div>
              <p className={styles.likeCount}>25 likes</p>
              <p className={styles.time}>1 day</p>
            </div>
            <form className={styles.form}>
              <input
                className={styles.formInput}
                type='text'
                name='text'
                placeholder='Add comment'
              />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post
