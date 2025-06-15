import { useRef, useState } from 'react'
import Upload from '../../../shared/assets/icons/upload.svg'
import style from './postCreate.module.scss'

function PostCreate() {
  const [preview, setPreview] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dragCounter = useRef(0)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setPreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setPreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className={style.modalOverlay}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <span>Create new post</span>
          <button className={style.shareBtn}>Share</button>
        </div>

        <div
          className={style.modalBody}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div
            className={`${style.uploadBox} ${dragActive ? style.dragOver : ''}`}
            onClick={() => inputRef.current?.click()}
            onDragOver={handleDragOver}
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
                  ref={inputRef}
                  onChange={handleFileChange}
                />
              </label>
            )}
          </div>

          <div className={style.postMeta}>
            <div className={style.user}>
              <div className={style.avatar}></div>
              <span className={style.username}>skai_laba</span>
            </div>
            <textarea
              className={style.textarea}
              placeholder='Write a caption...'
            ></textarea>
            <div className={style.charCount}>0 / 200</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCreate
