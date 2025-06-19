import { useMutation } from '@tanstack/react-query'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const patchNoti = async (id: string) => {
  return await axiosClient.patch(`/notifications/${id}`)
}

export function useDeleteNoti() {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationFn: (id: string) => patchNoti(id),
  })

  return { isPending, isSuccess, isError, mutate, error }
}
