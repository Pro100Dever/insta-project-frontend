import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const getMyProfile = async () => {
  return await axiosClient.get(`/profile/me`)
}
const getProfileById = async (id: string) => {
  return await axiosClient.get(`/users/${id}`)
}

export function useProfile(profileProps: boolean, id?: string) {
  const { isAuthenticated } = useContext(AuthContext)

  const { data, isError, isPending } = useQuery({
    queryKey: profileProps ? ['myProfile'] : ['userProfile', id],
    queryFn: profileProps ? () => getMyProfile() : () => getProfileById(id!),
    select: data => data.data,
    enabled: isAuthenticated,
  })

  return { data, isPending, isError }
}
