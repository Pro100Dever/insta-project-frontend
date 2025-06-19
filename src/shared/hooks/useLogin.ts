import { useMutation } from '@tanstack/react-query'
import axiosClient from '../../widgets/axiosClient/axiosClient'

interface IUserData {
  login: string
  password: string
}

const postLogin = async (userData: IUserData) => {
  return await axiosClient.post(`/auth/login`, userData)
}

export function useLogin() {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationKey: ['user'],
    mutationFn: (userData: IUserData) => postLogin(userData),
  })

  return { isPending, isSuccess, isError, mutate, error }
}
