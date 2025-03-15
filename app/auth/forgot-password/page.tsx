"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Mock API call - in a real app, this would be a fetch to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock validation - check if email exists
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const userExists = existingUsers.some((user: any) => user.email.toLowerCase() === email.toLowerCase())

      // Always show success for security reasons, even if email doesn't exist
      setSubmitted(true)
    } catch (err) {
      setError("Une erreur est survenue lors de la demande de réinitialisation")
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
            <h1>Mot de passe oublié</h1>
            <p>Entrez votre email pour réinitialiser votre mot de passe</p>
          </div>

          {error && !submitted && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              <p>{error}</p>
            </div>
          )}

          {!submitted ? (
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError(null)
                  }}
                  required
                  disabled={isLoading}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Traitement en cours...
                  </>
                ) : (
                  "Réinitialiser le mot de passe"
                )}
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Email envoyé!</h3>
              <p>
                Si un compte existe avec l'email {email}, vous recevrez un lien pour réinitialiser votre mot de passe.
              </p>
            </div>
          )}

          <div className="auth-switch">
            <p>
              <Link href="/auth/login" className="switch-link">
                Retour à la connexion
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

