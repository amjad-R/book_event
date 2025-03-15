"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import "@/styles/auth.css"

export default function RegisterOptionsPage() {
  const router = useRouter()

  const handleSelectOption = (option: "organizer" | "provider") => {
    router.push(`/auth/register/${option}`)
  }

  return (
    <main className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <Link href="/" className="auth-logo">
              Event<span className="tatile-color">Connect</span>
            </Link>
            <h1>Choisissez votre profil</h1>
            <p>Sélectionnez le type de compte que vous souhaitez créer</p>
          </div>

          <div className="register-options">
            <div className="register-option" onClick={() => handleSelectOption("organizer")}>
              <div className="option-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3>Organisateur d'événements</h3>
              <p>Vous souhaitez organiser des événements et trouver des prestataires</p>
            </div>

            <div className="register-option" onClick={() => handleSelectOption("provider")}>
              <div className="option-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Prestataire de services</h3>
              <p>Vous proposez des services pour des événements</p>
            </div>
          </div>

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

