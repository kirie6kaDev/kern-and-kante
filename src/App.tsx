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
import { CaseStudy } from './sections/CaseStudy'
import { ScrollAssist } from './components/ScrollAssist'
import { ProjectPage } from './pages/ProjectPage'

export default function App() {
  const match = window.location.pathname.match(/^\/projekte\/([^/]+)\/?$/)
  if (match) return <ProjectPage slug={decodeURIComponent(match[1])} />
  return (
    <>
      <a className="skip-link" href="#main-content">Zum Hauptinhalt springen</a>
      <ScrollAssist />
      <DemoBar />
      <Hero />
      <main id="main-content" tabIndex={-1}>
        <About />
        <Services />
        <Projects />
        <CaseStudy />
        <Process />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
