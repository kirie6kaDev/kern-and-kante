import { site } from '../data/site'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer-cta">
        <p>{site.brand.name}</p><h2>Räume, die bleiben.</h2>
        <a className="button button--light" href={site.business.primaryAction.href}>{site.business.primaryAction.label} →</a>
      </div>
      <div className="section-inner footer-grid">
        <div><div className="brand">{site.brand.name}<span>{site.brand.descriptor}</span></div><p>Fictional commercial concept by Kirie6ka_Dev.</p></div>
        <div><h4>Navigation</h4><a href="#projects">Projekte</a><a href="#services">Leistungen</a><a href="#about">Über uns</a><a href="#contact">Kontakt</a></div>
        <div><h4>Rechtliches</h4><p>Demo-Konzept · keine reale Firma</p><p>Keine realen Geschäftsdaten</p></div>
        <div><h4>Kontakt</h4><p>{site.business.city} · {site.business.country}</p><a href={`mailto:${site.business.email}`}>{site.business.email}</a></div>
      </div>
    </footer>
  )
}
