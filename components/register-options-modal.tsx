"use client"

import { X } from "lucide-react"

interface RegisterOptionsModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectOption: (option: "organizer" | "provider") => void
  onSwitchToLogin: () => void
}

export function RegisterOptionsModal({ isOpen, onClose, onSelectOption, onSwitchToLogin }: RegisterOptionsModalProps) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="auth-modal">
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <h2>Choisissez votre profil</h2>
        <p className="modal-subtitle">Sélectionnez le type de compte que vous souhaitez créer</p>

        <div className="register-options">
          <div className="register-option" onClick={() => onSelectOption("organizer")}>
            <div className="option-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h3>Organisateur d'événements</h3>
            <p>Vous souhaitez organiser des événements et trouver des prestataires</p>
          </div>

          <div className="register-option" onClick={() => onSelectOption("provider")}>
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
            <button className="switch-button" onClick={onSwitchToLogin}>
              Se connecter
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

