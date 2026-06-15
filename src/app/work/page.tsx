'use client'
import { useState } from 'react'
import { projects } from '@/lib/data'
import { Footer } from '@/components/sections/HomeSections'
import Link from 'next/link'

const filters = ['All', 'AI / LLM', 'Backend', 'Full Stack']
const filterMap: Record<string, string> = {
  'AI / LLM': 'ai',
  'Backend': 'backend',
  'Full Stack': 'fullstack',
}

export default function WorkPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(filterMap[active]))

  return (
    <main className="bg-bg min-h-screen">

      {/* ── PAGE HERO ── */}
      <div className="max-w-[1160px] mx-auto px-14 pt-40 pb-24 border-b border-white/[0.07]">
        <span className="block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/42 mb-5">Projects</span>
        <h1 className="font-syne font-black text-white leading-[0.88] tracking-[-0.06em]"
          style={{ fontSize: 'clamp(3rem,7vw,7rem)' }}>
          What I&apos;ve<br />Built
        </h1>
        <p className="text-[0.95rem] text-white/62 font-light leading-[1.78] max-w-[480px] mt-6">
          Production AI applications, backend systems & full-stack products — built and shipped.
        </p>
      </div>

      {/* ── FILTERS ── */}
      <div className="max-w-[1160px] mx-auto px-14 pt-8 flex gap-2 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-[0.68rem] font-bold tracking-[0.09em] uppercase px-4 py-[0.36rem] border transition-all ${
              active === f
                ? 'bg-white text-black border-white'
                : 'border-white/[0.06] text-white/25 hover:bg-white hover:text-black hover:border-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── WORK LIST ── */}
      <div className="max-w-[1160px] mx-auto px-14 pt-12 pb-28">
        <div className="flex flex-col">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group grid gap-8 py-8 border-b border-white/[0.05] first:border-t cursor-pointer hover:px-6 hover:-mx-6 transition-all"
              style={{ gridTemplateColumns: '52px 1fr 88px', transition: 'all 0.25s' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = 'rgba(255,255,255,0.04)'
                el.style.backdropFilter = 'blur(12px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = ''
                el.style.backdropFilter = ''
              }}
            >
              {/* Number */}
              <div className="font-syne font-black text-[1.1rem] text-white/10 tracking-[-0.04em] leading-none mt-1">
                {p.id}
              </div>

              {/* Info */}
              <div>
                <h3 className="font-syne font-bold text-white text-[1.12rem] tracking-[-0.03em] mb-2">{p.title}</h3>
                <p className="text-[0.8rem] text-white/58 font-light leading-[1.62] mb-4">{p.longDesc}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.techFull.map((t) => (
                    <span key={t} className="text-[0.58rem] font-bold tracking-[0.08em] uppercase text-white/45 border border-white/[0.14] px-2 py-[0.14rem]">{t}</span>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div className="text-right">
                <div className="text-[0.67rem] text-white/18 font-semibold tracking-[0.07em] uppercase">{p.year}</div>
                <span className="block mt-2 text-[0.95rem] text-white/18 group-hover:text-white group-hover:rotate-[-45deg] transition-all origin-center">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="border-t border-white/[0.06] py-16 px-14 flex items-center justify-between max-w-[1160px] mx-auto">
        <div>
          <h2 className="font-syne font-black text-white text-[2rem] tracking-[-0.04em] mb-2">Have a project in mind?</h2>
          <p className="text-white/28 text-[0.88rem] font-light">Let&apos;s build something together.</p>
        </div>
        <Link href="/contact"
          className="px-8 py-3 bg-white text-black font-grotesk font-bold text-[0.88rem] hover:bg-white/90 hover:-translate-y-0.5 transition-all">
          Start a Conversation →
        </Link>
      </div>

      <Footer />
    </main>
  )
}
