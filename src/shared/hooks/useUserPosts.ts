import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const getUserPosts = async (userId: string) => {
  return await axiosClient.get(`/posts/user/${userId}`)
}

export function useUserPosts(userId: string) {
  const { isAuthenticated } = useContext(AuthContext)
  const { data, isError, isPending } = useQuery({
    queryKey: ['user posts', userId],
    queryFn: () => getUserPosts(userId),
    select: data => data.data,
    enabled: isAuthenticated,
  })

  return { data, isPending, isError }
}
