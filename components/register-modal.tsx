"use client"
import { X } from "lucide-react"

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
  userType: "organizer" | "provider"
}

export function RegisterModal({ isOpen, onClose, onSwitchToLogin, userType }: RegisterModalProps) {
  if (!isOpen) return null

  const title = userType === "organizer" ? "Inscription Organisateur" : "Inscription Prestataire"
  const icon = userType === "organizer" ? "fa-calendar-alt" : "fa-briefcase"

  return (
    <div className="modal-overlay">
      <div className="auth-modal">
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="register-header">
          <div className="register-icon">
            <i className={`fas ${icon}`}></i>
          </div>
          <h2>{title}</h2>
        </div>

        <form className="auth-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Prénom</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Nom</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" required />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>

          {userType === "provider" && (
            <div className="form-group">
              <label htmlFor="companyName">Nom de l'entreprise</label>
              <input type="text" id="companyName" name="companyName" required />
            </div>
          )}

          <div className="form-group">
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>J'accepte les conditions d'utilisation et la politique de confidentialité</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Créer mon compte
          </button>
        </form>

        <div className="auth-switch">
          <p>
            Vous avez déjà un compte?{" "}
            <button className="switch-button" onClick={onSwitchToLogin}>
              Se connecter
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

