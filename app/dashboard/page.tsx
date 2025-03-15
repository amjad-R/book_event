"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import "@/styles/dashboard.css"

export default function DashboardPage() {
  const { isLoggedIn, user, loading } = useAuth()
  const router = useRouter()

  /*useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push("/auth/login")
    }
  }, [isLoggedIn, loading, router])*/

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
        <p>Chargement du tableau de bord...</p>
      </div>
    )
  }

  if (!isLoggedIn || !user) {
    return null // Will redirect in useEffect
  }

  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <h1>Tableau de bord</h1>
        <p>Bienvenue, {user.name}!</p>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <div className="card-header">
            <i className="fas fa-calendar-alt"></i>
            <h2>Vos {user.role === "organizer" ? "Événements" : "Services"}</h2>
          </div>
          <div className="card-content">
            <p>Vous n'avez pas encore de {user.role === "organizer" ? "événements" : "services"} actifs.</p>
            <button className="btn btn-primary">
              {user.role === "organizer" ? "Créer un événement" : "Ajouter un service"}
            </button>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <i className="fas fa-bell"></i>
            <h2>Notifications</h2>
          </div>
          <div className="card-content">
            <p>Vous n'avez pas de nouvelles notifications.</p>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <i className="fas fa-chart-line"></i>
            <h2>Statistiques</h2>
          </div>
          <div className="card-content">
            <p>Aucune donnée disponible pour le moment.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

