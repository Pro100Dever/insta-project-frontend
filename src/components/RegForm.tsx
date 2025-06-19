import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import style from '../pages/singUp/singUp.module.scss'

import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useRegister } from '../shared/hooks/useRegister'

export const registerSchema = z.object({
  email: z
    .string()
    .min(4, 'Email слишком короткий')
    .max(50, 'Email слишком длинный')
    .email('Невалидный email'),
  fullName: z
    .string()
    .min(4, 'Имя слишком короткое')
    .max(50, 'Имя слишком длинное'),
  username: z
    .string()
    .min(4, 'Username слишком короткий')
    .max(50, 'Username слишком длинный'),
  password: z
    .string()
    .min(8, 'Пароль слишком короткий')
    .max(50, 'Пароль слишком длинный')
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
      'Пароль должен содержать заглавную букву, цифру и спецсимвол'
    ),
})
export type RegisterFormData = z.infer<typeof registerSchema>

function RegForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const { mutate, isPending, isSuccess, isError, error } = useRegister()
  const navigate = useNavigate()

  const onSubmit = (data: RegisterFormData) => {
    mutate(data, {
      onSuccess: () => {
        navigate('/login') // редирект на страницу логина
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.inputBox}>
        <div>
          <input type='email' placeholder='Email' {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            type='text'
            placeholder='Full Name'
            {...register('fullName')}
          />
          {errors.fullName && <p>{errors.fullName.message}</p>}
        </div>
        <div>
          <input type='text' placeholder='Username' {...register('username')} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
      </div>

      <div className={style.learnMoreBox}>
        <p>
          People who use our service may have uploaded your contact information
          to Instagram. <a href=''>Learn More</a>
        </p>
        <p>
          By signing up, you agree to our <a href=''>Terms</a>,
          <a href=''> Privacy Policy</a> and <a href=''>Cookies Policy.</a>
        </p>
      </div>

      <button type='submit' disabled={isPending} className={style.singUpBtn}>
        {isPending ? 'Registration...' : 'Sing Up'}
      </button>

      {isSuccess && <p>Регистрация успешна!</p>}
      {isError && (
        <p className={style.error}>
          {Array.isArray((error as any)?.response?.data?.message)
            ? (error as any).response.data.message.join(', ')
            : ((error as any)?.response?.data?.message ??
              'Что-то пошло не так')}
        </p>
      )}
    </form>
  )
}
export default RegForm
