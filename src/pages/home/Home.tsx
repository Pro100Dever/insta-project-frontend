import HomePost from '../../components/HomePost'
import { useAllPost } from '../../shared/hooks/useAllPost'
import style from './home.module.scss'

export interface IHomePost {
  author: {
    id: string
    isFollowed: boolean
    username: string
    profile: { photo: string }
  }
  id: string
  createdAt: string
  isLiked: boolean
  mediaUrl: string
  text: string
  _count: {
    comments: number
    likes: number
  }
}

function Home() {
  const { data, isPending, isError } = useAllPost()

  if (isPending) return <p>Загрузка...</p>
  if (isError) return <p>Ошибка загрузки</p>
  return (
    <section className={style.section}>
      <div className={style.postsBox}>
        {data?.map((post: IHomePost) => (
          <HomePost key={post.id} postData={post} />
        ))}
      </div>
    </section>
  )
}
export default Home
