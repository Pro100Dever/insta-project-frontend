import { useContext, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import Upload from '../shared/assets/icons/upload.svg'
import { usePostCreate } from '../shared/hooks/usePostCreate'
import style from '../widgets/sidebar/postCreate/postCreate.module.scss'

export interface IFormInput {
  text: string
  file: FileList
}

function PostCreateForm() {
  const { user } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IFormInput>()

  const [preview, setPreview] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const { mutate, isPending, isSuccess } = usePostCreate()

  const userAvatar = user?.avatar || '/this_is_fine.png'

  const onSubmit = (data: IFormInput) => {
    const formData = new FormData()
    formData.append('text', data.text)
    formData.append('file', data.file[0]) // а в запросе уже нет
    mutate(data, {
      onSuccess() {
        navigate(-1)
      },
    })
  }

  const handleFile = (file: File) => {
    console.log(file) // Тут файл показывает
    setValue('file', {
      file,
      length: 1,
      item: (index: number) => (index === 0 ? file : null),
    } as unknown as FileList)
    const reader = new FileReader()
    reader.onload = () => setPreview(reader.result as string)
    reader.readAsDataURL(file)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.modalHeader}>
        <span>{isPending ? 'Creating...' : 'Create new post'}</span>
        {isSuccess && <span>Post was created</span>}
        <button type='submit' className={style.shareBtn}>
          Share
        </button>
      </div>
      <div
        className={style.modalBody}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div
          className={`${style.uploadBox} ${dragActive ? style.dragOver : ''}`}
          onClick={() => inputRef.current?.click()}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {preview ? (
            <img src={preview} alt='preview' className={style.previewImg} />
          ) : (
            <label htmlFor='file-upload'>
              <div className={style.uploadIcon}>
                <img src={Upload} alt='upload' />
              </div>
              <input
                type='file'
                id='file-upload'
                accept='image/*'
                hidden
                {...register('file', { required: 'Image is required' })}
                ref={e => {
                  register('file').ref(e)
                  inputRef.current = e
                }}
                onChange={handleFileChange}
              />
            </label>
          )}
        </div>

        <div className={style.postMeta}>
          <div className={style.user}>
            <img src={userAvatar} className={style.avatar}></img>
            <span className={style.username}>{user?.fullName}</span>
          </div>
          <textarea
            className={style.textarea}
            placeholder='Write a caption...'
            {...register('text', {
              maxLength: { value: 200, message: 'Max 200 characters' },
            })}
          />
          <div className={style.charCount}>
            {watch('text')?.length || 0} / 200
          </div>
        </div>
      </div>
    </form>
  )
}

export default PostCreateForm
