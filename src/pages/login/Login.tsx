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
          <form action=''>
            <div>
              <input
                type='text'
                className={style.loginInp}
                name='login'
                placeholder='Username, or email'
              />
              <input
                type='password'
                className={style.passwordInp}
                name='password'
                placeholder='Password'
              />
            </div>
            <button className={style.logInBtn}>Log in</button>
          </form>
          <div className={style.orBox}>
            <div className={style.orLine}></div>
            <span className={style.orText}>OR</span>
            <div className={style.orLine}></div>
          </div>
          <a href='' className={style.forgotLink}>
            Forgot password?
          </a>
        </div>
        <div className={style.regBox}>
          <p className={style.text}>
            Don't have an account? <a href=''>Sign up</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login
