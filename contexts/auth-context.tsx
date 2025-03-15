"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: number
  name: string
  email: string
  role: string
}

interface AuthContextProps {
  isLoggedIn: boolean
  loading: boolean
  user: User | null
  logout: () => void
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  loading: true,
  user: null,
  logout: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const checkAuthStatus = () => {
      if (typeof window !== "undefined") {
        // Get user data from localStorage
        const userData = localStorage.getItem("user")

        if (userData) {
          setUser(JSON.parse(userData))
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
          setUser(null)
        }

        setLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user")
      setIsLoggedIn(false)
      setUser(null)
    }
  }

  const value: AuthContextProps = {
    isLoggedIn,
    loading,
    user,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

