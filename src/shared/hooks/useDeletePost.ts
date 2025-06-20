import { useMutation } from '@tanstack/react-query'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const deletePost = async (id: string) => {
  return await axiosClient.delete(`/posts/${id}`)
}

export function useDeletePost() {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationFn: (postId: string) => deletePost(postId),
  })

  return { isPending, isSuccess, isError, mutate, error }
}
