import Phones from '../../shared/assets/image/Phones.png'
import style from './notFound.module.scss'

function NotFound() {
  return (
    <section className={style.section}>
      <div className={style.imgBox}>
        <img src={Phones} alt='Phones' />
      </div>
      <div>
        <h2 className={style.title}>Oops! Page Not Found (404 Error)</h2>
        <p className={style.text}>
          We're sorry, but the page you're looking for doesn't seem to exist. If
          you typed the URL manually, please double-check the spelling. If you
          clicked on a link, it may be outdated or broken.
        </p>
      </div>
    </section>
  )
}

export default NotFound
