import type { Metadata } from 'next'
import Link from 'next/link'
import { timeline, values } from '@/lib/data'
import { Footer } from '@/components/sections/HomeSections'

export const metadata: Metadata = {
  title: 'My Story — Sourav Kumar Jha',
  description: 'From Chandigarh to Philadelphia — the journey of an engineer obsessed with making AI practical, scalable & production-ready.',
}

export default function AboutPage() {
  return (
    <main className="bg-bg min-h-screen">

      {/* ── PAGE HERO ── */}
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-14 pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 border-b border-white/[0.12]">
        <span className="block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/42 mb-5">My Story</span>
        <h1
          className="font-syne font-black text-white leading-[0.88] tracking-[-0.06em]"
          style={{ fontSize: 'clamp(2.8rem,7vw,7rem)' }}
        >
          Building AI<br />
          <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)', color: 'transparent' }}>Systems</span><br />
          That Scale
        </h1>
        <p className="text-[0.88rem] sm:text-[0.95rem] text-white/62 font-light leading-[1.78] max-w-[480px] mt-6">
          From Chandigarh to Philadelphia — the journey of an engineer obsessed with making AI practical, scalable &amp; production-ready.
        </p>
      </div>

      {/* ── TIMELINE ── */}
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24 border-b border-white/[0.12]">
        <div className="font-syne font-black text-white text-[1.2rem] sm:text-[1.4rem] tracking-[-0.03em] mb-8 sm:mb-10">
          Professional Timeline
        </div>
        <div className="flex flex-col">
          {timeline.map((t, i) => (
            <div
              key={i}
              className="grid gap-5 sm:gap-8 py-6 sm:py-8 border-b border-white/[0.05] group hover:bg-white/[0.025] transition-colors px-2 sm:px-0 rounded"
              style={{ gridTemplateColumns: 'clamp(56px,12vw,88px) 1fr' }}
            >
              <div className="font-syne font-black text-[1.2rem] sm:text-[1.5rem] text-white/7 tracking-[-0.04em] leading-none group-hover:text-white/40 transition-colors">
                {t.year}
              </div>
              <div>
                <div className="font-syne font-bold text-white text-[0.95rem] sm:text-[1rem] mb-[0.22rem]">{t.company}</div>
                <div className="text-[0.72rem] sm:text-[0.75rem] text-white/58 mb-2 sm:mb-3 font-normal">{t.role}</div>
                <div className="text-[0.78rem] sm:text-[0.8rem] text-white/55 font-light leading-[1.7]">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── VALUES ── */}
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24">
        <div className="font-syne font-black text-white text-[1.2rem] sm:text-[1.4rem] tracking-[-0.03em] mb-8 sm:mb-10">
          What I Stand For
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.10] border border-white/[0.10]">
          {values.map((v) => (
            <div key={v.title} className="glass-panel p-7 sm:p-10">
              <div className="text-[1.4rem] sm:text-[1.5rem] mb-4">{v.icon}</div>
              <h3 className="font-syne font-black text-white text-[0.95rem] sm:text-[0.98rem] mb-2">{v.title}</h3>
              <p className="text-[0.78rem] sm:text-[0.8rem] text-white/55 font-light leading-[1.7]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="border-t border-white/[0.06] py-12 sm:py-16 px-5 sm:px-8 lg:px-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0 max-w-[1160px] mx-auto">
        <div>
          <h2 className="font-syne font-black text-white text-[1.6rem] sm:text-[2rem] tracking-[-0.04em] mb-2">Want to work together?</h2>
          <p className="text-white/58 text-[0.85rem] sm:text-[0.88rem] font-light">Open to full-time roles and freelance projects.</p>
        </div>
        <Link
          href="/contact"
          className="px-7 sm:px-8 py-3 bg-white text-black font-grotesk font-bold text-[0.85rem] sm:text-[0.88rem] hover:bg-white/90 hover:-translate-y-0.5 transition-all flex-shrink-0"
        >
          Get In Touch →
        </Link>
      </div>

      <Footer />
    </main>
  )
}
