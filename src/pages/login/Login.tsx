import { Link } from 'react-router-dom'
import LoginForm from '../../components/LoginForm'
import logo from '../../shared/assets/image/Logo.png'
import phones from '../../shared/assets/image/Phones.png'
import * as style from './login.module.scss'

function Login() {
  return (
    <section className={style.section}>
      <div className={style.leftBox}>
        <img src={phones} alt='phones' />
      </div>
      <div className={style.rightBox}>
        <div className={style.loginBox}>
          <div>
            <img src={logo} alt='logo' />
          </div>
          <LoginForm />
          <div className={style.orBox}>
            <div className={style.orLine}></div>
            <span className={style.orText}>OR</span>
            <div className={style.orLine}></div>
          </div>
          <Link
            to='/reset-password'
            className={`${style.forgotLink} ${style.link}`}
          >
            Forgot password?
          </Link>
        </div>
        <div className={style.regBox}>
          <p className={style.text}>
            Don't have an account?{' '}
            <Link to='/register' className={style.link}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login
