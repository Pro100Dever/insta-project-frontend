import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const getUserSearch = async (value: string, limit: number = 10) => {
  return await axiosClient.get(`/users/?search=${value}&limit=${limit}`)
}

export function useSearch(value: string, limit: number = 10) {
  const { isAuthenticated } = useContext(AuthContext)
  const { data, isError, isPending } = useQuery({
    queryKey: ['search', value],
    queryFn: () => getUserSearch(value, limit),
    select: data => data.data,
    enabled: isAuthenticated,
  })

  return { data, isPending, isError }
}
