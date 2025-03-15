"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Define the registration data interface locally
interface RegisterData {
  name: string
  email: string
  password: string
  password_confirmation: string
  role: string
}

export default function RegisterProviderPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "provider", // Set the role to provider
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing again
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate passwords match
    if (formData.password !== formData.password_confirmation) {
      setError("Les mots de passe ne correspondent pas")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Mock API call - in a real app, this would be a fetch to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock validation - check if email already exists
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const emailExists = existingUsers.some((user: any) => user.email.toLowerCase() === formData.email.toLowerCase())

      if (emailExists) {
        throw new Error("Un utilisateur avec cet email existe déjà")
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        role: formData.role,
      }

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(newUser))

      // Add to users list (for demo purposes)
      existingUsers.push({ ...newUser, password: formData.password })
      localStorage.setItem("users", JSON.stringify(existingUsers))

      // Redirect to dashboard after successful registration
      router.push("/dashboard")
    } catch (err) {
      console.error("Registration error:", err)
      setError(err instanceof Error ? err.message : "Une erreur est survenue lors de l'inscription")
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
            <div className="register-header">
              <div className="register-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h1>Inscription Prestataire</h1>
            </div>
          </div>

          {error && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              <p>{error}</p>
            </div>
          )}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_confirmation">Confirmer le mot de passe</label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Inscription en cours...
                </>
              ) : (
                "Créer mon compte"
              )}
            </button>
          </form>

          <div className="auth-switch">
            <p>
              Vous avez déjà un compte?{" "}
              <Link href="/auth/login" className="switch-link">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

