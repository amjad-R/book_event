"use client"

import { useState, useEffect } from "react"
import { CompanyCard } from "@/components/company-card"
import { companies } from "@/data/companies"
import "@/styles/companies.css"

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [minRating, setMinRating] = useState(0)
  const [filteredCompanies, setFilteredCompanies] = useState(companies)

  useEffect(() => {
    const results = companies.filter((company) => {
      const matchesSearch =
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRating = company.rating >= minRating

      return matchesSearch && matchesRating
    })

    setFilteredCompanies(results)
  }, [searchTerm, minRating])

  return (
    <main className="page-content">
      {/* New Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Nos Entreprises Partenaires</h1>
            <p>Découvrez notre réseau de professionnels de l'événementiel</p>
          </div>
        </div>
      </section>

      <section className="companies-section">
        <div className="container">
          <div className="companies-search-filter">
            <div className="search-container">
              <div className="search-input-wrapper">
                <i className="fas fa-search search-icon"></i>
                <input
                  type="text"
                  placeholder="Rechercher une entreprise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            <div className="filter-container">
              <div className="filter-group">
                <label htmlFor="rating-filter">Note minimale</label>
                <div className="rating-filter-container">
                  <input
                    type="range"
                    id="rating-filter"
                    min="0"
                    max="5"
                    step="0.5"
                    value={minRating}
                    onChange={(e) => setMinRating(Number.parseFloat(e.target.value))}
                    className="rating-slider"
                  />
                  <div className="rating-display">
                    <div className="rating-stars">
                      {[...Array(5)].map((_, index) => (
                        <i key={index} className={`fas fa-star ${index < Math.floor(minRating) ? "active" : ""}`}></i>
                      ))}
                    </div>
                    <span className="rating-value">{minRating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="companies-filter">
            <div className="filter-count">
              <span>{filteredCompanies.length} entreprises trouvées</span>
            </div>
          </div>

          <div className="companies-grid">
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company, index) => <CompanyCard key={index} {...company} />)
            ) : (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <h3>Aucun résultat trouvé</h3>
                <p>Essayez de modifier vos critères de recherche</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

