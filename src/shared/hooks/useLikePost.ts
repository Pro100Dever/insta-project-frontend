import { useMutation } from '@tanstack/react-query'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const postLike = async (id: string) => {
  return await axiosClient.post(`/likes/post/${id}`)
}
const deleteLike = async (id: string) => {
  return await axiosClient.delete(`/likes/post/${id}`)
}

export function useLikePost(postId: string, isLiked: boolean) {
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
