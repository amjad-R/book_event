"use client"

import { useState } from "react"
import { LoginModal } from "./login-modal"
import { RegisterOptionsModal } from "./register-options-modal"
import { RegisterModal } from "./register-modal"

export function AuthController() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOptionsOpen, setIsRegisterOptionsOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [userType, setUserType] = useState<"organizer" | "provider">("organizer")

  const openLogin = () => {
    setIsLoginOpen(true)
    setIsRegisterOptionsOpen(false)
    setIsRegisterOpen(false)
  }

  const openRegisterOptions = () => {
    setIsLoginOpen(false)
    setIsRegisterOptionsOpen(true)
    setIsRegisterOpen(false)
  }

  const openRegister = (type: "organizer" | "provider") => {
    setUserType(type)
    setIsLoginOpen(false)
    setIsRegisterOptionsOpen(false)
    setIsRegisterOpen(true)
  }

  const closeAll = () => {
    setIsLoginOpen(false)
    setIsRegisterOptionsOpen(false)
    setIsRegisterOpen(false)
  }

  return (
    <>
      <div className="auth-buttons">
        <button className="btn btn-outline" onClick={openLogin}>
          Se connecter
        </button>
        <button className="btn btn-primary" onClick={openRegisterOptions}>
          S'inscrire
        </button>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={closeAll} onSwitchToRegister={openRegisterOptions} />

      <RegisterOptionsModal
        isOpen={isRegisterOptionsOpen}
        onClose={closeAll}
        onSelectOption={openRegister}
        onSwitchToLogin={openLogin}
      />

      <RegisterModal isOpen={isRegisterOpen} onClose={closeAll} onSwitchToLogin={openLogin} userType={userType} />
    </>
  )
}

