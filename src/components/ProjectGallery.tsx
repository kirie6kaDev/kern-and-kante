import { useState } from 'react'
import type { Project } from '../data/projects'
import { Lightbox } from './Lightbox'

export function ProjectGallery({ project }: { project: Project }) {
  const [open, setOpen] = useState<number | null>(null)
  return <>
    <div className={`project-gallery project-gallery--${project.galleryLayout}`} aria-label={`${project.title} Galerie`}>
      {project.gallery.map((image, index) => <button className="project-gallery__item" type="button" key={`${image.src}-${index}`} onClick={() => setOpen(index)} aria-label={`Bild ${index + 1} vergrößern: ${image.alt}`}>
        <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
        <span>{image.caption}</span>
      </button>)}
    </div>
    {open !== null && <Lightbox images={project.gallery} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
  </>
}
