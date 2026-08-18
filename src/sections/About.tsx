import { Reveal } from '../components/Reveal'
import { site } from '../data/site'
import './About.css'

export function About() {
  return (
    <section className="about snap-section" id="about">
      <div className="section-inner about__grid">
        <Reveal className="about__copy">
          <p className="eyebrow">{site.about.eyebrow}</p>
          <h2>{site.about.heading}<br /><span>{site.about.headingAccent}</span></h2>
          <p className="body-copy">{site.about.text}</p>
          <a className="button button--outline" href="#services">Unsere Leistungen →</a>
        </Reveal>
        <Reveal className="about__media" delay={0.08}>
          <img src={site.about.image} alt={site.about.imageAlt} loading="lazy" decoding="async" />
          <span>Handwerk / Material / Präzision</span>
        </Reveal>
      </div>
    </section>
  )
}
