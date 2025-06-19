import RegForm from '../../components/RegForm'
import logo from '../../shared/assets/image/Logo.png'
import * as style from './singUp.module.scss'

function SingUp() {
  return (
    <section className={style.section}>
      <div className={style.loginBox}>
        <div className={style.logoBox}>
          <img src={logo} alt='logo' />
          <h3 className={style.title}>
            Sign up to see photos and videos from your friends.
          </h3>
        </div>
        <RegForm />
      </div>
      <div className={style.regBox}>
        <p className={style.text}>
          Have an account? <a href='http://localhost:5173/login'>Log in</a>
        </p>
      </div>
    </section>
  )
}

export default SingUp
