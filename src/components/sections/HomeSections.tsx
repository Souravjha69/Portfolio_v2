'use client'
import { useEffect, useRef } from 'react'
import { useGSAPReveal } from '@/hooks/useGSAP'
import { skills, experience, services, education, testimonials } from '@/lib/data'
import Link from 'next/link'
import { projects, stats, techStack } from '@/lib/data'

/* ── MARQUEE ── */
export function Marquee() {
  return (
    <div className="border-t border-white/[0.10] border-b overflow-hidden py-[0.82rem]">
      <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
        {[...techStack, ...techStack].map((t, i) => (
          <span key={i} className="font-syne font-bold text-[0.75rem] tracking-[0.15em] uppercase text-white/32 flex items-center gap-3">
            <span className="w-[3px] h-[3px] rounded-full bg-white/12" />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── AI STRIP ── */
export function AIStrip() {
  const ref = useGSAPReveal()
  return (
    <div ref={ref} id="ai-strip" className="border-b border-white/[0.10] relative">
      <div className="section-line" />
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/[0.10]">
        {[
          { tag: 'Core Specialization', val: 'LLM Integration', sub: 'Prompt engineering, evaluation frameworks & AI guardrails — balancing accuracy, cost & latency', pill: 'OpenAI API', pillColor: 'blue' },
          { tag: 'Currently Studying', val: 'Drexel M.S. ML', sub: 'Deep Learning · Reinforcement Learning · Distributed Systems · AI Systems Engineering', pill: 'GPA 3.7 / 4.0', pillColor: 'violet' },
          { tag: 'Production Stack', val: 'MERN + AI', sub: 'Node.js · React · MongoDB · Docker · GitHub Actions · CI/CD pipelines', pill: 'Production-ready', pillColor: 'green' },
        ].map((c) => (
          <div key={c.val} className="reveal group px-6 sm:px-8 lg:px-10 py-8 lg:py-11 relative overflow-hidden glass-panel cursor-default">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            <div className="text-[0.6rem] font-bold tracking-[0.14em] uppercase text-white/40 mb-[0.65rem]">{c.tag}</div>
            <div className="font-syne font-black text-[1.3rem] sm:text-[1.4rem] text-white tracking-[-0.03em] mb-[0.3rem]">{c.val}</div>
            <div className="text-[0.8rem] text-white/58 font-light leading-[1.55]">{c.sub}</div>
            <div className={`inline-block mt-[0.7rem] text-[0.58rem] font-bold tracking-[0.1em] uppercase px-[0.65rem] py-[0.2rem] ${
              c.pillColor === 'blue'   ? 'bg-blue/12 text-blue/80 border border-blue/20' :
              c.pillColor === 'violet' ? 'bg-violet/12 text-violet/80 border border-violet/20' :
              'bg-green/10 text-green/80 border border-green/18'
            }`}>{c.pill}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── ABOUT ── */
export function About() {
  const ref = useGSAPReveal()
  const codeLines = [
    { text: "import { OpenAI } from 'openai';", color: 'text-blue/80' },
    { text: 'const res = await llm.complete(prompt);', color: 'text-green/80' },
    { text: '// eval framework + guardrails ✓', color: 'text-violet/80' },
    { text: '// shipped to production ✓', color: 'text-white/20' },
  ]
  const lineRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    lineRefs.current.forEach((el, i) => {
      if (!el) return
      const full = codeLines[i].text
      el.textContent = ''
      setTimeout(() => {
        let idx = 0
        const t = setInterval(() => {
          el.textContent = full.slice(0, ++idx)
          if (idx >= full.length) clearInterval(t)
        }, 28)
      }, i * 440 + 900)
    })
  }, [])

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-14 relative">
      <div className="section-line" />
      <div ref={ref} className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-28 items-center">
        {/* Photo */}
        <div className="reveal-left relative h-[260px] sm:h-[360px] md:h-[520px]">
          <div className="w-full h-full glass-card flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue/[0.06] to-transparent" />
            <img src="/Sourav.jpg" alt="Sourav Kumar Jha" className="absolute inset-0 w-full h-full object-cover object-top z-10" />
            <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-4 sm:py-6 bg-gradient-to-t from-black/90 to-transparent">
              {codeLines.map((l, i) => (
                <div key={i} ref={(el) => { lineRefs.current[i] = el }}
                  className={`font-mono text-[0.6rem] sm:text-[0.68rem] mb-[0.28rem] whitespace-nowrap overflow-hidden ${l.color}`} />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 sm:-bottom-5 -right-2 sm:-right-5 bg-white text-black px-4 sm:px-6 py-4 sm:py-5 z-20">
            <div className="font-syne font-black text-[1.6rem] sm:text-[2rem] tracking-[-0.05em] leading-none">3.7</div>
            <div className="text-[0.52rem] sm:text-[0.58rem] font-bold tracking-[0.1em] uppercase text-black/40 mt-[0.2rem]">GPA · Drexel M.S.</div>
          </div>
        </div>

        {/* Text */}
        <div className="reveal-right">
          <span className="block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/42 mb-4">About Me</span>
          <h2 className="font-syne font-black text-white mb-5 leading-[0.95] tracking-[-0.045em]"
            style={{ fontSize: 'clamp(1.9rem,4vw,3.8rem)' }}>
            AI Engineer<br /><span className="text-white/18">& Full Stack Dev</span>
          </h2>
          <p className="text-[0.88rem] sm:text-[0.95rem] text-white/62 font-light leading-[1.75] mb-4">
            I&apos;m Sourav — a Full Stack Engineer and AI platform developer pursuing my M.S. in Machine Learning at Drexel. I build LLM-integrated systems from idea to production.
          </p>
          <p className="text-[0.88rem] sm:text-[0.95rem] text-white/62 font-light leading-[1.75]">
            My work bridges engineering and product strategy — translating AI capabilities into robust, customer-facing systems that actually scale.
          </p>
          <div className="flex flex-wrap gap-[0.4rem] mt-7">
            {['LLM APIs','Prompt Engineering','Node.js','React.js','Python','MongoDB','Docker','REST APIs','Reinforcement Learning','Deep Learning','GitHub Actions','Microservices'].map((t) => (
              <span key={t} className="text-[0.68rem] sm:text-[0.7rem] font-medium px-3 py-[0.25rem] border border-white/[0.06] text-white/30 hover:border-white/12 hover:text-white/70 transition-all cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── WORK PREVIEW ── */
export function WorkPreview() {
  const ref = useGSAPReveal()
  return (
    <section id="work" className="pt-0 pb-16 sm:pb-20 lg:pb-28 px-5 sm:px-8 lg:px-14 border-t border-white/[0.10] relative">
      <div className="section-line" />
      <div ref={ref} className="max-w-[1160px] mx-auto">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-8">
          <div>
            <span className="block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/42 mb-4">Selected Projects</span>
            <h2 className="font-syne font-black text-white leading-[0.95] tracking-[-0.045em]"
              style={{ fontSize: 'clamp(1.9rem,4vw,3.8rem)' }}>
              What I&apos;ve<br /><span className="text-white/18">Built &amp; Shipped</span>
            </h2>
          </div>
          <p className="text-[0.85rem] text-white/45 sm:max-w-[200px] leading-relaxed font-light sm:text-right">Production AI apps & backend systems.</p>
        </div>
        <div className="reveal-grid grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.10] border border-white/[0.10]">
          {projects.map((p) => (
            <Link key={p.id} href="/work"
              className="group glass-panel p-6 sm:p-8 lg:p-10 min-h-[220px] sm:min-h-[270px] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              <div className="flex justify-between mb-5 sm:mb-6">
                <span className="text-[0.62rem] font-bold text-white/15 tracking-[0.08em]">{p.id}</span>
                <div className="w-[26px] h-[26px] border border-white/[0.06] grid place-items-center text-[0.8rem] text-white/50 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:rotate-[-45deg] transition-all duration-300">↗</div>
              </div>
              <div>
                <span className="text-[1.6rem] sm:text-[1.8rem] block mb-3">{p.icon}</span>
                <h3 className="font-syne font-black text-white text-[1rem] sm:text-[1.15rem] tracking-[-0.03em] mb-2">{p.title}</h3>
                <p className="text-white/58 text-[0.8rem] sm:text-[0.82rem] leading-[1.65] font-light">{p.description}</p>
                <div className="flex gap-[0.35rem] flex-wrap mt-4 sm:mt-5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[0.58rem] font-bold tracking-[0.08em] uppercase text-white/48 border border-white/[0.14] px-[0.48rem] py-[0.14rem]">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── STATS ── */
export function Stats() {
  const counters = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      counters.current.forEach((el) => {
        if (!el || !el.dataset.t) return
        const t = parseFloat(el.dataset.t)
        ScrollTrigger.create({
          trigger: el, start: 'top 92%',
          onEnter: () => {
            const o = { v: 0 }
            gsap.to(o, { v: t, duration: 2.0, ease: 'power2.out', onUpdate() { el.textContent = Math.round(o.v).toString() } })
          },
        })
      })
    }
    init()
  }, [])

  return (
    <div id="stats" className="border-t border-b border-white/[0.10] grid grid-cols-2 lg:grid-cols-4 relative">
      <div className="section-line" />
      {stats.map((s, i) => (
        <div key={s.label} className="glass-panel py-10 sm:py-12 lg:py-14 px-5 sm:px-8 lg:px-12 border-r border-white/[0.06] last:border-r-0 group">
          <div className="font-syne font-black text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] tracking-[-0.07em] leading-none text-white mb-[0.4rem]">
            {s.number === '3.7' ? '3.7' : (
              <><span ref={(el) => { counters.current[i] = el }} data-t={s.number}>0</span><span className="text-[1.4rem] sm:text-[2rem] text-white/20">{s.suffix}</span></>
            )}
          </div>
          <div className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.1em] uppercase text-white/52">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

/* ── EXPERIENCE ── */
export function Experience() {
  const ref = useGSAPReveal()
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-14 relative">
      <div className="section-line" />
      <div ref={ref} className="max-w-[1160px] mx-auto">
        <span className="reveal block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/42 mb-4">Experience</span>
        <h2 className="reveal font-syne font-black text-white mb-10 sm:mb-14 leading-[0.95] tracking-[-0.045em]"
          style={{ fontSize: 'clamp(1.9rem,4vw,3.8rem)' }}>
          Where I&apos;ve<br /><span className="text-white/18">Worked</span>
        </h2>
        <div className="reveal-grid grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {experience.map((e) => (
            <div key={e.company} className="card-accent glass-card relative p-6 sm:p-8 lg:p-10">
              <div className="font-syne font-black text-white text-[1rem] sm:text-[1.05rem] mb-[0.22rem]">{e.company}</div>
              <div className="text-[0.76rem] text-white/60 font-normal mb-[0.3rem]">{e.role}</div>
              <div className="text-[0.62rem] font-bold tracking-[0.1em] uppercase text-blue mb-5">{e.date} · {e.location}</div>
              <ul className="flex flex-col gap-2">
                {e.bullets.map((b, i) => (
                  <li key={i} className="text-[0.78rem] sm:text-[0.8rem] text-white/58 font-light leading-[1.65] pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-white/12">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SKILLS ── */
export function Skills() {
  const ref = useGSAPReveal()
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-14 border-t border-white/[0.10] relative">
      <div className="section-line" />
      <div ref={ref} className="max-w-[1160px] mx-auto">
        <span className="reveal block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/42 mb-4">Technical Skills</span>
        <h2 className="reveal font-syne font-black text-white mb-0 leading-[0.95] tracking-[-0.045em]"
          style={{ fontSize: 'clamp(1.9rem,4vw,3.8rem)' }}>
          Full Stack &<br /><span className="text-white/18">AI Capabilities</span>
        </h2>
        <div className="reveal-grid grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.10] border border-white/[0.10] mt-10 sm:mt-14">
          {skills.map((s) => (
            <div key={s.category} className="glass-panel p-5 sm:p-6 lg:p-8">
              <span className="text-[1.2rem] sm:text-[1.4rem] block mb-3 sm:mb-4">{s.icon}</span>
              <div className="font-syne font-bold text-white text-[0.82rem] sm:text-[0.9rem] mb-3 sm:mb-4">{s.category}</div>
              <div className="flex flex-col gap-[0.3rem] sm:gap-[0.35rem]">
                {s.items.map((item) => (
                  <span key={item} className="text-[0.7rem] sm:text-[0.75rem] text-white/62 py-[0.2rem] sm:py-[0.24rem] border-b border-white/[0.08] last:border-none flex items-center gap-[0.4rem] before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-white/15 before:flex-shrink-0">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SERVICES ── */
export function Services() {
  const ref = useGSAPReveal()
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-14 border-t border-white/[0.10] relative">
      <div className="section-line" />
      <div ref={ref} className="max-w-[1160px] mx-auto">
        <span className="reveal block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/42 mb-4">What I Offer</span>
        <h2 className="reveal font-syne font-black text-white mb-0 leading-[0.95] tracking-[-0.045em]"
          style={{ fontSize: 'clamp(1.9rem,4vw,3.8rem)' }}>
          Services &<br /><span className="text-white/18">Capabilities</span>
        </h2>
        <div className="reveal-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.10] border border-white/[0.10] mt-10 sm:mt-14">
          {services.map((s) => (
            <div key={s.title} className="glass-panel p-6 sm:p-8 lg:p-10 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white/[0.04]">
              <span className="text-[1.4rem] sm:text-[1.5rem] block mb-4 sm:mb-5">{s.icon}</span>
              <h3 className="font-syne font-black text-white text-[0.95rem] sm:text-[1rem] mb-2">{s.title}</h3>
              <p className="text-[0.78rem] sm:text-[0.8rem] text-white/55 leading-[1.7] font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── EDUCATION ── */
export function Education() {
  const ref = useGSAPReveal()
  const badgeColors = {
    blue:   'bg-blue/10 text-blue/80 border border-blue/20',
    violet: 'bg-violet/10 text-violet/80 border border-violet/20',
    gray:   'bg-white/[0.04] text-white/30 border border-white/[0.06]',
  }
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-14 border-t border-white/[0.10] relative">
      <div className="section-line" />
      <div ref={ref} className="max-w-[1160px] mx-auto">
        <span className="reveal block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/42 mb-4">Education</span>
        <h2 className="reveal font-syne font-black text-white mb-0 leading-[0.95] tracking-[-0.045em]"
          style={{ fontSize: 'clamp(1.9rem,4vw,3.8rem)' }}>
          Academic<br /><span className="text-white/18">Background</span>
        </h2>
        <div className="reveal-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.10] border border-white/[0.10] mt-10 sm:mt-14">
          {education.map((e) => (
            <div key={e.university} className="glass-panel p-6 sm:p-8 lg:p-10">
              <span className={`inline-block text-[0.58rem] font-bold tracking-[0.1em] uppercase px-[0.62rem] py-[0.18rem] mb-4 sm:mb-5 ${badgeColors[e.badgeColor]}`}>{e.badge}</span>
              <div className="font-syne font-black text-white text-[0.95rem] sm:text-[1rem] mb-[0.22rem]">{e.university}</div>
              <div className="text-[0.8rem] sm:text-[0.82rem] text-white/62 mb-[0.22rem]">{e.degree}</div>
              <div className="text-[0.65rem] font-bold text-white/18 tracking-[0.07em] uppercase mb-4">{e.date}</div>
              <div className="text-[0.74rem] sm:text-[0.76rem] text-white/55 font-light leading-[1.65]">{e.detail}</div>
              {e.gpa && (
                <div className="inline-flex items-center gap-1 mt-4 text-[0.7rem] font-bold text-green bg-green/7 px-[0.62rem] py-[0.2rem] border border-green/15">
                  ⭐ {e.gpa}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── TESTIMONIALS ── */
export function Testimonials() {
  const ref = useGSAPReveal()
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-14 border-t border-white/[0.10] relative">
      <div className="section-line" />
      <div ref={ref} className="max-w-[1160px] mx-auto">
        <span className="reveal block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/42 mb-4">Feedback</span>
        <h2 className="reveal font-syne font-black text-white mb-0 leading-[0.95] tracking-[-0.045em]"
          style={{ fontSize: 'clamp(1.9rem,4vw,3.8rem)' }}>
          What People<br /><span className="text-white/18">Say</span>
        </h2>
        <div className="reveal-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.10] border border-white/[0.10] mt-10 sm:mt-14">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-panel p-6 sm:p-9">
              <div className="text-amber text-[0.8rem] mb-3">{'★'.repeat(t.stars)}</div>
              <div className="font-syne text-[2.2rem] text-white/8 leading-none mb-2">&ldquo;</div>
              <p className="text-[0.82rem] sm:text-[0.84rem] text-white/65 leading-[1.75] font-light italic mb-5">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.10]">
                <div className={`w-8 h-8 rounded-full grid place-items-center font-syne font-black text-[0.68rem] flex-shrink-0 ${i === 0 ? 'bg-white text-black' : i === 1 ? 'bg-g2 text-white' : 'bg-g1 text-white/50 border border-white/[0.06]'}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[0.82rem] text-white">{t.author}</div>
                  <div className="text-[0.68rem] text-white/52">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── RESUME SECTION ── */
export function ResumeSection() {
  const ref = useGSAPReveal()
  return (
    <section id="resume" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-14 border-t border-white/[0.10] relative">
      <div className="section-line" />
      <div ref={ref} className="max-w-[960px] mx-auto">
        <span className="reveal block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/42 mb-4">Resume</span>
        <h2 className="reveal font-syne font-black text-white mb-0 leading-[0.95] tracking-[-0.045em]"
          style={{ fontSize: 'clamp(1.9rem,4vw,3.8rem)' }}>
          My CV at a<br /><span className="text-white/18">Glance</span>
        </h2>
        <div className="reveal mt-10 sm:mt-12 border border-white/[0.06] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
          {/* Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:px-8 py-4 bg-bg3 border-b border-white/[0.06] gap-3 sm:gap-0">
            <span className="text-[0.72rem] sm:text-[0.78rem] font-medium text-white/40">📄&ensp;Sourav_Kumar_Jha_Resume.pdf</span>
            <button onClick={() => window.print()} className="px-4 sm:px-5 py-[0.42rem] bg-white text-black font-grotesk font-bold text-[0.72rem] hover:bg-white/88 hover:-translate-y-px transition-all flex-shrink-0">
              ↓&ensp;Download PDF
            </button>
          </div>

          {/* Doc */}
          <div className="bg-white text-[#111] p-5 sm:p-8 lg:p-12 font-grotesk no-print overflow-x-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start pb-6 sm:pb-7 border-b-2 border-[#111] mb-6 sm:mb-8 gap-4 sm:gap-0">
              <div>
                <div className="font-syne font-black text-[1.5rem] sm:text-[2rem] tracking-[-0.05em] leading-none text-[#111]">SOURAV KUMAR JHA</div>
                <div className="text-[0.75rem] sm:text-[0.8rem] text-[#666] mt-[0.3rem]">Full Stack Engineer & AI Platform Developer · M.S. Machine Learning, Drexel University</div>
              </div>
              <div className="flex flex-col gap-1 sm:items-end">
                {[['📍','Philadelphia, PA'],['📞','+1 215-240-9310'],['✉️','souravkumarjha301@gmail.com'],['💼','linkedin.com/in/souravkumarjha'],['🐙','github.com/souravkumarjha']].map(([i,v]) => (
                  <div key={v} className="text-[0.65rem] sm:text-[0.7rem] text-[#888] flex items-center gap-1">{i}&ensp;{v}</div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6 sm:mb-7">
              <div className="font-syne font-black text-[0.65rem] tracking-[0.16em] uppercase text-[#111] mb-3 pb-1 border-b border-[#eee]">Summary</div>
              <p className="text-[0.74rem] sm:text-[0.76rem] text-[#555] leading-[1.72] font-light">Full Stack Engineer and AI platform developer with production experience building LLM-integrated systems, REST APIs, and scalable backends. Skilled in prompt engineering, evaluation frameworks, and AI guardrails. Pursuing M.S. in Machine Learning at Drexel University (GPA: 3.7). Bridges engineering and product strategy — translating AI capabilities into robust, customer-facing systems at scale.</p>
            </div>

            {/* Experience */}
            <div className="mb-6 sm:mb-7">
              <div className="font-syne font-black text-[0.65rem] tracking-[0.16em] uppercase text-[#111] mb-3 pb-1 border-b border-[#eee]">Professional Experience</div>
              <div className="flex flex-col sm:flex-row justify-between items-start mb-1 gap-1">
                <div className="font-syne font-black text-[0.85rem] sm:text-[0.9rem] text-[#111]">CyberSigma Consulting Services</div>
                <div className="text-[0.65rem] font-semibold text-[#999] flex-shrink-0">Feb 2024 – Aug 2025</div>
              </div>
              <div className="text-[0.74rem] sm:text-[0.76rem] text-[#666] mb-2">Software Developer · Philadelphia, PA</div>
              <ul className="flex flex-col gap-1">
                {['Architected scalable full-stack apps (Node.js, Express.js, React.js, MongoDB) for client-facing and internal workflows with high availability.','Led LLM API integration experiments — designed prompt strategies, evaluated AI response quality, benchmarked latency-accuracy tradeoffs.','Built production-grade RESTful APIs and AI-augmented backend services with secure authentication and workflow automation.','Implemented CI/CD pipelines via GitHub Actions; diagnosed and resolved performance bottlenecks.'].map((b,i) => (
                  <li key={i} className="text-[0.72rem] sm:text-[0.74rem] text-[#555] leading-[1.6] pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[#bbb] before:text-[0.62rem] before:top-[0.1rem]">{b}</li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="mb-6 sm:mb-7">
              <div className="font-syne font-black text-[0.65rem] tracking-[0.16em] uppercase text-[#111] mb-3 pb-1 border-b border-[#eee]">Projects</div>
              {[
                { name:'AI-Powered Code Reviewer', year:'2024', role:'Full Stack LLM Application', pts:['Built MERN-stack app integrating OpenAI LLM APIs for automated code review; designed prompt strategies, evaluation frameworks, and AI guardrails.','Developed scalable backend APIs for code analysis with structured logging; created responsive dashboards for AI-generated feedback.'] },
                { name:'Virtual Assistant', year:'2024', role:'AI-Driven Full Stack Application', pts:['Built production virtual assistant with LLM APIs for NL query handling at scale; optimized pipelines for latency.','Implemented secure auth, session management, and database-backed conversation state.'] },
                { name:'Payment Gateway', year:'2023', role:'Secure Backend System', pts:['Built secure payment backend (Node.js, Express.js, MongoDB) with REST APIs for transaction lifecycle management, audit logging, and compliance-ready architecture.'] },
              ].map((p) => (
                <div key={p.name} className="mb-4 sm:mb-5">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-[0.22rem] gap-1">
                    <div className="font-syne font-black text-[0.85rem] sm:text-[0.9rem] text-[#111]">{p.name}</div>
                    <div className="text-[0.65rem] font-semibold text-[#999] flex-shrink-0">{p.year}</div>
                  </div>
                  <div className="text-[0.74rem] sm:text-[0.76rem] text-[#666] mb-[0.4rem]">{p.role}</div>
                  <ul className="flex flex-col gap-1">{p.pts.map((pt,i) => <li key={i} className="text-[0.72rem] sm:text-[0.74rem] text-[#555] leading-[1.6] pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[#bbb] before:text-[0.62rem] before:top-[0.1rem]">{pt}</li>)}</ul>
                </div>
              ))}
            </div>

            {/* Education + Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="font-syne font-black text-[0.65rem] tracking-[0.16em] uppercase text-[#111] mb-3 pb-1 border-b border-[#eee]">Education</div>
                {[
                  { u:'Drexel University', d:'M.S. Machine Learning · GPA 3.7 · 2025–2027' },
                  { u:'IIIT Bangalore', d:'PG Program — ML & AI · 2024–2025' },
                  { u:'Chandigarh University', d:'B.E. Computer Science · 2021–2024' },
                ].map((e) => <div key={e.u} className="mb-3 sm:mb-4"><div className="font-syne font-black text-[0.82rem] sm:text-[0.85rem] text-[#111]">{e.u}</div><div className="text-[0.7rem] sm:text-[0.73rem] text-[#777]">{e.d}</div></div>)}
              </div>
              <div>
                <div className="font-syne font-black text-[0.65rem] tracking-[0.16em] uppercase text-[#111] mb-3 pb-1 border-b border-[#eee]">Technical Skills</div>
                <div className="text-[0.72rem] sm:text-[0.74rem] text-[#555] leading-[1.9]">
                  <div><strong className="text-[#111]">AI & LLM:</strong> OpenAI API, Prompt Engineering, Eval Frameworks, Deep Learning, RL</div>
                  <div><strong className="text-[#111]">Backend:</strong> Node.js, Express.js, REST API, Microservices, Auth & Security</div>
                  <div><strong className="text-[#111]">Frontend:</strong> React.js, HTML5, CSS3, Tailwind CSS, Next.js</div>
                  <div><strong className="text-[#111]">Databases:</strong> MongoDB, SQL</div>
                  <div><strong className="text-[#111]">DevOps:</strong> Docker, GitHub Actions, CI/CD, Git</div>
                  <div><strong className="text-[#111]">Languages:</strong> JavaScript, Python, Java, Kotlin, C/C++</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
          <Link href="/contact" className="px-7 py-3 bg-white text-black font-grotesk font-bold text-[0.82rem] hover:bg-white/88 hover:-translate-y-0.5 transition-all text-center">Hire Me →</Link>
          <Link href="/about" className="px-7 py-3 bg-transparent text-white/75 border border-white/20 font-grotesk font-medium text-[0.82rem] hover:border-white/50 hover:text-white hover:-translate-y-0.5 transition-all text-center">My Full Story →</Link>
        </div>
      </div>
    </section>
  )
}

/* ── CTA STRIP ── */
export function CTAStrip() {
  return (
    <div id="cta" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-14 border-t border-white/[0.10] relative overflow-hidden">
      <div className="section-line" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue/[0.08] to-violet/[0.06] pointer-events-none" />
      <div className="max-w-[1160px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-12 relative">
        <div>
          <h2 className="font-syne font-black text-white mb-3 leading-[0.98] tracking-[-0.045em]"
            style={{ fontSize: 'clamp(1.7rem,4vw,3.5rem)' }}>
            Ready to build something with AI?
          </h2>
          <p className="text-[0.85rem] sm:text-[0.9rem] text-white/60 font-light leading-relaxed">Open to full-time roles, internships & freelance AI/full-stack projects.</p>
        </div>
        <Link href="/contact"
          className="flex-shrink-0 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-black border border-white font-grotesk font-bold text-[0.85rem] sm:text-[0.9rem] whitespace-nowrap hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(255,255,255,0.12)] transition-all">
          Start a Conversation →
        </Link>
      </div>
    </div>
  )
}

/* ── FOOTER ── */
export function Footer() {
  return (
    <footer className="px-5 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 border-t border-white/[0.10]">
      <div className="font-syne font-black text-white text-[1rem] tracking-[-0.04em]">Sourav.dev</div>
      <div className="text-[0.7rem] text-white/38">© 2025 Sourav Kumar Jha</div>
      <div className="flex gap-6">
        {[['Work','/work'],['About','/about'],['Contact','/contact']].map(([l,h]) => (
          <Link key={l} href={h} className="text-[0.7rem] text-white/38 hover:text-white transition-colors">{l}</Link>
        ))}
      </div>
    </footer>
  )
}
