import { useMutation } from '@tanstack/react-query'
import axiosClient from '../../widgets/axiosClient/axiosClient'

export interface IPost {
  postId: string
  text: string
  parentId?: string
}

const postComment = async (data: IPost) => {
  return await axiosClient.post(`/comments`, data)
}

export function useCreateComment() {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationKey: ['user'],
    mutationFn: (data: IPost) => postComment(data),
  })

  return { isPending, isSuccess, isError, mutate, error }
}
