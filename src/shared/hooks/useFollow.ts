import { useMutation } from '@tanstack/react-query'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const postFollow = async (id: string) => {
  return await axiosClient.post(`/follow/${id}/follow`)
}
const deleteFollow = async (id: string) => {
  return await axiosClient.delete(`/follow/${id}/unfollow`)
}

export function useFollow(userId: string, isFollow: boolean) {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationFn: () => {
      if (isFollow) {
        return postFollow(userId)
      } else {
        return deleteFollow(userId)
      }
    },
  })

  return { isPending, isSuccess, isError, mutate, error }
}
