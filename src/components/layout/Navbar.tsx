'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Home',    href: '/',        sectionId: 'hero' },
  { label: 'About',   href: '/#about',  sectionId: 'about' },
  { label: 'Work',    href: '/work',    sectionId: null },
  { label: 'Skills',  href: '/#skills', sectionId: 'skills' },
  { label: 'Story',   href: '/about',   sectionId: null },
  { label: 'Contact', href: '/contact', sectionId: null },
]

const sectionToHref: Record<string, string> = {
  hero:         '/',
  'ai-strip':   '/',
  about:        '/#about',
  work:         '/#about',
  stats:        '/#about',
  experience:   '/#about',
  skills:       '/#skills',
  services:     '/#skills',
  education:    '/#skills',
  testimonials: '/#skills',
  resume:       '/#skills',
  cta:          '/#skills',
}

export default function Navbar() {
  const [visible,       setVisible]       = useState(true)
  const [scrolled,      setScrolled]      = useState(false)
  const [activeSection, setActiveSection] = useState<string>('/')
  const [menuOpen,      setMenuOpen]      = useState(false)
  const lastY   = useRef(0)
  const ticking = useRef(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  // Hide on scroll-down, show on scroll-up
  useEffect(() => {
    const handler = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const y  = window.scrollY
        const dy = y - lastY.current
        setScrolled(y > 40)
        if      (y < 80)  setVisible(true)
        else if (dy >  6) setVisible(false)
        else if (dy < -4) setVisible(true)
        lastY.current   = y
        ticking.current = false
      })
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on scroll
  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    const id = setTimeout(() => setMenuOpen(false), 0)
    return () => clearTimeout(id)
  }, [pathname])

  // IntersectionObserver — one active section at a time
  useEffect(() => {
    if (!isHome) return
    const sectionIds = Object.keys(sectionToHref)
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (hit.length > 0)
          setActiveSection(sectionToHref[hit[0].target.id] ?? '/')
      },
      { threshold: [0.15, 0.3, 0.5], rootMargin: '-10% 0px -10% 0px' },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isHome])

  const isActive = (href: string) =>
    isHome ? activeSection === href : pathname === href

  return (
    <>
      <nav
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 360ms cubic-bezier(0.4,0,0.2,1), background 300ms ease',
          background: scrolled || menuOpen ? 'rgba(10,10,15,0.92)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(24px) saturate(160%)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(24px) saturate(160%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
        className="fixed top-0 left-0 right-0 z-[3000] h-[64px] flex items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-syne font-black text-[1.05rem] sm:text-[1.1rem] tracking-[-0.04em] text-white hover:opacity-60 transition-opacity duration-200 z-10"
        >
          Sourav.dev
        </Link>

        {/* Pill nav — desktop only (md+) */}
        <div
          className="hidden md:flex items-center gap-0.5 px-1.5 py-1.5 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.07)',
            backdropFilter: 'blur(20px) saturate(160%)',
            WebkitBackdropFilter: 'blur(20px) saturate(160%)',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="px-3.5 py-[0.32rem] rounded-full font-grotesk text-[0.68rem] lg:text-[0.72rem] font-medium tracking-[0.04em] text-white/55 hover:text-white hover:bg-white/10 transition-all duration-200"
              style={isActive(l.href) ? { color: 'rgba(255,255,255,0.90)', background: 'rgba(255,255,255,0.10)', fontWeight: 700 } : {}}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3 z-10">
          {/* CTA — lime green pill */}
          <Link
            href="/contact"
            className="font-grotesk font-bold text-[0.7rem] sm:text-[0.72rem] tracking-[0.04em] px-4 sm:px-5 py-[0.42rem] rounded-full transition-all duration-200 hover:brightness-110 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(139,195,74,0.35)]"
            style={{ background: '#8bc34a', color: '#1a2e00' }}
          >
            Hire Me →
          </Link>

          {/* Hamburger — mobile only (< md) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden w-9 h-9 grid place-items-center rounded-full transition-all duration-200"
            style={{
              background: menuOpen ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px] w-4">
              <span className="block h-px bg-white transition-all duration-300"
                style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none', transformOrigin: 'center' }} />
              <span className="block h-px bg-white transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }} />
              <span className="block h-px bg-white transition-all duration-300"
                style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none', transformOrigin: 'center' }} />
            </div>
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU DRAWER ── */}
      <div
        className="md:hidden fixed left-0 right-0 z-[2999] overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          top: '64px',
          maxHeight: menuOpen ? '420px' : '0px',
          opacity: menuOpen ? 1 : 0,
          background: 'rgba(10,10,15,0.96)',
          backdropFilter: 'blur(32px) saturate(160%)',
          WebkitBackdropFilter: 'blur(32px) saturate(160%)',
          borderBottom: menuOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <div className="px-5 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl font-grotesk text-[0.9rem] font-medium transition-all duration-200"
              style={
                isActive(l.href)
                  ? { color: '#8bc34a', background: 'rgba(139,195,74,0.08)', border: '1px solid rgba(139,195,74,0.15)' }
                  : { color: 'rgba(255,255,255,0.55)', border: '1px solid transparent' }
              }
            >
              {l.label}
              <span className="text-[0.7rem] opacity-40">→</span>
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 py-3.5 rounded-xl font-grotesk font-bold text-[0.85rem] tracking-[0.04em] transition-all duration-200 hover:brightness-110"
            style={{ background: '#8bc34a', color: '#1a2e00' }}
          >
            Hire Me →
          </Link>
        </div>
      </div>
    </>
  )
}
