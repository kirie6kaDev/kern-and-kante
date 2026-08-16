import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { MagneticButton, MagneticLink } from '../components/Magnetic'
import { projects } from '../data/projects'
import { site } from '../data/site'
import './Hero.css'

export function Hero() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const project = projects[active]
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.45 })

  const width = useTransform(progress, [0, 1], ['100%', '88%'])
  const height = useTransform(progress, [0, 1], ['calc(100svh - var(--demo-bar-h))', '76svh'])
  const radius = useTransform(progress, [0, 1], ['0px', '36px'])
  const imageScale = useTransform(progress, [0, 1], [1, 1.045])
  const contentScale = useTransform(progress, [0, 1], [1, 0.9])
  const contentOpacity = useTransform(progress, [0, 0.86, 1], [1, 1, 0.78])

  const moveTo = (index: number) => {
    if (index === active) return
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }
  const next = () => moveTo((active + 1) % projects.length)
  const prev = () => moveTo((active - 1 + projects.length) % projects.length)

  return (
    <section ref={ref} className="hero-scroll snap-section" aria-label="Ausgewähltes Projekt">
      <motion.div
        className={[
          'hero',
          `hero--text-${project.hero.textTheme}`,
          `hero--overlay-${project.hero.overlay}`,
          `hero--title-${project.hero.titleSize}`,
          `hero--nav-${project.hero.navTheme}`,
        ].join(' ')}
        style={{
          ['--hero-bg' as string]: project.theme.background,
          ['--hero-accent' as string]: project.theme.accent,
          ['--hero-object-position' as string]: project.hero.objectPosition,
          width: reduceMotion ? '100%' : width,
          height: reduceMotion ? 'calc(100svh - var(--demo-bar-h))' : height,
          borderRadius: reduceMotion ? 0 : radius,
        }}
      >
        <header className="hero__nav">
          <a className="brand" href="#top" aria-label="Kern & Kante Startseite">
            {site.brand.name}<span>{site.brand.descriptor}</span>
          </a>
          <nav aria-label="Hauptnavigation">
            <a href="#projects">Projekte</a>
            <a href="#services">Leistungen</a>
            <a href="#about">Über uns</a>
            <a href="#team">Team</a>
          </nav>
          <a className="hero__contact-link" href="#contact">Kontakt</a>
        </header>

        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={project.id}
            className="hero__media"
            custom={direction}
            initial={reduceMotion ? false : { opacity: 0, x: direction > 0 ? '4%' : '-4%', scale: 1.025 }}
            animate={{ opacity: 1, x: '0%', scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: direction > 0 ? '-3%' : '3%', scale: 0.99 }}
            transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={project.image}
              alt={`${project.title} — ${project.category}`}
              loading="eager"
              fetchPriority={active === 0 ? 'high' : 'auto'}
              decoding="async"
              style={{ scale: reduceMotion ? 1 : imageScale }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="hero__shade" aria-hidden="true" />

        <div className="hero__controls-layer">
          <MagneticButton className="hero__arrow hero__arrow--left" onClick={prev} aria-label="Vorheriges Projekt">‹</MagneticButton>
          <MagneticButton className="hero__arrow hero__arrow--right" onClick={next} aria-label="Nächstes Projekt">›</MagneticButton>
        </div>

        <motion.div className="hero__content-shell" style={{ scale: reduceMotion ? 1 : contentScale, opacity: reduceMotion ? 1 : contentOpacity }}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={project.id}
              className="hero__content"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
              transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="hero__eyebrow">Featured project</span>
              <h1>{project.title}</h1>
              <p>{project.category} · {project.location} · {project.year}</p>
              <MagneticLink className="button button--light" href="#projects" strength={0.1}>
                Projekt ansehen <span aria-hidden="true">→</span>
              </MagneticLink>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="hero__pagination" aria-label="Projektauswahl">
          {projects.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => moveTo(index)}
              className={index === active ? 'is-active' : ''}
              aria-label={`${item.title} anzeigen`}
              aria-current={index === active ? 'true' : undefined}
            >
              {String(item.id).padStart(2, '0')}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
