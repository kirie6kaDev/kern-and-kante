import { Reveal } from '../components/Reveal'
import { process } from '../data/content'
import './Process.css'

export function Process() {
  return (
    <section className="process-section snap-section">
      <div className="section-inner">
        <Reveal className="section-heading">
          <div><p className="eyebrow">Wie wir arbeiten</p><h2>Vom Gedanken<br />zum Raum.</h2></div>
          <span>01 — 04</span>
        </Reveal>
        <div className="process-list">
          {process.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.045}>
              <article className="process-row"><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
