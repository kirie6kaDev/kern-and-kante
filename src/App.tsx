import { DemoBar } from './components/DemoBar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Projects } from './sections/Projects'
import { Process } from './sections/Process'
import { Testimonials } from './sections/Testimonials'
import { Team } from './sections/Team'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <>
      <DemoBar />
      <Hero />
      <main>
        <About />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
