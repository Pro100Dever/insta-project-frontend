import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { initializeAxiosClient } from '../widgets/axiosClient/axiosClient'

interface AuthContextType {
  isAuthenticated: boolean
  user: IUserData | null
  login: (token: string, userData: IUserData) => void
  logout: () => void
}

interface IUserData {
  id: string
  fullName: string
  avatar: null | string
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserData | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    if (token && userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const login = (token: string, userData: IUserData) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
  }

  useEffect(() => {
    initializeAxiosClient(logout, navigate)
  }, [logout, navigate])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export { AuthContext, AuthProvider }
