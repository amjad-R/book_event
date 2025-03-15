"use client"
import Link from "next/link"
import { CompanyCard } from "@/components/company-card"
import { companies } from "@/data/companies"
import { testimonials } from "@/data/testimonials"
import "@/styles/home.css"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="section-title">La plateforme qui connecte organisateurs et prestataires d'événements</h1>
            <p>
              EventConnect est le pont entre ceux qui souhaitent organiser des événements exceptionnels et les
              professionnels qui les rendent possibles
            </p>
            <div className="hero-buttons">
              <Link href="/organisateurs" className="btn btn-primary">
                Je veux organiser <i className="fas fa-calendar-alt"></i>
              </Link>
              <Link href="/prestataires" className="btn btn-outline">
                Je suis prestataire <i className="fas fa-briefcase"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui section */}
      <section className="for-who">
        <div className="container">
          <h2 className="section-titles">
            Notre plateforme pour tous
            <br />
            vos besoins événementiels
          </h2>
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Pour les organisateurs</h3>
              <p>Vous planifiez un événement et recherchez les meilleurs prestataires? EventConnect vous permet de:</p>
              <ul>
                <li>
                  <i className="fas fa-check"></i> Trouver des prestataires qualifiés
                </li>
                <li>
                  <i className="fas fa-check"></i> Comparer les offres et tarifs
                </li>
                <li>
                  <i className="fas fa-check"></i> Gérer vos réservations
                </li>
                <li>
                  <i className="fas fa-check"></i> Assurer le succès de votre événement
                </li>
              </ul>
              <Link href="/organisateurs" className="btn btn-primary">
                Découvrir plus
              </Link>
            </div>
            <div className="audience-card">
              <div className="audience-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Pour les prestataires</h3>
              <p>
                Vous offrez des services événementiels et cherchez à développer votre clientèle? EventConnect vous
                permet de:
              </p>
              <ul>
                <li>
                  <i className="fas fa-check"></i> Présenter vos services
                </li>
                <li>
                  <i className="fas fa-check"></i> Atteindre plus de clients
                </li>
                <li>
                  <i className="fas fa-check"></i> Gérer vos réservations
                </li>
                <li>
                  <i className="fas fa-check"></i> Développer votre activité
                </li>
              </ul>
              <Link href="/prestataires" className="btn btn-primary">
                Découvrir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-titles">
            Types d'événements que nous
            <br />
            couvrons avec excellence
          </h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-calendar-alt"></i>
              <h3>Conférences et Séminaires</h3>
              <p>
                Organisation professionnelle de conférences, séminaires et expositions pour entreprises et institutions
              </p>
            </div>
            <div className="service-card">
              <i className="fas fa-glass-cheers"></i>
              <h3>Mariages et Célébrations</h3>
              <p>Planification complète de mariages et célébrations familiales avec tous les services nécessaires</p>
            </div>
            <div className="service-card">
              <i className="fas fa-music"></i>
              <h3>Concerts et Festivals</h3>
              <p>Organisation d'événements musicaux, festivals et spectacles pour tous les publics</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-titles">
            Comment ça fonctionne
            <br />
            en toute simplicité
          </h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Inscription</h3>
              <p>Créez votre compte en tant qu'organisateur ou prestataire de services</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Connexion</h3>
              <p>Les organisateurs trouvent des prestataires, les prestataires reçoivent des demandes</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Collaboration</h3>
              <p>Communiquez, négociez et finalisez les détails de votre événement</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Réalisation</h3>
              <p>Concrétisez votre événement avec le soutien de notre plateforme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="companies">
        <div className="container">
          <div className="companies-header">
            <h2 className="section-titles">
              80.000+ fournisseurs de services talentueux avec
              <br />
              des avis de clients vérifiés.
            </h2>
          </div>
          <div className="companies-grid">
            {companies.map((company, i) => (
              <CompanyCard key={i} {...company} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-titles">
            Ce que disent nos clients
            <br />
            satisfaits de nos services
          </h2>
          <div className="testimonials-slider">
            <div className="testimonials-track">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"{testimonial.text}"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar"></div>
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à transformer vos événements?</h2>
            <p>Que vous soyez organisateur ou prestataire, rejoignez notre plateforme dès aujourd'hui</p>
            <div className="cta-buttons">
              <Link href="/auth/register" className="btn btn-light">
                S'inscrire maintenant <i className="fas fa-arrow-right"></i>
              </Link>
              <Link href="/auth/login" className="btn btn-outline-light">
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

