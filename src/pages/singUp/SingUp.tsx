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
        <form action='' className={style.form}>
          <div className={style.inputBox}>
            <input type='email' name='email' placeholder='Email' />
            <input type='text' name='fullName' placeholder='Full Name' />
            <input type='text' name='username' placeholder='Username' />
            <input type='password' name='password' placeholder='Password' />
          </div>
          <div className={style.learnMoreBox}>
            <p>
              People who use our service may have uploaded your contact
              information to Instagram. <a href=''>Learn More</a>
            </p>
            <p>
              By signing up, you agree to our <a href=''>Terms</a>,
              <a href=''> Privacy Policy</a> and <a href=''>Cookies Policy.</a>
            </p>
          </div>
          <button className={style.singUpBtn}>Sing up</button>
        </form>
      </div>
      <div className={style.regBox}>
        <p className={style.text}>
          Have an account? <a href=''>Log in</a>
        </p>
      </div>
    </section>
  )
}

export default SingUp
