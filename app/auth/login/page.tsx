"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import "../../../styles/auth-styles.css"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Mock API call - in a real app, this would be a fetch to your backend
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Mock users for demo
      const mockUsers = [
        {
          id: 1,
          name: "Organisateur Test",
          email: "organizer@example.com",
          password: "password123",
          role: "organizer",
        },
        {
          id: 2,
          name: "Prestataire Test",
          email: "provider@example.com",
          password: "password123",
          role: "provider",
        },
      ]

      const user = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

      if (user) {
        // Store user in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          }),
        )

        router.push("/dashboard")
      } else {
        setError("Email ou mot de passe incorrect")
      }
    } catch (err) {
      setError("Une erreur est survenue lors de la connexion")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <Link href="/" className="auth-logo">
              Event<span className="tatile-color">Connect</span>
            </Link>
            <h1>Connexion</h1>
            <p>Connectez-vous à votre compte EventConnect</p>
          </div>

          {error && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              <p>{error}</p>
            </div>
          )}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-footer">
              <Link href="/auth/forgot-password" className="forgot-password">
                Mot de passe oublié?
              </Link>
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Connexion en cours...
                </>
              ) : (
                "Se connecter"
              )}
            </button>
          </form>

          <div className="auth-switch">
            <p>
              Vous n'avez pas de compte?{" "}
              <Link href="/auth/register" className="switch-link">
                S'inscrire
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

