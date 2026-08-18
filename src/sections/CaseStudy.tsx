import { projects } from '../data/projects'
import './CaseStudy.css'

const projectNotes = [
  'Maßküche mit ruhiger Materialhierarchie und klarer Wegeführung.',
  'Warmer Innenausbau mit vertikalen Holzlamellen und integrierten Funktionen.',
  'Helle Einbaumöbel für kompakte Räume und maximale Alltagstauglichkeit.',
  'Raumteiler als architektonisches Möbel zwischen Offenheit und Struktur.',
]

export function CaseStudy() {
  return (
    <section className="case-study" id="case-study" aria-labelledby="case-study-title">
      <div className="section-inner">
        <div className="case-study__intro">
          <div>
            <p className="eyebrow">K/DEV · Case study</p>
            <h2 id="case-study-title">Design mit<br /><span>Haltung.</span></h2>
          </div>
          <div className="case-study__summary">
            <p>Kern & Kante ist ein fiktives, vollständig konzipiertes Portfolio-Projekt für eine moderne Holzmanufaktur.</p>
            <dl>
              <div><dt>Rolle</dt><dd>Konzept · UI/UX · Frontend</dd></div>
              <div><dt>Stack</dt><dd>React · TypeScript · Motion</dd></div>
              <div><dt>Fokus</dt><dd>Editorial design · Accessibility</dd></div>
            </dl>
          </div>
        </div>

        <div className="case-study__projects" aria-label="Projektübersicht">
          {projects.map((project, index) => (
            <article id={project.slug} className="case-study__project" key={project.id}>
              <span>{String(project.id).padStart(2, '0')}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{projectNotes[index]}</p>
              </div>
              <p>{project.category}<br />{project.location} · {project.year}<br /><a href={`/projekte/${project.slug}`}>Case Study →</a></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
