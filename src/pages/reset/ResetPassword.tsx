import Security from '../../shared/assets/icons/Security'
import * as style from './resetPassword.module.scss'

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
        <form action='' className={style.form}>
          <div className={style.inputBox}>
            <input type='text' name='login' placeholder='Email or Username' />
          </div>
          <button className={style.singUpBtn}>Reset your password</button>
        </form>
        <div className={style.orBox}>
          <div className={style.orLine}></div>
          <span className={style.orText}>OR</span>
          <div className={style.orLine}></div>
        </div>
        <a href='' className={style.createLink}>
          Create new account
        </a>
      </div>
      <div className={style.regBox}>
        <a href='' className={style.text}>
          Back to login
        </a>
      </div>
    </section>
  )
}

export default ResetPassword
