import { useEffect, useState } from 'react'

const IDLE_DELAY = 150
const MAX_ASSIST_DISTANCE = 140

/**
 * A light "lane keeping" aid for section boundaries. It never prevents input:
 * the browser scrolls natively, then a nearby boundary is gently aligned after
 * the gesture ends. Any new wheel, touch, pointer, or keyboard input cancels it.
 */
export function ScrollAssist() {
  const [enabled, setEnabled] = useState(() => {
    const stored = window.localStorage.getItem('kk-scroll-assist')
    if (stored) return stored === 'on'
    return !window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches
  })
  const [active, setActive] = useState('Start')

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarsePointer = window.matchMedia('(pointer: coarse)')
    if (!enabled || reducedMotion.matches || coarsePointer.matches) return

    let idleTimer = 0
    let releaseTimer = 0
    let assisting = false

    const stopAssist = () => {
      window.clearTimeout(idleTimer)
      window.clearTimeout(releaseTimer)
      if (assisting) {
        assisting = false
        window.scrollTo({ top: window.scrollY, behavior: 'auto' })
      }
    }

    const alignNearbySection = () => {
      if (assisting || document.activeElement !== document.body) return

      const threshold = Math.min(window.innerHeight * 0.14, MAX_ASSIST_DISTANCE)
      const candidates = Array.from(
        document.querySelectorAll<HTMLElement>('[data-scroll-assist="true"]'),
      )
        .map((element) => ({ element, distance: element.getBoundingClientRect().top }))
        .filter(({ distance }) => Math.abs(distance) > 4 && Math.abs(distance) <= threshold)
        .sort((a, b) => Math.abs(a.distance) - Math.abs(b.distance))

      const target = candidates[0]
      if (!target) return

      assisting = true
      target.element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      releaseTimer = window.setTimeout(() => { assisting = false }, 520)
    }

    const scheduleAssist = () => {
      if (assisting) return
      window.clearTimeout(idleTimer)
      idleTimer = window.setTimeout(alignNearbySection, IDLE_DELAY)
    }

    const cancelKeys = new Set([
      'ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' ', 'Tab',
    ])
    const onKeyDown = (event: KeyboardEvent) => {
      if (cancelKeys.has(event.key)) stopAssist()
    }

    window.addEventListener('scroll', scheduleAssist, { passive: true })
    window.addEventListener('wheel', stopAssist, { passive: true })
    window.addEventListener('touchstart', stopAssist, { passive: true })
    window.addEventListener('pointerdown', stopAssist, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('focusin', stopAssist)

    return () => {
      stopAssist()
      window.removeEventListener('scroll', scheduleAssist)
      window.removeEventListener('wheel', stopAssist)
      window.removeEventListener('touchstart', stopAssist)
      window.removeEventListener('pointerdown', stopAssist)
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('focusin', stopAssist)
    }
  }, [enabled])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-assist="true"]'))
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (!visible) return
      const section = visible.target as HTMLElement
      const heading = section.querySelector('h1,h2')?.textContent?.replace(/\s+/g, ' ').trim()
      setActive(heading || section.id || 'Start')
    }, { rootMargin: '-30% 0px -55%', threshold: [0, .25, .5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const toggle = () => {
    const next = !enabled
    setEnabled(next)
    window.localStorage.setItem('kk-scroll-assist', next ? 'on' : 'off')
  }

  return <aside className="scroll-assist" aria-label="Scroll Assist">
    <span className="scroll-assist__line" aria-hidden="true" />
    <span className="scroll-assist__chapter" aria-live="polite">{active}</span>
    <button type="button" onClick={toggle} aria-pressed={enabled} title="Sanfte Ausrichtung an Abschnittsgrenzen ein- oder ausschalten">
      <span aria-hidden="true">{enabled ? '●' : '○'}</span> Assist {enabled ? 'an' : 'aus'}
    </button>
  </aside>
}
