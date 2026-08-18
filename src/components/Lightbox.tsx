import { useEffect, useRef } from 'react'

type Image = { src: string; alt: string; caption: string }

export function Lightbox({ images, index, onChange, onClose }: {
  images: Image[]
  index: number
  onChange: (index: number) => void
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onChange((index + 1) % images.length)
      if (event.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length)
      if (event.key === 'Tab') {
        const nodes = Array.from(document.querySelectorAll<HTMLElement>('.lightbox button'))
        if (!nodes.length) return
        const next = event.shiftKey ? nodes.indexOf(document.activeElement as HTMLElement) - 1 : nodes.indexOf(document.activeElement as HTMLElement) + 1
        if (next < 0 || next >= nodes.length) { event.preventDefault(); nodes[event.shiftKey ? nodes.length - 1 : 0].focus() }
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); previous?.focus() }
  }, [images.length, index, onChange, onClose])

  const image = images[index]
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label="Projektgalerie">
    <button ref={closeRef} className="lightbox__close" onClick={onClose} aria-label="Galerie schließen">×</button>
    <button className="lightbox__arrow lightbox__arrow--prev" onClick={() => onChange((index - 1 + images.length) % images.length)} aria-label="Vorheriges Bild">←</button>
    <figure><img src={image.src} alt={image.alt} /><figcaption>{image.caption} <span>{index + 1} / {images.length}</span></figcaption></figure>
    <button className="lightbox__arrow lightbox__arrow--next" onClick={() => onChange((index + 1) % images.length)} aria-label="Nächstes Bild">→</button>
  </div>
}
