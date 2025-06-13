import * as style from './newPass.module.scss'

function NewPass() {
  return (
    <section className={style.section}>
      <form action='' className={style.loginBox}>
        <h3 className={style.title}>Write a new password</h3>
        <input type='password' name='newPassword' placeholder='New password' />
        <button className={style.singUpBtn}>Confirm</button>
      </form>
    </section>
  )
}

export default NewPass
