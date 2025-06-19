import { Link } from 'react-router-dom'
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
          Have an account? <Link to='/login'>Log in</Link>
        </p>
      </div>
    </section>
  )
}

export default SingUp
