import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const getComment = async (id: string) => {
  return await axiosClient.get(`/comments/post/${id}`)
}

export function useGetComment(id: string) {
  const { isAuthenticated } = useContext(AuthContext)
  const { data, isError, isPending } = useQuery({
    queryKey: ['post comment', id],
    queryFn: () => getComment(id),
    select: data => data.data,
    enabled: isAuthenticated,
  })

  return { data, isPending, isError }
}
