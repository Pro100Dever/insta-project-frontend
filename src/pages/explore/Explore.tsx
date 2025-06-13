import Photo2 from '../../shared/assets/image/mock-post-img-2.png'
import Photo from '../../shared/assets/image/mock-post-img.png'
import style from './explore.module.scss'

function Explore() {
  return (
    <section className={style.section}>
      <div className={style.imgBox}>
        <a href=''>
          <img src={Photo} alt='photo' />
        </a>
        <a href=''>
          <img src={Photo2} alt='photo' />
        </a>
        <a href=''>
          <img src={Photo} alt='photo' />
        </a>
        <a href=''>
          <img src={Photo2} alt='photo' />
        </a>
        <a href=''>
          <img src={Photo} alt='photo' />
        </a>
        <a href=''>
          <img src={Photo2} alt='photo' />
        </a>
        <a href=''>
          <img src={Photo} alt='photo' />
        </a>
        <a href=''>
          <img src={Photo2} alt='photo' />
        </a>
        <a href=''>
          <img src={Photo} alt='photo' />
        </a>
        <a href=''>
          <img src={Photo2} alt='photo' />
        </a>
        <a href=''>
          <img src={Photo} alt='photo' />
        </a>
        <a href=''>
          <img src={Photo2} alt='photo' />
        </a>
      </div>
    </section>
  )
}

export default Explore
