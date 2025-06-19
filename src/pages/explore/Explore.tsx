import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { useUserPosts } from '../../shared/hooks/useUserPosts'
import style from './explore.module.scss'

interface IUserPost {
  id: string
  mediaUrl: string
}

function Explore() {
  const { user } = useContext(AuthContext)
  const { data = [] } = useUserPosts(user?.id || '')

  return (
    <section className={style.section}>
      <div className={style.imgBox}>
        {data.map((post: IUserPost) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <img src={post.mediaUrl} alt='photo' />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Explore
