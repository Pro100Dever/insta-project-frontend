import { Link } from 'react-router-dom'
import ResPassForm from '../../components/ResetPassForm'
import Security from '../../shared/assets/icons/Security'
import style from './resetPassword.module.scss'

function ResetPassword() {
  return (
    <section className={style.section}>
      <div className={style.loginBox}>
        <div className={style.logoBox}>
          <Security />
          <h3 className={style.title}>Trouble logging in?</h3>
          <p className={style.description}>
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </p>
        </div>
        <ResPassForm />
        <div className={style.orBox}>
          <div className={style.orLine}></div>
          <span className={style.orText}>OR</span>
          <div className={style.orLine}></div>
        </div>
        <Link to='/register' className={`${style.createLink}  ${style.link}`}>
          Create new account
        </Link>
      </div>
      <div className={style.regBox}>
        <Link to='/login' className={`${style.text} ${style.link}`}>
          Back to login
        </Link>
      </div>
    </section>
  )
}

export default ResetPassword
