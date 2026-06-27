import Hero from '@/components/sections/Hero'
import ScatterProjects from '@/components/sections/ScatterProjects'
import PinnedProjects from '@/components/sections/PinnedProjects'
import RockEvolution from '@/components/sections/RockEvolutionLoader'
import {
  AIStrip,
  Marquee,
  About,
  Stats,
  Experience,
  Skills,
  Certifications,
  Publication,
  Services,
  Education,
  Testimonials,
  ResumeSection,
  CTAStrip,
  Footer,
} from '@/components/sections/HomeSections'

export default function Home() {
  return (
    <main>
      <Hero />
      <RockEvolution />
      <ScatterProjects />
      <PinnedProjects />
      <AIStrip />
      <Marquee />
      <About />
      <Stats />
      <Experience />
      <Skills />
      <Certifications />
      <Publication />
      <Services />
      <Education />
      <Testimonials />
      <ResumeSection />
      <CTAStrip />
      <Footer />
    </main>
  )
}
