import Hero from '@/components/sections/Hero'
import ScatterProjects from '@/components/sections/ScatterProjects'
import PinnedProjects from '@/components/sections/PinnedProjects'
import {
  AIStrip,
  Marquee,
  About,
  Stats,
  Experience,
  Skills,
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
      <ScatterProjects />
      <PinnedProjects />
      <AIStrip />
      <Marquee />
      <About />
      <Stats />
      <Experience />
      <Skills />
      <Services />
      <Education />
      <Testimonials />
      <ResumeSection />
      <CTAStrip />
      <Footer />
    </main>
  )
}
