import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const getNoti = async () => {
  return await axiosClient.get(`/notifications`)
}

export function useNoti({ refetchInterval }: { refetchInterval: number }) {
  const { isAuthenticated } = useContext(AuthContext)
  const { data, isError, isPending } = useQuery({
    queryKey: ['notifications'],
    queryFn: () => getNoti(),
    select: data => data.data,
    enabled: isAuthenticated,
    refetchInterval,
  })

  return { data, isPending, isError }
}
