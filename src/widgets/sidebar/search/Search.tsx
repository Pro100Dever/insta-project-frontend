import { useState, type SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { useSearch } from '../../../shared/hooks/useSearch'
import style from './search.module.scss'

interface ISearchUser {
  id: string
  username: string
  fullName: string
  profile: {
    photo: string | null
  }
}

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const { data } = useSearch(searchValue)

  function handleChange(e: {
    preventDefault: () => void
    target: { value: SetStateAction<string> }
  }) {
    e.preventDefault()
    setSearchValue(e.target.value)
  }
  return (
    <div className={style.box}>
      <div className={style.notiBox}>
        <h2 className={style.title}>Search</h2>
        <div>
          <input
            className={style.input}
            onChange={handleChange}
            type='search'
            placeholder='Search'
            value={searchValue}
          />
        </div>
        <div>
          <p className={style.listName}>Recent</p>
          <ul className={style.list}>
            {Array.isArray(data) &&
              data.map((user: ISearchUser) => {
                const userAvatar = user.profile.photo || '/this_is_fine.png'
                return (
                  <li key={user.id}>
                    <Link to={`/user/${user.id}/profile`}>
                      <div className={style.listItemRight}>
                        <img
                          className={style.userPhoto}
                          src={userAvatar}
                          alt='profile-photo'
                          width='44'
                          height='44'
                        />
                        <div>
                          <p className={style.username}>{user.username}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
      <div className={style.background}></div>
    </div>
  )
}
export default Search
