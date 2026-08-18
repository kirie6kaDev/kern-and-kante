import { projects } from '../data/projects'
import { ProjectGallery } from '../components/ProjectGallery'
import { useEffect, useRef, useState } from 'react'
import './ProjectPage.css'

export function ProjectPage({ slug }: { slug: string }) {
  const index = projects.findIndex((item) => item.slug === slug)
  const project = projects[index]
  const [videoOpen, setVideoOpen] = useState(false)
  const videoButton = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const previous = document.title
    document.title = project ? `${project.title} — Kern & Kante` : 'Projekt nicht gefunden — Kern & Kante'
    window.scrollTo(0, 0)
    return () => { document.title = previous }
  }, [project])
  useEffect(() => {
    if (!videoOpen) return
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setVideoOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); videoButton.current?.focus() }
  }, [videoOpen])
  if (!project) return <main className="project-not-found"><p className="eyebrow">404</p><h1>Projekt nicht gefunden.</h1><a className="button button--dark" href="/#projects">Zurück zu den Projekten</a></main>
  const next = projects[(index + 1) % projects.length]

  return <>
    <a className="skip-link" href="#project-content">Zum Inhalt springen</a>
    <header className="project-nav">
      <a className="brand" href="/" aria-label="Kern & Kante Startseite">Kern & Kante<span>Holzmanufaktur</span></a>
      <a href="/#projects">Alle Projekte</a>
    </header>
    <main id="project-content" className="project-page">
      <section className="project-hero" style={{ '--project-bg': project.theme.background, '--project-fg': project.theme.foreground } as React.CSSProperties}>
        {project.heroVideo
          ? <video className="project-hero__media" poster={project.image} muted loop playsInline autoPlay aria-label={`${project.title} Projektfilm`}><source src={project.heroVideo} type="video/mp4" /></video>
          : <img className="project-hero__media" src={project.image} alt={`${project.title} — ${project.category}`} fetchPriority="high" />}
        <div className="project-hero__shade" />
        <div className="project-hero__content">
          <p className="story-label">Kern & Kante Story · Folge {String(project.id).padStart(2, '0')}</p>
          <h1>{project.title}</h1>
          <div className="story-meta"><b>Neu</b><span>{project.year}</span><span>{project.duration}</span><span>Projektfilm</span></div>
          <strong>{project.intro}</strong>
          <div className="project-hero__actions">
            <a className="story-button story-button--primary" href="#story">▶ Story ansehen</a>
            {project.testimonialVideo
              ? <button ref={videoButton} className="story-button story-button--glass" type="button" onClick={() => setVideoOpen(true)}>ⓘ Video­stimme</button>
              : <a className="story-button story-button--glass" href="#kundenstimme">ⓘ Kundenstimme</a>}
          </div>
        </div>
        <div className="project-hero__fade" aria-hidden="true" />
      </section>

      <nav className="story-chapters" aria-label="Kapitel"><a href="#story">Story</a><a href="#szenen">Szenen</a><a href="#entscheidungen">Details</a><a href="#werkstatt">Werkstatt</a><a href="#kundenstimme">Kundenstimme</a></nav>

      <section className="project-intro section-inner" id="story">
        <div><p className="eyebrow">Brief</p><h2>Eine klare<br /><span>Aufgabe.</span></h2></div>
        <div><p className="project-intro__lead">{project.brief}</p><dl><div><dt>Jahr</dt><dd>{project.year}</dd></div><div><dt>Dauer</dt><dd>{project.duration}</dd></div><div><dt>Material</dt><dd>{project.materials.join(' · ')}</dd></div></dl></div>
      </section>

      <section className="project-gallery-section" id="szenen"><div className="story-wide"><div className="story-row-title"><div><p className="eyebrow">Jetzt in dieser Story</p><h2>Räume & Szenen</h2></div><span>{project.gallery.length} Kapitel</span></div><ProjectGallery project={project} /></div></section>

      <section className="project-decisions section-inner" id="entscheidungen"><p className="eyebrow">Hinter den Kulissen</p><div className="story-row-title"><h2>Design decisions</h2><span>Warum es so geworden ist</span></div><div className="project-decisions__grid">{project.decisions.map((decision, i) => <article key={decision.title}><span>Episode 0{i + 1}</span><h3>{decision.title}</h3><p>{decision.text}</p><i aria-hidden="true">→</i></article>)}</div></section>

      <section className="journal" id="werkstatt"><div className="story-wide"><div className="story-row-title"><div><p className="eyebrow">Werkstatt Journal</p><h2>Making of</h2></div><span>Vom Blatt zum Raum</span></div><div className="journal__grid">{project.journal.map((item) => <figure key={item.step}><div><img src={item.image} alt="Arbeitsschritt in der Werkstatt" loading="lazy" /><span aria-hidden="true">▶</span></div><figcaption><strong>{item.step}</strong>{item.caption}</figcaption></figure>)}</div></div></section>

      <section className="project-result section-inner" id="kundenstimme"><p className="eyebrow">Kundenstimme · Finale Szene</p><blockquote>„{project.testimonial}“</blockquote><p>{project.result}</p>{project.testimonialVideo && <button ref={videoButton} className="story-button story-button--dark" type="button" onClick={() => setVideoOpen(true)}>▶ Video­stimme ansehen</button>}<small>Fiktive Kundenstimme für dieses Demonstrationsprojekt.</small></section>

      <a className="next-project" href={`/projekte/${next.slug}`}><img src={next.image} alt="" /><span>Nächstes Projekt<strong>{next.title}</strong></span></a>
    </main>
    {videoOpen && project.testimonialVideo && <div className="story-video" role="dialog" aria-modal="true" aria-label="Video-Kundenstimme"><button type="button" onClick={() => setVideoOpen(false)} aria-label="Video schließen">×</button><video controls autoPlay poster={project.testimonialPoster || project.image}><source src={project.testimonialVideo} type="video/mp4" /><track kind="captions" srcLang="de" label="Deutsch" /></video><a href="#kundenstimme" onClick={() => setVideoOpen(false)}>Transkript und Textstimme lesen</a></div>}
  </>
}
