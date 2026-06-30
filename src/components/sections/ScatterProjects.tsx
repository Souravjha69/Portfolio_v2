'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/data'

const CONFIGS = [
  { gradient: 'linear-gradient(135deg, #020916 0%, #0a1f54 55%, #1e3a8a 100%)', accent: '#60a5fa', x:  0.44, y: -0.26, rot:  -9, scale: 0.32 },
  { gradient: 'linear-gradient(135deg, #0d0117 0%, #2e1065 55%, #4c1d95 100%)', accent: '#a78bfa', x: -0.50, y:  0.40, rot:  13, scale: 0.28 },
  { gradient: 'linear-gradient(135deg, #011208 0%, #022c1a 55%, #065f46 100%)', accent: '#34d399', x:  0.24, y: -0.50, rot: -15, scale: 0.35 },
  { gradient: 'linear-gradient(135deg, #0f0800 0%, #3d1a00 55%, #7c2d12 100%)', accent: '#fbbf24', x: -0.36, y: -0.20, rot:  11, scale: 0.30 },
]

/* ── per-project decorative UI mockups ── */

function CodeEditorMockup({ accent }: { accent: string }) {
  const lines = [
    { tokens: [{ t: 'import', c: '#7dd3fc' }, { t: ' { OpenAI }', c: 'rgba(255,255,255,0.5)' }, { t: " from 'openai'", c: '#86efac' }] },
    { tokens: [{ t: 'const', c: '#7dd3fc' }, { t: ' res = ', c: 'rgba(255,255,255,0.5)' }, { t: 'await', c: '#c4b5fd' }, { t: ' llm.review(code)', c: 'rgba(255,255,255,0.45)' }] },
    { tokens: [{ t: '// accuracy: ', c: 'rgba(255,255,255,0.22)' }, { t: '94.2 %', c: '#86efac' }] },
    { tokens: [{ t: '// guardrails: ', c: 'rgba(255,255,255,0.22)' }, { t: 'active ✓', c: accent }] },
  ]
  return (
    <div className="w-full max-w-[260px] lg:max-w-[310px] rounded-lg overflow-hidden"
         style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)' }}>
      {/* window chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        {['#f87171','#fbbf24','#86efac'].map(c => (
          <div key={c} className="w-2 h-2 rounded-full" style={{ background: c, opacity: 0.7 }} />
        ))}
        <span className="ml-2 text-[0.5rem] font-mono" style={{ color: 'rgba(255,255,255,0.22)' }}>code-reviewer.ts</span>
      </div>
      {/* code body */}
      <div className="px-3 py-3 space-y-[5px] font-mono text-[0.55rem] lg:text-[0.6rem]">
        {lines.map((line, li) => (
          <div key={li} className="flex flex-wrap">
            {line.tokens.map((tok, ti) => (
              <span key={ti} style={{ color: tok.c }}>{tok.t}</span>
            ))}
          </div>
        ))}
      </div>
      {/* status bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.3)' }}>
        <span className="text-[0.48rem] font-mono" style={{ color: 'rgba(255,255,255,0.18)' }}>eval framework • TypeScript</span>
        <span className="text-[0.48rem] font-bold" style={{ color: accent }}>● live</span>
      </div>
    </div>
  )
}

function ResumeScoreMockup({ accent }: { accent: string }) {
  const dims = [
    { label: 'Keyword Match', pct: 60 },
    { label: 'Key Sections',  pct: 80 },
    { label: 'Action Verbs',  pct: 67 },
  ]
  const found   = ['React 19', 'FastAPI', 'TF-IDF']
  const missing = ['Docker']
  return (
    <div className="w-full max-w-[240px] lg:max-w-[290px] rounded-lg overflow-hidden"
         style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)' }}>
      {/* header */}
      <div className="flex items-center justify-between px-3 py-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <span className="text-[0.5rem] font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>ATS Score</span>
        <span className="text-[0.7rem] font-black" style={{ color: accent }}>76<span className="text-[0.5rem] font-normal" style={{ color: 'rgba(255,255,255,0.3)' }}>/100</span></span>
      </div>
      {/* score bars */}
      <div className="px-3 py-3 space-y-2">
        {dims.map(d => (
          <div key={d.label}>
            <div className="flex justify-between text-[0.46rem] mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <span>{d.label}</span><span>{d.pct}%</span>
            </div>
            <div className="h-[3px] rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <div className="h-full rounded-full" style={{ width: `${d.pct}%`, background: accent }} />
            </div>
          </div>
        ))}
      </div>
      {/* keyword chips */}
      <div className="px-3 pb-3 flex flex-wrap gap-1">
        {found.map(k => (
          <span key={k} className="text-[0.44rem] font-semibold px-1.5 py-0.5 rounded" style={{ background: accent + '22', color: accent }}>{k}</span>
        ))}
        {missing.map(k => (
          <span key={k} className="text-[0.44rem] font-semibold px-1.5 py-0.5 rounded line-through" style={{ background: 'rgba(248,113,113,0.12)', color: '#f87171' }}>{k}</span>
        ))}
      </div>
      {/* footer */}
      <div className="flex items-center justify-between px-3 py-1.5 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.3)' }}>
        <span className="text-[0.48rem] font-mono" style={{ color: 'rgba(255,255,255,0.18)' }}>scikit-learn · 100% local</span>
        <span className="text-[0.48rem] font-bold" style={{ color: accent }}>JD 82%</span>
      </div>
    </div>
  )
}

function PaymentMockup({ accent }: { accent: string }) {
  const txns = [
    { id: 'TX-8421', label: 'Stripe capture',    amt: '$2,847.00', ok: true  },
    { id: 'TX-8422', label: 'Refund processed',  amt: '−$482.50',  ok: true  },
    { id: 'TX-8423', label: 'Auth verification', amt: '$1,203.00', ok: false },
  ]
  return (
    <div className="w-full max-w-[260px] lg:max-w-[300px] space-y-[6px]">
      {/* card header */}
      <div className="rounded-lg px-3 py-2.5 mb-1"
           style={{ background: 'rgba(0,0,0,0.38)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[0.5rem] font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>Payment Gateway</span>
          <span className="text-[0.48rem] font-bold px-1.5 py-0.5 rounded" style={{ background: accent + '22', color: accent }}>✓ Secure</span>
        </div>
        <div className="text-[0.88rem] font-bold font-mono" style={{ color: 'rgba(255,255,255,0.7)' }}>$4,567.50</div>
        <div className="text-[0.46rem]" style={{ color: 'rgba(255,255,255,0.22)' }}>total processed today</div>
      </div>
      {/* transaction list */}
      {txns.map(tx => (
        <div key={tx.id} className="flex items-center gap-2.5 px-3 py-2 rounded"
             style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}>
          <div className="w-5 h-5 rounded-full grid place-items-center flex-shrink-0 text-[0.55rem]"
               style={{ background: tx.ok ? accent + '20' : 'rgba(251,191,36,0.15)', color: tx.ok ? accent : '#fbbf24' }}>
            {tx.ok ? '✓' : '⟳'}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[0.52rem] truncate" style={{ color: 'rgba(255,255,255,0.45)' }}>{tx.label}</div>
            <div className="text-[0.45rem] font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>{tx.id}</div>
          </div>
          <div className="text-[0.55rem] font-bold font-mono" style={{ color: tx.ok ? 'rgba(255,255,255,0.6)' : 'rgba(251,191,36,0.7)' }}>{tx.amt}</div>
        </div>
      ))}
    </div>
  )
}

function APIMockup({ accent }: { accent: string }) {
  const routes = [
    { m: 'GET',   path: '/api/users',      ms: '42ms',  status: 200 },
    { m: 'POST',  path: '/api/auth/login', ms: '118ms', status: 201 },
    { m: 'PUT',   path: '/api/workflow',   ms: '67ms',  status: 200 },
    { m: 'GET',   path: '/api/ai/analyze', ms: '284ms', status: 200 },
  ]
  const methodColor: Record<string, string> = { GET: '#60a5fa', POST: '#86efac', PUT: '#fbbf24', DELETE: '#f87171' }
  return (
    <div className="w-full max-w-[270px] lg:max-w-[310px]">
      <div className="rounded-lg overflow-hidden"
           style={{ background: 'rgba(0,0,0,0.40)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
        {/* header */}
        <div className="px-3 py-2 border-b flex items-center justify-between"
             style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(0,0,0,0.2)' }}>
          <span className="text-[0.5rem] font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>REST API · CyberSigma</span>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 5px ${accent}` }} />
        </div>
        {/* routes */}
        {routes.map((r, i) => (
          <div key={i} className="flex items-center gap-2.5 px-3 py-[7px] border-b last:border-0"
               style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <span className="text-[0.5rem] font-black w-7 flex-shrink-0" style={{ color: methodColor[r.m] }}>{r.m}</span>
            <span className="flex-1 text-[0.55rem] font-mono truncate" style={{ color: 'rgba(255,255,255,0.38)' }}>{r.path}</span>
            <span className="text-[0.45rem] font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>{r.ms}</span>
            <span className="text-[0.48rem] font-bold" style={{ color: accent }}>{r.status}</span>
          </div>
        ))}
        {/* footer */}
        <div className="px-3 py-1.5 border-t flex justify-between"
             style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}>
          <span className="text-[0.44rem] font-mono" style={{ color: 'rgba(255,255,255,0.18)' }}>Node.js · Docker · CI/CD</span>
          <span className="text-[0.44rem]" style={{ color: accent + '80' }}>4 routes · 100 % uptime</span>
        </div>
      </div>
    </div>
  )
}

const VISUALS = [CodeEditorMockup, ResumeScoreMockup, PaymentMockup, APIMockup]

const FEATURED_IDS = ['01', '06', '03', '04']

export default function ScatterProjects() {
  const sectionRef  = useRef<HTMLElement>(null)
  const tilesRef    = useRef<(HTMLDivElement | null)[]>([])
  const overlayRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.innerWidth < 768) {
      if (overlayRef.current) overlayRef.current.style.opacity = '1'
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any = null

    const init = async () => {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const vw = window.innerWidth
      const vh = window.innerHeight

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end:   '+=200%',
            scrub: 2,
          },
        })

        tilesRef.current.forEach((tile, i) => {
          if (!tile) return
          const c = CONFIGS[i]
          tl.from(tile, {
            x: c.x * vw, y: c.y * vh,
            rotation: c.rot, scale: c.scale,
            ease: 'power1.inOut', duration: 0.65,
          }, i * 0.05)
        })

        tl.to(overlayRef.current, { opacity: 1, duration: 0.15 }, 0.75)
      })
    }

    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section ref={sectionRef} className="scatter-section" aria-label="Selected projects">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">

        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2" style={{ gap: '2px' }}>
          {FEATURED_IDS.map((id, i) => {
            const p = projects.find(proj => proj.id === id)!
            const cfg     = CONFIGS[i]
            const Visual  = VISUALS[i]
            return (
              <div
                key={p.id}
                ref={el => { tilesRef.current[i] = el }}
                className="relative overflow-hidden flex flex-col justify-end p-6 sm:p-8 lg:p-10 will-change-transform"
                style={{ background: cfg.gradient }}
              >
                {/* accent glow */}
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[90px] opacity-25 pointer-events-none"
                     style={{ background: cfg.accent }} />

                {/* project number */}
                <span className="absolute top-5 left-6 text-[0.5rem] font-bold tracking-[0.22em] uppercase"
                      style={{ color: 'rgba(255,255,255,0.15)' }}>
                  {p.id}
                </span>

                {/* ── UI MOCKUP — centred in the upper portion ── */}
                <div className="absolute inset-x-0 top-[12%] flex justify-center items-start px-5 sm:px-8 pointer-events-none">
                  <Visual accent={cfg.accent} />
                </div>

                {/* tag + title at bottom */}
                <div className="relative z-10">
                  <div className="text-[0.52rem] sm:text-[0.56rem] font-bold tracking-[0.18em] uppercase mb-1.5"
                       style={{ color: cfg.accent + 'bb' }}>
                    {p.tags[0]}
                  </div>
                  <h3 className="font-syne font-black text-white leading-tight tracking-[-0.03em]"
                      style={{ fontSize: 'clamp(0.82rem, 1.5vw, 1.55rem)' }}>
                    {p.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>

        {/* center overlay */}
        <div ref={overlayRef}
             className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
             style={{ opacity: 0 }}>
          <div className="pointer-events-auto text-center">
            <p className="text-[0.48rem] font-bold tracking-[0.32em] uppercase mb-4"
               style={{ color: 'rgba(255,255,255,0.20)' }}>
              Selected Projects
            </p>
            <Link href="/work"
              className="inline-block text-[0.65rem] font-bold tracking-[0.1em] uppercase px-5 py-2 transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.10)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#fff'; el.style.borderColor = 'rgba(255,255,255,0.32)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'rgba(255,255,255,0.35)'; el.style.borderColor = 'rgba(255,255,255,0.10)' }}
            >
              View All Work ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
