"use client"

import { useState } from "react"
import Link from "next/link"
import "@/styles/services.css"

// Sample announcements data
const announcements = [
  {
    id: 1,
    title: "Recherche DJ pour mariage",
    description:
      "Nous recherchons un DJ expérimenté pour notre mariage le 15 juin 2024 à Paris. Ambiance festive et variée souhaitée.",
    location: "Paris",
    date: "15/06/2024",
    budget: "500-800€",
    contact: "marie.dupont@email.com",
    category: "Mariage",
  },
  {
    id: 2,
    title: "Traiteur pour conférence d'entreprise",
    description:
      "Entreprise de 50 personnes recherche un service traiteur pour une conférence d'une journée. Repas et pauses café inclus.",
    location: "Lyon",
    date: "22/05/2024",
    budget: "1500-2000€",
    contact: "entreprise@email.com",
    category: "Entreprise",
  },
  {
    id: 3,
    title: "Photographe pour événement familial",
    description: "Recherche photographe pour anniversaire de 50 ans. Environ 4 heures de présence requises.",
    location: "Marseille",
    date: "10/07/2024",
    budget: "300-500€",
    contact: "jean.martin@email.com",
    category: "Anniversaire",
  },
  {
    id: 4,
    title: "Animateur pour séminaire d'entreprise",
    description: "Nous cherchons un animateur dynamique pour notre séminaire annuel. Thème: innovation et créativité.",
    location: "Bordeaux",
    date: "05/09/2024",
    budget: "600-900€",
    contact: "rh@entreprise.com",
    category: "Entreprise",
  },
  {
    id: 5,
    title: "Décorateur pour soirée de gala",
    description: "Association recherche un décorateur pour soirée de gala caritative. Thème: nuit étoilée.",
    location: "Nice",
    date: "18/11/2024",
    budget: "1000-1500€",
    contact: "association@email.com",
    category: "Gala",
  },
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const categories = ["Tous", "Mariage", "Entreprise", "Anniversaire", "Gala"]

  const filteredAnnouncements =
    selectedCategory === "Tous" ? announcements : announcements.filter((a) => a.category === selectedCategory)

  return (
    <main className="page-content">
      {/* New Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Nos Services</h1>
            <p>Des solutions sur mesure pour tous vos événements</p>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="announcements-section">
        <div className="container">
          <div className="announcements-filter">
            <div className="filter-label">Filtrer par catégorie:</div>
            <div className="category-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-tab ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="announcements-grid">
            {filteredAnnouncements.map((announcement) => (
              <div key={announcement.id} className="announcement-card">
                <div className="announcement-header">
                  <h3>{announcement.title}</h3>
                  <span className="announcement-category">{announcement.category}</span>
                </div>
                <div className="announcement-details">
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{announcement.location}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-calendar"></i>
                    <span>{announcement.date}</span>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-euro-sign"></i>
                    <span>{announcement.budget}</span>
                  </div>
                </div>
                <p className="announcement-description">{announcement.description}</p>
                <div className="announcement-contact">
                  <button className="btn btn-primary">
                    <i className="fas fa-envelope"></i> Contacter
                  </button>
                  <button className="btn btn-outline">
                    <i className="fas fa-bookmark"></i> Sauvegarder
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="announcements-cta">
            <h3>Vous êtes à la recherche d'un prestataire pour votre événement?</h3>
            <p>Publiez gratuitement votre annonce et trouvez le prestataire idéal</p>
            <Link href="/post-announcement" className="btn btn-primary">
              <i className="fas fa-plus-circle"></i> Publier une annonce
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

