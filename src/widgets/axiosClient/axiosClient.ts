import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
  // Можно добавить общие заголовки, таймауты и т.п.
})

let logoutFn: (() => void) | null = null

const initializeAxiosClient = (logout: () => void) => {
  logoutFn = logout
}

axiosClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      logoutFn?.()
      window.location.href = '/login' // редирект через location
    }
    return Promise.reject(error)
  }
)

axiosClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default axiosClient
export { initializeAxiosClient }
