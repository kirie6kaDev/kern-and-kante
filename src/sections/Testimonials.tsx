import { Reveal } from '../components/Reveal'
import { testimonials } from '../data/content'
import './Testimonials.css'

export function Testimonials() {
  return (
    <section className="testimonials-section snap-section section-dark">
      <div className="section-inner">
        <Reveal><p className="eyebrow">Stimmen unserer Kunden</p></Reveal>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.author} delay={index * 0.08}>
              <blockquote><span>{String(index + 1).padStart(2, '0')}</span><p>“{item.quote}”</p><cite>— {item.author}, {item.location}</cite></blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
