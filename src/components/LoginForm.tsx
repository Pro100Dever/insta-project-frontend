import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import style from '../pages/login/login.module.scss'
import { AuthContext } from '../providers/AuthProvider'
import { useLogin } from '../shared/hooks/useLogin'

export const loginSchema = z.object({
  login: z
    .string()
    .min(4, 'Email or Username слишком короткий')
    .max(50, 'Email or Username слишком длинный'),
  password: z
    .string()
    .min(8, 'Пароль слишком короткий')
    .max(50, 'Пароль слишком длинный')
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
      'Пароль должен содержать заглавную букву, цифру и спецсимвол'
    ),
})
export type LoginFormData = z.infer<typeof loginSchema>

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const { mutate, isPending, isSuccess, isError, error } = useLogin()
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = (data: LoginFormData) => {
    mutate(data, {
      onSuccess: response => {
        const { access_token, user } = response.data
        login(access_token, user)
        navigate('/home')
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      {isError && <p className={style.error}>Неправильный логин или пароль</p>}
      <div className={style.inputBox}>
        <div className={style.inputBox}>
          <input
            type='text'
            placeholder='Username, or email'
            className={style.loginInp}
            {...register('login')}
          />
          {errors.login && (
            <p className={style.error}>{errors.login.message}</p>
          )}
        </div>
        <div className={style.inputBox}>
          <input
            type='password'
            placeholder='Password'
            className={style.passwordInp}
            {...register('password')}
          />
          {errors.password && (
            <p className={style.error}>{errors.password.message}</p>
          )}
        </div>
      </div>

      <button type='submit' disabled={isPending} className={style.logInBtn}>
        {isPending ? 'Login...' : 'Login'}
      </button>

      {isSuccess && <p style={{ marginBottom: '12px' }}>Login successfully!</p>}
    </form>
  )
}
export default LoginForm
