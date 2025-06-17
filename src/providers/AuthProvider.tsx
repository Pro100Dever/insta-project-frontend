import { createContext, useCallback, useEffect, useState } from 'react'
import { initializeAxiosClient } from '../widgets/axiosClient/axiosClient'

interface IUserData {
  id: string
  fullName: string
  avatar: null | string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: IUserData | null
  login: (token: string, userData: IUserData) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserData | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    if (token && userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const login = useCallback((token: string, userData: IUserData) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
  }, [])

  useEffect(() => {
    initializeAxiosClient(logout)
  }, [logout])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
