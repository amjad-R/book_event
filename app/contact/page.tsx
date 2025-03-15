"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import "@/styles/contact.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This would normally load a map library like Google Maps or Leaflet
    // For this example, we'll just simulate a map with a placeholder
    if (mapRef.current) {
      const mapElement = mapRef.current

      // Add a click event to simulate interaction
      mapElement.addEventListener("click", () => {
        alert("Map interaction! In a real implementation, this would zoom or pan the map.")
      })

      // Clean up
      return () => {
        mapElement.removeEventListener("click", () => {})
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      setError("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="page-content">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contactez-nous</h1>
            <p>Notre équipe est là pour vous aider et répondre à toutes vos questions</p>
            <div className="contact-quick-links">
              <a href="tel:+33123456789" className="quick-link">
                <i className="fas fa-phone-alt"></i>
                <span>+33 1 23 45 67 89</span>
              </a>
              <a href="mailto:contact@eventconnect.fr" className="quick-link">
                <i className="fas fa-envelope"></i>
                <span>contact@eventconnect.fr</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Envoyez-nous un message</h2>
                <p>Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais</p>
              </div>

              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Message envoyé!</h3>
                  <p>Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.</p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="error-message">
                      <i className="fas fa-exclamation-circle"></i>
                      <p>{error}</p>
                    </div>
                  )}

                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="fas fa-user"></i>
                          <span>Nom complet</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Votre nom complet"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="fas fa-envelope"></i>
                          <span>Email</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">
                        <i className="fas fa-tag"></i>
                        <span>Sujet</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="general">Question générale</option>
                        <option value="support">Support technique</option>
                        <option value="partnership">Partenariat</option>
                        <option value="feedback">Commentaires</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">
                        <i className="fas fa-comment-alt"></i>
                        <span>Message</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Comment pouvons-nous vous aider?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i> Envoi en cours...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane"></i> Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            <div className="contact-info-container">
              <div className="contact-info-header">
                <h3>Informations de contact</h3>
                <p>N'hésitez pas à nous contacter directement</p>
              </div>

              <div className="contact-info-cards">
                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Notre adresse</h4>
                    <p>
                      123 Avenue des Champs-Élysées
                      <br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Téléphone</h4>
                    <p>+33 1 23 45 67 89</p>
                    <p>+33 1 98 76 54 32</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>contact@eventconnect.fr</p>
                    <p>support@eventconnect.fr</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Heures d'ouverture</h4>
                    <p>Lundi - Vendredi: 9h00 - 18h00</p>
                    <p>Samedi: 10h00 - 15h00</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4>Suivez-nous</h4>
                <div className="social-icons">
                  <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div className="contact-map" ref={mapRef}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047033408!2d2.3002659156744847!3d48.87067100866258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc49f6ee0b3%3A0x7e8d9e25ea0d9b0!2sAv.%20des%20Champs-%C3%89lys%C3%A9es%2C%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1615280026159!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

