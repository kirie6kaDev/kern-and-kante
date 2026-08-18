import { Reveal } from '../components/Reveal'
import { services } from '../data/content'
import './Services.css'

export function Services() {
  return (
    <section className="services-section snap-section section-dark" id="services" data-scroll-assist="true">
      <div className="section-inner">
        <Reveal className="section-heading">
          <div><p className="eyebrow">Was wir schaffen</p><h2>Leistungen</h2></div>
          <span>{String(services.length).padStart(2, '0')} Leistungen</span>
        </Reveal>
        <div className="services-list">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.04}>
              <article className="service-row">
                <span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p>
                <a href="#projects" aria-label={`${service.title} Projekte ansehen`}>↗</a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
