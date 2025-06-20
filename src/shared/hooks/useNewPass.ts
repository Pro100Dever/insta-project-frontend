import { useMutation } from '@tanstack/react-query'
import type { NewPasswordFormData } from '../../pages/newPass/NewPass'
import axiosClient from '../../widgets/axiosClient/axiosClient'

interface INewPassReq extends NewPasswordFormData {
  token: string | null
}

const postNewPass = async (data: INewPassReq) => {
  return await axiosClient.post(`/auth/reset-password`, data)
}

export function useNewPass() {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationFn: (data: INewPassReq) => postNewPass(data),
  })

  return { isPending, isSuccess, isError, mutate, error }
}
