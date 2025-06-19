import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import style from '../pages/reset/resetPassword.module.scss'
import { useResetPass } from '../shared/hooks/useResetPass'

export const ResPassSchema = z.object({
  email: z
    .string()
    .min(4, 'Email слишком короткий')
    .max(50, 'Email слишком длинный')
    .email('Невалидный email'),
})
export type ResPassFormData = z.infer<typeof ResPassSchema>

function ResPassForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResPassFormData>({
    resolver: zodResolver(ResPassSchema),
  })

  const { mutate, isPending, isSuccess, isError } = useResetPass()

  const onSubmit = (email: ResPassFormData) => {
    mutate(email)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      {isError && <p className={style.error}>Неправильный логин или пароль</p>}
      <div className={style.inputBox}>
        <div className={style.inputBox}>
          <input type='email' placeholder='Email' {...register('email')} />
          {errors.email && (
            <p className={style.error}>{errors.email.message}</p>
          )}
        </div>
      </div>

      <button type='submit' disabled={isPending} className={style.singUpBtn}>
        {isPending ? 'Sending...' : 'Send to Email'}
      </button>

      {isSuccess && <p style={{ marginBottom: '12px' }}>Send successfully!</p>}
    </form>
  )
}
export default ResPassForm
