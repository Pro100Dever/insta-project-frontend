import { useMutation } from '@tanstack/react-query'
import axiosClient from '../../widgets/axiosClient/axiosClient'

interface IUser {
  email: string
  fullName: string
  username: string
  password: string
}

const postRegister = async (userData: IUser) => {
  try {
    return await axiosClient.post(`/auth/register`, userData)
  } catch (error: unknown) {
    console.log(error.message)
    throw error
  }
}

export function useRegister() {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationKey: ['new user'],
    mutationFn: (userData: IUser) => postRegister(userData),
  })

  // function checkIsErr() {
  //   if (isSuccess) {
  //     if (data.status === 'ERR') {
  //       isError = true
  //       isSuccess = false
  //       return isError, isSuccess
  //     }
  //   }
  // }
  // checkIsErr()
  return { isPending, isSuccess, isError, mutate, error }
}
