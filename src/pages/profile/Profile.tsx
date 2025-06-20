import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import LinkIcon from '../../shared/assets/icons/link.svg'
import { useFollow } from '../../shared/hooks/useFollow'
import { useProfile } from '../../shared/hooks/useProfile'
import { useUserPosts } from '../../shared/hooks/useUserPosts'
import style from './profile.module.scss'

type ProfileProps = {
  myProfile: boolean
}

interface IPost {
  id: string
  mediaUrl: string
}

interface IMyProfile {
  id: string
  username: string
  fullName: string
  profile: {
    photo: string
    website: string
    about: string
  }
  followersCount: number
  followingCount: number
  postsCount: number
  isFollowed?: boolean
}

function Profile({ myProfile }: ProfileProps) {
  const { id } = useParams()
  const { user } = useContext(AuthContext)

  const { data, isPending } = useProfile(myProfile, id) as {
    data: IMyProfile
    isPending: boolean
  }

  const profileId = myProfile ? (user?.id ?? '') : (id ?? '')
  const [isFollowed, setIsFollowed] = useState<boolean>(
    data?.isFollowed ?? false
  )
  const [expanded, setExpanded] = useState(false)

  const { data: postsData } = useUserPosts(profileId)
  const userAvatar = data?.profile?.photo || '/this_is_fine.png'
  const { mutate: followMutate, isPending: isFollowPending } = useFollow(
    profileId,
    isFollowed
  )

  const limit = 120
  const text = data?.profile?.about || ''
  const isTruncated = text?.length > limit
  const visibleText = expanded ? text : text.slice(0, limit)

  function handleFollow() {
    setIsFollowed(prev => !prev)
    followMutate()
  }

  useEffect(() => {
    setIsFollowed(data?.isFollowed ?? false)
  }, [data])

  if (isPending) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <section className={style.section}>
      <div className={style.userInfoBox}>
        <div>
          <img
            src={userAvatar}
            alt='ProfilePhoto'
            width='168'
            height='168'
            className={style.userPhoto}
          />
        </div>
        <div className={style.userRightBox}>
          <div className={style.userNameBox}>
            <h3 className={style.userName}>{data.username}</h3>
            {!myProfile ? (
              <div className={style.followBox}>
                <button
                  className={`${style.btn} ${style.follow}`}
                  onClick={handleFollow}
                  disabled={isFollowPending}
                >
                  {isFollowed ? 'Unfollow' : 'Follow'}
                </button>
                <Link
                  to='/messages'
                  className={`${style.btn} ${style.message}`}
                >
                  Message
                </Link>
              </div>
            ) : (
              <Link to='/user/my-profile/edit' className={style.editProfile}>
                Edit profile
              </Link>
            )}
          </div>
          <div className={style.countBox}>
            <p>
              <b className={style.followCount}>{data.postsCount}</b> posts
            </p>
            <p>
              <b className={style.followCount}>{data.followersCount}</b>{' '}
              followers
            </p>
            <p>
              <b className={style.followCount}>{data.followingCount}</b>{' '}
              following
            </p>
          </div>

          <div>
            <div className={style.aboutMeBox}>
              <p className={style.text}>
                {visibleText}
                {isTruncated && !expanded && '... '}
              </p>
              {isTruncated && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className={style.expandedBtn}
                >
                  {expanded ? 'less' : 'more'}
                </button>
              )}
            </div>
            <div className={style.linkBox}>
              {data.profile.website && (
                <img src={LinkIcon} alt='LinkIcon' width='12' height='12' />
              )}
              <p>{data.profile.website}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.userPostBox}>
        {postsData?.map((post: IPost) => (
          <Link to={`/post/${post.id}`} key={post.id}>
            <img src={post.mediaUrl} alt='photo' width='307' height='307' />
          </Link>
        ))}
      </div>
    </section>
  )
}
export default Profile
