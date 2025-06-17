// src/shared/api/axiosClient.ts

import axios from 'axios'
import type { NavigateOptions } from 'react-router-dom'

const axiosClient = axios.create({
  baseURL: 'https://your-api.com/api',
  // Можно добавить общие заголовки, таймауты и т.п.
})

// Здесь функции для logout и navigate будут передаваться динамически
let logoutFn: () => void
let navigateFn: (path: string, options?: NavigateOptions) => void

export const initializeAxiosClient = (
  logout: () => void,
  navigate: (path: string, options?: NavigateOptions) => void
) => {
  logoutFn = logout
  navigateFn = navigate
}

// Добавляем интерцептор для ответа
axiosClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      logoutFn?.()
      navigateFn?.('/login', { replace: true })
    }
    return Promise.reject(error)
  }
)

export default axiosClient
