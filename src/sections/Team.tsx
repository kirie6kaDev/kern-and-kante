import { Reveal } from '../components/Reveal'
import { team } from '../data/content'
import './Team.css'

export function Team() {
  return (
    <section className="team-section snap-section" id="team" data-scroll-assist="true">
      <div className="section-inner team-inner">
        <Reveal className="team-heading">
          <div><p className="eyebrow">Unser Team</p><h2>Menschen hinter<br />dem Handwerk.</h2></div>
          <span>Fictional team</span>
        </Reveal>
        <div className="team-grid">
          {team.map((person, index) => (
            <Reveal key={person.name} delay={index * 0.05}>
              <article className="team-card">
                <div className="team-card__portrait"><img src={person.image} alt="" loading="lazy" decoding="async" /><span>{String(index + 1).padStart(2, '0')}</span></div>
                <div className="team-card__body"><h3>{person.name}</h3><p>{person.role}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
        <small>* Namen, Rollen und Biografien sind fiktiv und wurden für dieses Demonstrationsprojekt erstellt.</small>
      </div>
    </section>
  )
}
