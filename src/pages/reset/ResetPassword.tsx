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
        <a href='http://localhost:5173/register' className={style.createLink}>
          Create new account
        </a>
      </div>
      <div className={style.regBox}>
        <a href='http://localhost:5173/login' className={style.text}>
          Back to login
        </a>
      </div>
    </section>
  )
}

export default ResetPassword
