// src/shared/lib/AccessRoute.tsx

import type { JSX } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../shared/hooks/useAuth'

interface AccessRouteProps {
  children: JSX.Element
  onlyPublic?: boolean // true → только для НЕавторизованных
  redirectTo?: string // куда редиректить
}

const AccessRoute = ({
  children,
  onlyPublic = false,
  redirectTo = '/home',
}: AccessRouteProps) => {
  const { isAuthenticated } = useAuth()

  if (onlyPublic && isAuthenticated) return <Navigate to={redirectTo} replace />
  if (!onlyPublic && !isAuthenticated) return <Navigate to='/login' replace />

  return children
}
export { AccessRoute }
