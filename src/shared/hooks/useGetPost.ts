import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const getPostById = async (id: string) => {
  return await axiosClient.get(`/posts/${id}`)
}

export function useGetPost(id: string) {
  const { isAuthenticated } = useContext(AuthContext)
  const { data, isError, isPending } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPostById(id),
    select: data => data.data,
    enabled: isAuthenticated,
  })

  return { data, isPending, isError }
}
