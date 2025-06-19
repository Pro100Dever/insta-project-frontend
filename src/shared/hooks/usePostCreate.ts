import { useMutation } from '@tanstack/react-query'
import type { IFormInput } from '../../components/PostCreateForm'
import axiosClient from '../../widgets/axiosClient/axiosClient'

const postPost = async (data: IFormInput) => {
  const formData = new FormData()
  formData.append('file', data.file.file) // из FileList
  formData.append('text', data.text)

  return await axiosClient.post(`/posts`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export function usePostCreate() {
  const { isError, isSuccess, isPending, mutate, error } = useMutation({
    mutationFn: (data: IFormInput) => postPost(data),
  })

  return { isPending, isSuccess, isError, mutate, error }
}
