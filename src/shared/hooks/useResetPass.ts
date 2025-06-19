import { useMutation } from '@tanstack/react-query'
import type { ResPassFormData } from '../../components/ResetPassForm'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const postNewPassReq = async (data: ResPassFormData) => {
  try {
    return await axiosClient.post(`/auth/reset-password-request`, data)
  } catch (error: unknown) {
    console.log(error.message)
    throw error
  }
}

export function useResetPass() {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationKey: ['new user'],
    mutationFn: (email: ResPassFormData) => postNewPassReq(email),
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
