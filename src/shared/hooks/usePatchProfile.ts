import { useMutation } from '@tanstack/react-query'
import axiosClient from '../../widgets/axiosClient/axiosClient'

interface IUser {
  username: string
  profile: {
    photo: File
    website: string
    about: string
  }
}

const patchProfile = async (userData: IUser) => {
  return await axiosClient.patch(`/profile/me`, userData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export function usePatchProfile() {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationKey: ['new user'],
    mutationFn: (userData: IUser) => patchProfile(userData),
  })

  return { isPending, isSuccess, isError, mutate, error }
}
