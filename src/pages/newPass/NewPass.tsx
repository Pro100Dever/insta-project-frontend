import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useNewPass } from '../../shared/hooks/useNewPass'
import style from './newPass.module.scss'

export const newPasswordSchema = z.object({
  newPassword: z
    .string()
    .min(8, 'Пароль слишком короткий')
    .max(50, 'Пароль слишком длинный')
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
      'Пароль должен содержать заглавную букву, цифру и спецсимвол'
    ),
})

export type NewPasswordFormData = z.infer<typeof newPasswordSchema>

function NewPass() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordFormData>({
    resolver: zodResolver(newPasswordSchema),
  })

  const { mutate, isPending, isSuccess } = useNewPass()
  const navigate = useNavigate()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const token = params.get('token')

  const onSubmit = (data: NewPasswordFormData) => {
    mutate(
      { token, ...data },
      {
        onSuccess: () => {
          navigate('/login')
        },
        onError(error) {
          console.log(error)
        },
      }
    )
  }

  return (
    <section className={style.section}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.loginBox}>
        <h3 className={style.title}>Write a new password</h3>
        <div className={style.inpBox}>
          <input
            type='newPassword'
            placeholder='New password'
            {...register('newPassword')}
          />
          {errors.newPassword && (
            <p className={style.error}>{errors.newPassword.message}</p>
          )}
        </div>
        <button className={style.singUpBtn}>
          {isPending ? 'creating...' : 'Confirm'}
        </button>
        {isSuccess && (
          <p style={{ marginBottom: '12px' }}>New Password create!</p>
        )}
      </form>
    </section>
  )
}

export default NewPass
