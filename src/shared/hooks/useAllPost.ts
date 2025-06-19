import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const getAllPost = async () => {
  return await axiosClient.get(`/posts`)
}

export function useAllPost() {
  const { isAuthenticated } = useContext(AuthContext)
  const { data, isError, isPending } = useQuery({
    queryKey: ['all posts'],
    queryFn: () => getAllPost(),
    select: data => data.data,
    enabled: isAuthenticated,
  })

  return { data, isPending, isError }
}
