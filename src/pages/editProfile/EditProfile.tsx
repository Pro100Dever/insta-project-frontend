import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { usePatchProfile } from '../../shared/hooks/usePatchProfile'
import { useProfile } from '../../shared/hooks/useProfile'
import style from './editProfile.module.scss'

interface IMyProfile {
  id: string
  username: string
  fullName: string
  profile: {
    photo: string
    website: string
    about: string
  }
  followersCount: number
  followingCount: number
  postsCount: number
  isFollowed?: boolean
}

interface IFormInput {
  username: string
  website: string
  about: string
}

function EditProfile() {
  const { user, setUser } = useContext(AuthContext)
  const { data, isPending } = useProfile(true, user?.id)
  const { mutate } = usePatchProfile()
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string>('')
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    defaultValues: {
      username: '',
      website: '',
      about: '',
    },
  })

  useEffect(() => {
    if (data) {
      reset({
        username: data.username,
        website: data.profile.website,
        about: data.profile.about,
      })
      setPreview(data.profile.photo || '/this_is_fine.png')
    }
  }, [data, reset])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const onSubmit = (formData: IFormInput) => {
    mutate(
      { file: image, profile: formData },
      {
        onSuccess: updatedUserData => {
          navigate('/user/my-profile')
          setUser({
            avatar: updatedUserData.data.profile.photo,
            id: updatedUserData.data.id,
            fullName: updatedUserData.data.username,
          })
        },
      }
    )
    // TODO: отправить данные и файл на сервер
  }

  if (isPending) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <section className={style.section}>
      <h2 className={style.title}>Edit profile</h2>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.photoBox}>
          <label
            htmlFor='file-upload'
            className={`${style.uploadLabel} ${preview}`}
          >
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
            <input
              {...register('username', {
                required: 'Username is required',
                minLength: {
                  value: 4,
                  message: 'Username must be at least 4 characters',
                },
              })}
              type='text'
            />
            {errors.username && (
              <p className={style.error}>{errors.username.message}</p>
            )}
          </label>

          <label>
            Website
            <input {...register('website')} type='text' />
          </label>

          <label>
            About
            <textarea
              {...register('about', { maxLength: 150 })}
              maxLength={150}
            />
          </label>
        </div>
        <button className={style.submitBtn} type='submit'>
          Save
        </button>
      </form>
    </section>
  )
}

export default EditProfile
