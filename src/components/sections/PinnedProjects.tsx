'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/data'

const PANEL_STYLES = [
  { bg: 'linear-gradient(135deg, #020916 0%, #0a1f54 50%, #1e3a8a 100%)', accent: '#60a5fa' },
  { bg: 'linear-gradient(135deg, #0d0117 0%, #2e1065 50%, #4c1d95 100%)', accent: '#a78bfa' },
  { bg: 'linear-gradient(135deg, #011208 0%, #022c1a 50%, #065f46 100%)', accent: '#34d399' },
  { bg: 'linear-gradient(135deg, #0f0800 0%, #3d1a00 50%, #7c2d12 100%)', accent: '#fbbf24' },
]

/* ── Large panel UI mockups (right-side floaters) ── */

function LargeCodeEditor({ accent }: { accent: string }) {
  const lines = [
    [{ t: 'import', c: '#7dd3fc' }, { t: " { OpenAI } from 'openai'", c: '#86efac' }],
    [],
    [{ t: 'const', c: '#7dd3fc' }, { t: ' reviewer = ', c: 'rgba(255,255,255,0.45)' }, { t: 'new', c: '#c4b5fd' }, { t: ' CodeReviewer()', c: 'rgba(255,255,255,0.45)' }],
    [{ t: 'const', c: '#7dd3fc' }, { t: ' result  = ', c: 'rgba(255,255,255,0.45)' }, { t: 'await', c: '#c4b5fd' }, { t: ' reviewer.analyze(pr)', c: 'rgba(255,255,255,0.45)' }],
    [],
    [{ t: '// eval score:  ', c: 'rgba(255,255,255,0.2)' }, { t: '94.2 %', c: '#86efac' }],
    [{ t: '// guardrails:  ', c: 'rgba(255,255,255,0.2)' }, { t: 'active', c: accent }],
    [{ t: '// latency:     ', c: 'rgba(255,255,255,0.2)' }, { t: '280 ms ✓', c: accent }],
  ]
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-2xl"
         style={{ background: 'rgba(5,10,25,0.75)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(20px)' }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        {['#f87171','#fbbf24','#86efac'].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.7 }} />)}
        <span className="ml-2 font-mono text-[0.58rem]" style={{ color: 'rgba(255,255,255,0.25)' }}>code-reviewer.ts</span>
        <span className="ml-auto font-mono text-[0.52rem] px-2 py-0.5 rounded" style={{ background: accent + '20', color: accent }}>● live</span>
      </div>
      <div className="px-5 py-4 font-mono space-y-[6px] text-[0.65rem]">
        {lines.map((toks, li) => (
          <div key={li} className="flex flex-wrap" style={{ minHeight: toks.length === 0 ? '8px' : undefined }}>
            {toks.map((tok, ti) => <span key={ti} style={{ color: tok.c }}>{tok.t}</span>)}
          </div>
        ))}
      </div>
      <div className="px-4 py-2 border-t flex justify-between" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.3)' }}>
        <span className="text-[0.52rem] font-mono" style={{ color: 'rgba(255,255,255,0.18)' }}>TypeScript · OpenAI API · MERN</span>
        <span className="text-[0.52rem]" style={{ color: accent }}>eval framework active</span>
      </div>
    </div>
  )
}

function LargeChat({ accent }: { accent: string }) {
  const msgs = [
    { role: 'user', text: 'Explain how the auth middleware works' },
    { role: 'ai',   text: "The auth middleware validates JWT tokens on each request, checking expiry and signature before passing to the route handler." },
    { role: 'user', text: 'Can you also add rate limiting?' },
    { role: 'ai',   text: "Absolutely — I'll integrate express-rate-limit with Redis-backed storage for distributed rate limiting across instances." },
  ]
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-2xl"
         style={{ background: 'rgba(8,4,20,0.75)', border: '1px solid rgba(255,255,255,0.09)', backdropFilter: 'blur(20px)' }}>
      {/* header */}
      <div className="px-4 py-3 border-b flex items-center gap-2.5" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="w-7 h-7 rounded-full grid place-items-center text-[0.55rem] font-black"
             style={{ background: accent + '25', border: `1px solid ${accent}40`, color: accent }}>AI</div>
        <div>
          <div className="text-[0.6rem] font-semibold" style={{ color: 'rgba(255,255,255,0.65)' }}>Virtual AI Assistant</div>
          <div className="text-[0.48rem]" style={{ color: accent }}>● online · LLM-powered</div>
        </div>
      </div>
      {/* messages */}
      <div className="px-4 py-4 space-y-3">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'gap-2 items-end'}`}>
            {m.role === 'ai' && (
              <div className="w-5 h-5 rounded-full flex-shrink-0 grid place-items-center text-[0.4rem] font-black"
                   style={{ background: accent + '22', color: accent }}>AI</div>
            )}
            <div className="text-[0.58rem] leading-relaxed max-w-[82%] px-3 py-2 rounded-2xl"
                 style={m.role === 'user'
                   ? { background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.65)', borderRadius: '16px 16px 4px 16px' }
                   : { background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)', borderRadius: '4px 16px 16px 16px' }
                 }>
              {m.text}
            </div>
          </div>
        ))}
        {/* typing */}
        <div className="flex items-center gap-2 pl-7">
          <div className="flex gap-1">
            {[0,1,2].map(d => (
              <div key={d} className="w-[5px] h-[5px] rounded-full animate-pulse"
                   style={{ background: accent + '55', animationDelay: `${d * 0.18}s` }} />
            ))}
          </div>
          <span className="text-[0.47rem]" style={{ color: 'rgba(255,255,255,0.2)' }}>Generating response…</span>
        </div>
      </div>
    </div>
  )
}

function LargePayment({ accent }: { accent: string }) {
  const txns = [
    { id: 'TX-8421', label: 'Stripe capture',       amt: '$2,847.00',  ms: '124ms', ok: true  },
    { id: 'TX-8422', label: 'Webhook processed',    amt: '+$682.00',   ms: '88ms',  ok: true  },
    { id: 'TX-8423', label: 'Refund initiated',     amt: '−$482.50',   ms: '92ms',  ok: true  },
    { id: 'TX-8424', label: 'Auth verification',    amt: '$1,203.00',  ms: '—',     ok: false },
  ]
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-2xl"
         style={{ background: 'rgba(2,12,6,0.75)', border: '1px solid rgba(255,255,255,0.09)', backdropFilter: 'blur(20px)' }}>
      {/* summary card */}
      <div className="px-5 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[0.52rem] font-bold tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.22)' }}>Total Processed</div>
            <div className="text-[1.6rem] font-black font-mono leading-none" style={{ color: 'rgba(255,255,255,0.82)' }}>$5,249.50</div>
            <div className="text-[0.5rem] mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>4 transactions · today</div>
          </div>
          <div className="px-2 py-1 rounded text-[0.5rem] font-bold" style={{ background: accent + '20', color: accent, border: `1px solid ${accent}35` }}>
            ✓ PCI-DSS
          </div>
        </div>
      </div>
      {/* transaction list */}
      <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        {txns.map(tx => (
          <div key={tx.id} className="flex items-center gap-3 px-5 py-2.5">
            <div className="w-6 h-6 rounded-full grid place-items-center flex-shrink-0 text-[0.55rem] font-bold"
                 style={{ background: tx.ok ? accent + '18' : 'rgba(251,191,36,0.15)', color: tx.ok ? accent : '#fbbf24' }}>
              {tx.ok ? '✓' : '⟳'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[0.56rem]" style={{ color: 'rgba(255,255,255,0.5)' }}>{tx.label}</div>
              <div className="text-[0.46rem] font-mono" style={{ color: 'rgba(255,255,255,0.18)' }}>{tx.id} · {tx.ms}</div>
            </div>
            <div className="text-[0.6rem] font-bold font-mono" style={{ color: tx.ok ? 'rgba(255,255,255,0.65)' : 'rgba(251,191,36,0.7)' }}>{tx.amt}</div>
          </div>
        ))}
      </div>
      <div className="px-5 py-2 border-t flex justify-between" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.25)' }}>
        <span className="text-[0.48rem] font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>Node.js · Express · MongoDB · Audit log</span>
        <span className="text-[0.48rem]" style={{ color: accent }}>100 % uptime</span>
      </div>
    </div>
  )
}

function LargeAPI({ accent }: { accent: string }) {
  const routes = [
    { m: 'GET',    path: '/api/users',          ms: '42ms',  status: 200, note: 'Auth required' },
    { m: 'POST',   path: '/api/auth/login',     ms: '118ms', status: 201, note: 'JWT issued'   },
    { m: 'PUT',    path: '/api/workflow/:id',   ms: '67ms',  status: 200, note: 'Optimistic'   },
    { m: 'GET',    path: '/api/ai/analyze',     ms: '284ms', status: 200, note: 'LLM pipeline' },
    { m: 'DELETE', path: '/api/session/:token', ms: '31ms',  status: 204, note: 'Secure flush'  },
  ]
  const mCol: Record<string, string> = { GET: '#60a5fa', POST: '#86efac', PUT: '#fbbf24', DELETE: '#f87171' }
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-2xl"
         style={{ background: 'rgba(12,6,0,0.75)', border: '1px solid rgba(255,255,255,0.09)', backdropFilter: 'blur(20px)' }}>
      <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <span className="text-[0.58rem] font-bold tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>CyberSigma REST API</span>
        <div className="flex items-center gap-2">
          <span className="text-[0.5rem]" style={{ color: 'rgba(255,255,255,0.2)' }}>v2.4.1</span>
          <span className="w-2 h-2 rounded-full" style={{ background: accent, boxShadow: `0 0 6px ${accent}` }} />
        </div>
      </div>
      <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        {routes.map((r, i) => (
          <div key={i} className="grid px-4 py-2.5 gap-3" style={{ gridTemplateColumns: '36px 1fr 60px 32px' }}>
            <span className="text-[0.52rem] font-black" style={{ color: mCol[r.m] }}>{r.m}</span>
            <div>
              <div className="text-[0.58rem] font-mono" style={{ color: 'rgba(255,255,255,0.42)' }}>{r.path}</div>
              <div className="text-[0.46rem]" style={{ color: 'rgba(255,255,255,0.18)' }}>{r.note}</div>
            </div>
            <span className="text-[0.46rem] font-mono self-center" style={{ color: 'rgba(255,255,255,0.2)' }}>{r.ms}</span>
            <span className="text-[0.52rem] font-bold self-center" style={{ color: accent }}>{r.status}</span>
          </div>
        ))}
      </div>
      <div className="px-4 py-2 border-t flex justify-between" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.25)' }}>
        <span className="text-[0.48rem] font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>Docker · GitHub Actions · CI/CD</span>
        <span className="text-[0.48rem]" style={{ color: accent }}>5 endpoints · HA</span>
      </div>
    </div>
  )
}

const LARGE_VISUALS = [LargeCodeEditor, LargeChat, LargePayment, LargeAPI]

export default function PinnedProjects() {
  const innerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const init = async () => {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      innerRefs.current.forEach((inner, i) => {
        if (!inner || i === 0) return
        gsap.fromTo(inner,
          { scale: 0.91 },
          {
            scale: 1, ease: 'power1.out',
            scrollTrigger: {
              trigger: inner.parentElement,
              start: 'top bottom', end: 'top top', scrub: true,
            },
          }
        )
      })
    }

    init()
  }, [])

  return (
    <div style={{ height: `${projects.length * 100}vh` }}>
      {projects.map((p, i) => {
        const s       = PANEL_STYLES[i]
        const Visual  = LARGE_VISUALS[i]
        return (
          <div key={p.id} className="sticky top-0 h-screen overflow-hidden" style={{ zIndex: i + 1 }}>
            <div ref={el => { innerRefs.current[i] = el }} className="relative w-full h-full will-change-transform">

              {/* Background */}
              <div className="absolute inset-0" style={{ background: s.bg }} />

              {/* Giant faint number */}
              <div className="absolute right-[-0.04em] top-1/2 -translate-y-1/2 font-syne font-black leading-none select-none pointer-events-none"
                   style={{ fontSize: 'clamp(12rem, 28vw, 38rem)', color: 'rgba(255,255,255,0.032)', letterSpacing: '-0.06em' }}>
                {p.id}
              </div>

              {/* Accent glow */}
              <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full blur-[180px] opacity-18 pointer-events-none"
                   style={{ background: s.accent }} />

              {/* ── CONTENT LAYOUT ── */}
              <div className="relative z-10 h-full grid lg:grid-cols-2 gap-8 lg:gap-12 px-8 sm:px-12 lg:px-20 py-10 lg:py-14">

                {/* LEFT: text */}
                <div className="flex flex-col justify-between">
                  {/* top bar */}
                  <div className="flex items-start justify-between">
                    <span className="text-[0.5rem] font-bold tracking-[0.26em] uppercase" style={{ color: 'rgba(255,255,255,0.18)' }}>
                      {p.id} — {String(projects.length).padStart(2, '0')}
                    </span>
                    <div className="flex gap-2 flex-wrap justify-end lg:hidden">
                      {p.tags.map(t => (
                        <span key={t} className="text-[0.48rem] font-bold tracking-[0.1em] uppercase px-2 py-[0.18rem]"
                              style={{ color: s.accent + 'cc', border: `1px solid ${s.accent}30` }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* big title */}
                  <div>
                    <div className="hidden lg:flex gap-2 flex-wrap mb-5">
                      {p.tags.map(t => (
                        <span key={t} className="text-[0.5rem] font-bold tracking-[0.1em] uppercase px-2 py-[0.18rem]"
                              style={{ color: s.accent + 'cc', border: `1px solid ${s.accent}30` }}>{t}</span>
                      ))}
                    </div>
                    <h2 className="font-syne font-black text-white leading-[0.88] tracking-[-0.04em]"
                        style={{ fontSize: 'clamp(2rem, 5vw, 7rem)' }}>
                      {p.title}
                    </h2>
                  </div>

                  {/* bottom: desc + CTA */}
                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start xl:items-end gap-5">
                    <p className="max-w-[340px] text-[0.78rem] sm:text-[0.85rem] font-light leading-[1.78]"
                       style={{ color: 'rgba(255,255,255,0.36)' }}>
                      {p.description}
                    </p>
                    <Link href="/work"
                      className="flex-shrink-0 inline-flex items-center gap-2.5 text-[0.65rem] font-bold tracking-[0.1em] uppercase px-6 py-3 transition-all duration-200 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.40)', border: '1px solid rgba(255,255,255,0.12)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)' }}
                    >
                      View Work <span className="text-[0.85rem]">↗</span>
                    </Link>
                  </div>
                </div>

                {/* RIGHT: floating UI mockup (desktop only) */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-full max-w-[420px]">
                    <Visual accent={s.accent} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
