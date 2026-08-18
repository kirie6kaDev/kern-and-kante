import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import './Projects.css'

export function Projects() {
  const railRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateControls = () => {
    const rail = railRef.current
    if (!rail) return
    setCanPrev(rail.scrollLeft > 4)
    setCanNext(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 4)
  }

  useEffect(() => {
    updateControls()
    const rail = railRef.current
    if (!rail) return
    rail.addEventListener('scroll', updateControls, { passive: true })
    const resize = new ResizeObserver(updateControls)
    resize.observe(rail)
    return () => { rail.removeEventListener('scroll', updateControls); resize.disconnect() }
  }, [])

  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.querySelector<HTMLElement>('[data-project-card]')
    const gap = parseFloat(getComputedStyle(rail).columnGap || '18')
    const distance = (card?.offsetWidth ?? rail.clientWidth * 0.33) + gap
    rail.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  return (
    <section className="projects-section snap-section" id="projects" data-scroll-assist="true">
      <div className="section-inner">
        <div className="projects-head">
          <div><p className="eyebrow">Ausgewählte Projekte</p><h2>Selected work</h2></div>
          <div className="projects-tools">
            <a href="#projects" className="projects-all">Alle Projekte →</a>
            <div className="carousel-controls" aria-label="Projektkarussell">
              <button type="button" onClick={() => scrollRail(-1)} disabled={!canPrev} aria-label="Vorherige Projekte">←</button>
              <button type="button" onClick={() => scrollRail(1)} disabled={!canNext} aria-label="Nächste Projekte">→</button>
            </div>
          </div>
        </div>

        <div ref={railRef} className="projects-rail" aria-label="Ausgewählte Projekte" tabIndex={0}>
          {projects.map((project) => (
            <article className="project-tile" key={project.id} data-project-card>
              <a href={`/projekte/${project.slug}`} className="project-tile__link" aria-label={`${project.title} ansehen`}>
                <div className="project-tile__media">
                  <img src={project.image} alt={`${project.title} — ${project.category}`} loading="lazy" decoding="async" />
                  <div className="project-tile__shade" />
                  <div className="project-tile__meta">
                    <span>{String(project.id).padStart(2, '0')}</span>
                    <div><h3>{project.title}</h3><p>{project.category} · {project.location} · {project.year}</p></div>
                    <i aria-hidden="true">↗</i>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
