'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const HeroSphere = dynamic(() => import('./HeroSphere'), { ssr: false })

const stats = [
  { n: '3+',   l: 'AI Apps Shipped' },
  { n: '3.7',  l: 'GPA' },
  { n: '18mo', l: 'Prod. Experience' },
]

export default function Hero() {
  const [lbHeight, setLbHeight] = useState(80)

  useEffect(() => {
    const t1 = setTimeout(() => setLbHeight(80), 400)
    const t2 = setTimeout(() => setLbHeight(0), 2600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')

      gsap.timeline({ delay: 0.5 })
        .fromTo('.hero-badge',   { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' })
        .fromTo('.hero-name1',   { opacity: 0, y: 40  }, { opacity: 1, y: 0, duration: 0.9,  ease: 'power4.out' }, '-=0.1')
        .fromTo('.hero-name2',   { opacity: 0, y: 40  }, { opacity: 1, y: 0, duration: 0.9,  ease: 'power4.out' }, '-=0.65')
        .fromTo('.hero-tagline', { opacity: 0, y: 16  }, { opacity: 1, y: 0, duration: 0.6,  ease: 'power3.out' }, '-=0.45')
        .fromTo('.hero-ctas',    { opacity: 0, y: 12  }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, '-=0.3')
        .fromTo('.hero-stats',   { opacity: 0, x: 20  }, { opacity: 1, x: 0, duration: 0.6,  ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-stagger', { opacity: 0, x: 30  }, { opacity: 1, x: 0, duration: 0.7,  ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-footer',  { opacity: 0 },          { opacity: 1, duration: 0.4 }, '-=0.2')
        .fromTo('.hero-scroll-cue', { opacity: 0 },       { opacity: 1, duration: 0.4 }, '-=0.2')

      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      gsap.to('.hero-left', {
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 },
        y: '8%', ease: 'none',
      })
    }
    init()
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: '#060d03' }}>

      {/* 3D SPHERE */}
      <HeroSphere />

      {/* CINEMATIC BARS */}
      <div className="absolute top-0 left-0 right-0 z-[3] bg-black transition-all duration-[1800ms]"
        style={{ height: lbHeight, transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)' }} />
      <div className="absolute bottom-0 left-0 right-0 z-[3] bg-black transition-all duration-[1800ms]"
        style={{ height: lbHeight, transitionTimingFunction: 'cubic-bezier(0.77,0,0.175,1)' }} />

      {/* OVERLAY — lighter than before since bg is solid dark; just adds edge contrast */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0.58) 100%)',
      }} />
      <div className="hero-grain absolute inset-0 z-[2]" />

      {/* ── LEFT CONTENT ──
          Mobile:  spans left-5% → right-5% (full usable width, no competing right elements)
          Tablet+: left-5% with max-width ~55%, right side has stats card
      */}
      <div className="hero-left absolute left-[5%] right-[5%] md:right-auto md:max-w-[55%] lg:max-w-[60%] top-0 bottom-0 z-[4] flex flex-col justify-center pb-[5%]">

        {/* Status badge */}
        <div className="hero-badge opacity-0 mb-6 md:mb-8 inline-flex items-center gap-2 self-start px-3 py-[0.35rem] rounded-full"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#8bc34a]" style={{ boxShadow: '0 0 6px #8bc34a' }} />
          <span className="text-[0.58rem] sm:text-[0.62rem] font-semibold tracking-[0.12em] sm:tracking-[0.18em] uppercase text-white/50 whitespace-nowrap">
            Philadelphia, PA &nbsp;·&nbsp; Open to Work
          </span>
        </div>

        {/* Name — staggered, large */}
        <div className="leading-none mb-6 md:mb-8">
          <div
            className="hero-name1 opacity-0 block font-barlow font-black uppercase"
            style={{
              fontSize: 'clamp(2.8rem, 9.5vw, 11rem)',
              color: '#5a7d1c',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
            }}
          >
            Sourav
          </div>
          <div
            className="hero-name2 opacity-0 block font-barlow font-black uppercase text-white"
            style={{
              fontSize: 'clamp(2.4rem, 8vw, 9.5rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.01em',
            }}
          >
            Kumar Jha
          </div>
        </div>

        {/* Tagline */}
        <p className="hero-tagline opacity-0 text-white/45 font-grotesk font-light leading-[1.7] text-[0.82rem] sm:text-[0.88rem] mb-7 md:mb-9">
          AI Engineer &amp; Full Stack Developer<br />
          M.S. Machine Learning @ Drexel University.<br />
          Building LLM-integrated systems that ship.
        </p>

        {/* CTAs — stack vertically on small phones, row on sm+ */}
        <div className="hero-ctas opacity-0 flex flex-col xs:flex-row sm:flex-row items-start sm:items-center gap-3">
          <Link href="/work"
            className="inline-flex items-center gap-3 font-grotesk font-bold text-[0.78rem] sm:text-[0.8rem] tracking-[0.02em] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 whitespace-nowrap"
            style={{
              background: '#8bc34a',
              color: '#1a2e00',
              padding: '0.6rem 1.25rem',
              borderRadius: '3px',
            }}
          >
            View Projects
            <span className="w-[1.4rem] h-[1.4rem] grid place-items-center rounded-[2px] text-[0.75rem] font-black"
              style={{ background: 'rgba(0,0,0,0.2)' }}>+</span>
          </Link>
          <Link href="/contact"
            className="px-5 py-[0.6rem] font-grotesk font-medium text-[0.78rem] sm:text-[0.8rem] tracking-[0.02em] text-white/55 transition-all duration-200 hover:text-white hover:border-white/40 hover:-translate-y-0.5 whitespace-nowrap"
            style={{ border: '1px solid rgba(255,255,255,0.18)', borderRadius: '3px' }}
          >
            Get in Touch →
          </Link>
        </div>
      </div>

      {/* ── RIGHT TOP — stats card (tablet+ only) ── */}
      <div
        className="hero-stats opacity-0 absolute right-[5%] z-[4] hidden md:block"
        style={{ top: '22%' }}
      >
        <div className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(28px) saturate(160%)',
            WebkitBackdropFilter: 'blur(28px) saturate(160%)',
            border: '1px solid rgba(255,255,255,0.09)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.40)',
            width: '172px',
          }}
        >
          {stats.map((s, i) => (
            <div key={s.l}
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
            >
              <span className="text-[0.65rem] font-grotesk font-medium text-white/40 tracking-[0.04em]">{s.l}</span>
              <span className="font-syne font-black text-[0.95rem] text-white">{s.n}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-2.5 justify-start pl-1">
          {['←', '→'].map((a) => (
            <button key={a}
              className="w-6 h-6 grid place-items-center rounded-full text-[0.7rem] text-white/25 transition-colors hover:text-white/60"
              style={{ border: '1px solid rgba(255,255,255,0.12)' }}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      {/* ── RIGHT BOTTOM — staggered text (desktop only) ── */}
      <div
        className="hero-stagger opacity-0 absolute right-[5%] z-[4] text-right hidden lg:block"
        style={{ bottom: '14%' }}
      >
        <div className="font-barlow font-black uppercase leading-[0.88]"
          style={{ fontSize: 'clamp(2.5rem, 6.5vw, 8rem)', color: 'rgba(139,195,74,0.28)', letterSpacing: '-0.01em' }}>
          Full
        </div>
        <div className="font-barlow font-black uppercase leading-[0.88] text-white/12"
          style={{ fontSize: 'clamp(2.5rem, 6.5vw, 8rem)', letterSpacing: '-0.01em' }}>
          Stack
        </div>
        <div className="font-barlow font-black uppercase leading-[0.88]"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 4.5rem)', color: 'rgba(255,255,255,0.07)', letterSpacing: '-0.01em' }}>
          Developer
        </div>
      </div>

      {/* ── BOTTOM LEFT — enrollment badge ── */}
      <div className="hero-footer opacity-0 absolute left-[5%] bottom-6 sm:bottom-9 z-[4] flex items-center gap-2.5">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 grid place-items-center text-[0.8rem]"
          style={{ background: 'rgba(139,195,74,0.12)', border: '1px solid rgba(139,195,74,0.25)' }}>
          ✦
        </div>
        <div>
          <div className="text-[0.48rem] sm:text-[0.5rem] font-grotesk font-bold tracking-[0.15em] uppercase text-white/25">Currently Enrolled</div>
          <div className="text-[0.6rem] sm:text-[0.65rem] font-grotesk font-semibold text-white/45">Drexel M.S. Machine Learning</div>
        </div>
      </div>

      {/* SCROLL CUE — hidden on small phones to avoid crowding */}
      <div className="hero-scroll-cue absolute bottom-6 sm:bottom-9 left-1/2 -translate-x-1/2 z-[4] hidden sm:flex flex-col items-center gap-2 opacity-0">
        <span className="text-[0.55rem] tracking-[0.22em] uppercase text-white/20">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-white/22 to-transparent animate-scroll-line" />
      </div>

    </section>
  )
}
