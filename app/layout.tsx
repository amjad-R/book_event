import type React from "react"
import "./globals.css"
import "@/styles/layout.css"
import type { Metadata } from "next"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import { NavAuthButtons } from "@/components/nav-auth-buttons"

export const metadata: Metadata = {
  title: "EventConnect - Plateforme d'événements",
  description: "Connectez-vous avec les meilleurs organisateurs d'événements",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <AuthProvider>
          <ThemeProvider>
            {/* Navigation */}
            <header className="navbar">
              <div className="container">
                <div className="logo">
                  <Link href="/">
                    Event<span className="tatile-color">Connect</span>
                  </Link>
                </div>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className="nav-toggle-label">
                  <span></span>
                </label>
                <nav>
                  <ul className="nav-center">
                    <li>
                      <Link href="/">Accueil</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/companies">Entreprises</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                  <NavAuthButtons />
                </nav>
              </div>
            </header>

            {children}

            {/* Footer */}
            <footer>
              <div className="container">
                <div className="footer-grid">
                  <div className="footer-column">
                    <h3>À propos</h3>
                    <ul>
                      <li>
                        <Link href="/about">Qui sommes-nous</Link>
                      </li>
                      <li>
                        <Link href="/team">Notre équipe</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-column">
                    <h3>Services</h3>
                    <ul>
                      <li>
                        <Link href="/services/conferences">Organisation de conférences</Link>
                      </li>
                      <li>
                        <Link href="/services/social">Événements sociaux</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-column">
                    <h3>Support</h3>
                    <ul>
                      <li>
                        <Link href="/contact">Contactez-nous</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-column">
                    <h3>Suivez-nous</h3>
                    <div className="social-icons">
                      <Link href="https://facebook.com" className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="https://twitter.com" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="https://linkedin.com" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                      <Link href="https://instagram.com" className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="footer-bottom">
                  <p>© 2024 Tous droits réservés</p>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

