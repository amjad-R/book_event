"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

export function NavAuthButtons() {
  const { isLoggedIn, user, logout, loading } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (loading) {
    return (
      <div className="auth-buttons">
        <div className="btn btn-outline">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      </div>
    )
  }

  if (isLoggedIn && user) {
    return (
      <div className="auth-buttons" ref={dropdownRef}>
        <div className="user-profile">
          <button className="profile-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <div className="avatar">
              <i className="fas fa-user"></i>
            </div>
            <span className="user-name">{user.name}</span>
            <i className={`fas fa-chevron-${dropdownOpen ? "up" : "down"}`}></i>
          </button>

          {dropdownOpen && (
            <div className="profile-dropdown">
              <Link href="/dashboard" className="dropdown-item">
                <i className="fas fa-tachometer-alt"></i> Tableau de bord
              </Link>
              <Link href="/profile" className="dropdown-item">
                <i className="fas fa-user-circle"></i> Mon profil
              </Link>
              <div className="dropdown-divider"></div>
              <button onClick={handleLogout} className="dropdown-item logout-item">
                <i className="fas fa-sign-out-alt"></i> Déconnexion
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="auth-buttons">
      <Link href="/auth/login" className="btn btn-outline">
        Se connecter
      </Link>
      <Link href="/auth/register" className="btn btn-primary">
        S'inscrire
      </Link>
    </div>
  )
}

