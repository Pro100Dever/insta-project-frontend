import { useMutation } from '@tanstack/react-query'
import type { ResPassFormData } from '../../components/ResetPassForm'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const postNewPassReq = async (data: ResPassFormData) => {
  return await axiosClient.post(`/auth/reset-password-request`, data)
}

export function useResetPass() {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationFn: (email: ResPassFormData) => postNewPassReq(email),
  })

  return { isPending, isSuccess, isError, mutate, error }
}
