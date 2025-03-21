"use client"

import Image from "next/image"
import { useState } from "react"
import "@/styles/company-card.css"

interface CompanyCardProps {
  name: string
  logo: string
  rating: number
  reviews: number
  description: string
  tags: string[]
  subtitle: string
}

export function CompanyCard({ name, logo, rating, reviews, description, tags, subtitle }: CompanyCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="company-card ">
      <div className="company-logo-wrapper top-center">
        <Image
          src={imageError ? "/placeholder.svg?height=80&width=80" : logo}
          alt={"logo"}
          width={80}
          height={80}
          className="company-logo ai-logo"
          onError={() => setImageError(true)}
        />
      </div>
      <div className="company-header">
        <div className="company-main-info">
          <h3>{name}</h3>
          <p className="company-subtitle">{subtitle}</p>
          <div className="company-rating">
            <span className="rating-number">{rating.toFixed(2)}</span>
            <div className="rating-stars">
              {[...Array(5)].map((_, index) => (
                <i key={index} className={`fas fa-star ${index < Math.floor(rating) ? "active" : ""}`}></i>
              ))}
            </div>
            <span className="review-count">({reviews})</span>
          </div>
        </div>
      </div>
      <div className="company-tags">
        {tags.map((tag, index) => (
          <span key={index} className={`company-tag ${tag.toLowerCase()}`}>
            {tag === "Promoted" ? (
              <>
                <i className="fas fa-award"></i> {tag}
              </>
            ) : (
              <>
                <i className="fas fa-check-circle"></i> {tag}
              </>
            )}
          </span>
        ))}
      </div>
      <p className="company-description">{description}</p>
    </div>
  )
}
