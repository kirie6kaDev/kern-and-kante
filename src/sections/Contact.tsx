import { Reveal } from '../components/Reveal'
import { site } from '../data/site'
import './Contact.css'

export function Contact() {
  const { business } = site
  return (
    <section className="contact-section snap-section" id="contact" data-scroll-assist="true">
      <div className="section-inner contact-grid">
        <Reveal>
          <p className="eyebrow">Kontakt</p>
          <h2>Ein Projekt<br />beginnt mit einem Gespräch.</h2>
          <a className="button button--dark" href={business.primaryAction.href}>{business.primaryAction.label} →</a>
        </Reveal>
        <Reveal className="contact-details" delay={0.08}>
          <div><span>Standort</span><p>{business.city}<br />{business.country}</p></div>
          <div><span>Kontakt</span><a href={`mailto:${business.email}`}>{business.email}</a></div>
          <div><span>Erreichbarkeit</span>{business.openingHours?.map((line) => <p key={line}>{line}</p>)}</div>
          <p className="contact-note">Demo-Daten · Keine reale Geschäftsadresse</p>
        </Reveal>
      </div>
    </section>
  )
}
