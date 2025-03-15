"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import "@/styles/profile.css"

export default function ProfilePage() {
  const { isLoggedIn, user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push("/auth/login")
    }
  }, [isLoggedIn, loading, router])

  if (loading) {
    return (
      <div className="profile-loading">
        <div className="spinner">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
        <p>Chargement du profil...</p>
      </div>
    )
  }

  if (!isLoggedIn || !user) {
    return null // Will redirect in useEffect
  }

  return (
    <main className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          <i className="fas fa-user"></i>
        </div>
        <h1>{user.name}</h1>
        <p className="profile-role">{user.role === "organizer" ? "Organisateur" : "Prestataire"}</p>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2>Informations personnelles</h2>
          <div className="profile-info">
            <div className="info-item">
              <span className="info-label">Nom</span>
              <span className="info-value">{user.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">{user.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Rôle</span>
              <span className="info-value">{user.role === "organizer" ? "Organisateur" : "Prestataire"}</span>
            </div>
          </div>
          <button className="btn btn-outline">Modifier mes informations</button>
        </div>

        {user.role === "organizer" ? (
          <div className="profile-section">
            <h2>Mes événements</h2>
            <p>Vous n'avez pas encore créé d'événements.</p>
            <button className="btn btn-primary">Créer un événement</button>
          </div>
        ) : (
          <div className="profile-section">
            <h2>Mes services</h2>
            <p>Vous n'avez pas encore ajouté de services.</p>
            <button className="btn btn-primary">Ajouter un service</button>
          </div>
        )}

        <div className="profile-section">
          <h2>Paramètres du compte</h2>
          <div className="profile-settings">
            <button className="btn btn-outline">Changer mon mot de passe</button>
            <button className="btn btn-outline">Préférences de notification</button>
            <button className="btn btn-danger">Supprimer mon compte</button>
          </div>
        </div>
      </div>
    </main>
  )
}

