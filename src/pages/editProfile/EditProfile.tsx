import { useState } from 'react'
import UserPhoto from '../../shared/assets/image/mock-profile-photo.png'
import style from './editProfile.module.scss'

function EditProfile() {
  const [image, setImage] = useState(null) // File
  const [preview, setPreview] = useState(UserPhoto) // string (URL)

  const handleChange = e => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  return (
    <section className={style.section}>
      <h2 className={style.title}>Edit profile</h2>
      <form className={style.form}>
        <div className={style.photoBox}>
          <label htmlFor='file-upload' className={style.uploadLabel}>
            <img src={preview} alt='preview' width='120' height='120' />
          </label>
          <input
            id='file-upload'
            type='file'
            accept='image/*'
            onChange={handleChange}
            className={style.upload}
          />
        </div>
        <div className={style.inputBox}>
          <label>
            Username
            <input type='text' name='username' />
          </label>
          <label>
            Website
            <input type='text' name='website' />
          </label>
          <label>
            About
            <textarea name='aboutMe' maxLength={150}>
              • Гарантия помощи с трудоустройством в ведущие IT-компании •
              Выпускники зарабатывают от 45к евро БЕСПЛАТНАЯ
            </textarea>
          </label>
        </div>
        <button className={style.submitBtn}>Save</button>
      </form>
    </section>
  )
}
export default EditProfile
