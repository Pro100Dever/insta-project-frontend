import { useMutation } from '@tanstack/react-query'
import type { NewPasswordFormData } from '../../pages/newPass/NewPass'
import axiosClient from '../../widgets/axiosClient/axiosClient'

interface INewPassReq extends NewPasswordFormData {
  token: string | null
}

const postNewPass = async (data: INewPassReq) => {
  try {
    console.log(data)
    return await axiosClient.post(`/auth/reset-password`, data)
  } catch (error: unknown) {
    console.log(error.message)
    throw error
  }
}

export function useNewPass() {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationFn: (data: INewPassReq) => postNewPass(data),
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
