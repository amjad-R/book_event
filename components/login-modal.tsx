"use client"
import { X } from "lucide-react"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToRegister: () => void
}

export function LoginModal({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="auth-modal">
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <h2>Se connecter</h2>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-footer">
            <a href="#" className="forgot-password">
              Mot de passe oublié?
            </a>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Se connecter
          </button>
        </form>
        <div className="auth-switch">
          <p>
            Vous n'avez pas de compte?{" "}
            <button className="switch-button" onClick={onSwitchToRegister}>
              S'inscrire
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

