import { useMutation } from '@tanstack/react-query'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const postLike = async (id: string) => {
  return await axiosClient.post(`/likes/comment/${id}`)
}
const deleteLike = async (id: string) => {
  return await axiosClient.delete(`/likes/comment/${id}`)
}

export function useLikeComment(postId: string, isLiked: boolean) {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationFn: () => {
      if (isLiked) {
        return postLike(postId)
      } else {
        return deleteLike(postId)
      }
    },
  })

  return { isPending, isSuccess, isError, mutate, error }
}
