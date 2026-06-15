'use client'
import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero',       label: 'Intro',      num: '01' },
  { id: 'about',      label: 'About',      num: '02' },
  { id: 'work',       label: 'Work',       num: '03' },
  { id: 'experience', label: 'Experience', num: '04' },
  { id: 'skills',     label: 'Skills',     num: '05' },
  { id: 'resume',     label: 'Resume',     num: '06' },
  { id: 'cta',        label: 'Contact',    num: '07' },
]

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? scrollTop / total : 0)
    }

    const observers: IntersectionObserver[] = []
    SECTIONS.forEach((s, i) => {
      const el = document.getElementById(s.id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i) },
        { rootMargin: '-30% 0px -50% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      observers.forEach(o => o.disconnect())
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Top progress bar */}
      <div
        className="fixed top-0 left-0 z-[9999] h-[2px] pointer-events-none"
        style={{
          width: `${progress * 100}%`,
          background: 'linear-gradient(to right, #4F8EF7, #A78BFA)',
          transition: 'width 0.08s linear',
        }}
      />

      {/* Ghost section number — bottom left */}
      <div className="fixed bottom-8 left-10 z-[9997] pointer-events-none hidden lg:block select-none">
        <div
          className="font-syne font-black leading-none tracking-[-0.08em]"
          style={{ fontSize: 'clamp(4.5rem, 8vw, 7.5rem)', transition: 'opacity 0.5s ease', color: 'rgba(10,10,15,0.05)' }}
        >
          {SECTIONS[active]?.num}
        </div>
        <div className="text-[0.52rem] font-bold tracking-[0.22em] uppercase mt-1" style={{ color: 'rgba(10,10,15,0.18)' }}>
          {SECTIONS[active]?.label}
        </div>
      </div>

      {/* Right section nav dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-[9998] hidden lg:flex flex-col gap-[14px] items-end">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center gap-[10px]"
            aria-label={`Navigate to ${s.label}`}
          >
            <span
              className="text-[0.52rem] font-bold tracking-[0.14em] uppercase transition-all duration-200"
              style={{
                opacity: active === i ? 1 : 0,
                color: active === i ? 'rgba(10,10,15,0.55)' : 'rgba(10,10,15,0.25)',
              }}
            >
              {s.label}
            </span>
            <span
              className="block rounded-full transition-all duration-300 flex-shrink-0"
              style={active === i ? {
                width: '5px', height: '5px',
                background: 'rgba(10,10,15,0.65)',
                boxShadow: '0 0 6px 2px rgba(0,0,0,0.10)',
              } : {
                width: '3px', height: '3px',
                background: 'rgba(10,10,15,0.22)',
              }}
            />
          </button>
        ))}
      </nav>
    </>
  )
}
