import { useMutation } from '@tanstack/react-query'
import axiosClient from '../../widgets/axiosClient/axiosClient'

interface IUser {
  email: string
  fullName: string
  username: string
  password: string
}

const postRegister = async (userData: IUser) => {
  return await axiosClient.post(`/auth/register`, userData)
}

export function useRegister() {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationKey: ['new user'],
    mutationFn: (userData: IUser) => postRegister(userData),
  })

  return { isPending, isSuccess, isError, mutate, error }
}
