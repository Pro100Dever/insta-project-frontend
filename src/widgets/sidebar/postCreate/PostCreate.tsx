import { useNavigate } from 'react-router-dom'
import PostCreateForm from '../../../components/PostCreateForm'
import style from './postCreate.module.scss'

function PostCreate() {
  const navigate = useNavigate()

  function handleClick() {
    navigate(-1)
  }

  return (
    <div className={style.modalOverlay} onClick={handleClick}>
      <div className={style.modal} onClick={e => e.stopPropagation()}>
        <PostCreateForm />
      </div>
    </div>
  )
}

export default PostCreate
