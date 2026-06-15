'use client'
import { useState } from 'react'
import { faq, availability, personal } from '@/lib/data'
import { Footer } from '@/components/sections/HomeSections'

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const statusColor = {
    available: 'bg-green/10 text-green/80 border border-green/18',
    half: 'bg-amber/10 text-amber/80 border border-amber/15',
    closed: 'bg-red-500/10 text-red-400/80 border border-red-500/15',
  }
  const statusLabel = { available: 'Available', half: 'Half Day', closed: 'Closed' }

  return (
    <main className="bg-bg min-h-screen text-white">

      {/* ── HERO ── */}
      <div className="max-w-[1160px] mx-auto px-14 pt-40 pb-24 border-b border-white/[0.12] grid grid-cols-2 gap-20 items-end">
        <div>
          <span className="block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/42 mb-5">Get In Touch</span>
          <h1 className="font-syne font-black text-white leading-[0.88] tracking-[-0.06em]"
            style={{ fontSize: 'clamp(3rem,7vw,7rem)' }}>
            Let&apos;s build<br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)', color: 'transparent' }}>something</span><br />
            real.
          </h1>
        </div>
        <div>
          <p className="text-[0.92rem] text-white/62 font-light leading-[1.75] mb-8">
            Open to full-time roles, internships & freelance AI/full-stack projects. I respond personally within a few hours.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { icon: '📧', label: 'Email', val: personal.email },
              { icon: '📍', label: 'Location', val: `${personal.location} · EST (UTC−5)` },
              { icon: '📞', label: 'Phone', val: personal.phone },
              { icon: '⚡', label: 'Status', val: personal.status },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-4 px-5 py-4 glass-card">
                <span className="text-[0.95rem] w-6 flex-shrink-0">{r.icon}</span>
                <div>
                  <div className="text-[0.6rem] font-bold tracking-[0.1em] uppercase text-white/45 mb-[0.1rem]">{r.label}</div>
                  <div className="text-[0.84rem] text-white">{r.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FORM ── */}
      <div className="max-w-[1160px] mx-auto px-14 py-24 grid grid-cols-[1fr_1.4fr] gap-24 border-b border-white/[0.12]">
        {/* Left sticky */}
        <div className="sticky top-24 self-start">
          <span className="block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/18 mb-3">Send a Message</span>
          <h2 className="font-syne font-black text-white text-[1.9rem] tracking-[-0.04em] leading-[1.08] mb-4">
            Tell me about your project
          </h2>
          <p className="text-[0.84rem] text-white/58 font-light leading-[1.72] mb-7">
            Describe what you&apos;re building, your timeline &amp; budget. I read every message personally &amp; reply fast.
          </p>
          <div className="flex items-center gap-2 text-[0.7rem] text-white/25">
            <span className="w-[7px] h-[7px] rounded-full bg-green animate-pulse-dot flex-shrink-0" />
            Responding within 4–6 hours today
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); alert('Message sent! I will get back to you soon.') }}>
          <div className="flex gap-3">
            <input className="w-full px-4 py-[0.8rem] bg-white/[0.05] border border-white/[0.1] text-white font-grotesk text-[0.86rem] outline-none focus:border-white/25 focus:bg-white/[0.08] transition-all placeholder:text-white/20 backdrop-blur-sm" type="text" placeholder="Your Full Name" required />
            <input className="w-full px-4 py-[0.8rem] bg-white/[0.05] border border-white/[0.1] text-white font-grotesk text-[0.86rem] outline-none focus:border-white/25 focus:bg-white/[0.08] transition-all placeholder:text-white/20 backdrop-blur-sm" type="email" placeholder="Email Address" required />
          </div>
          <input className="w-full px-4 py-[0.8rem] bg-white/[0.05] border border-white/[0.1] text-white font-grotesk text-[0.86rem] outline-none focus:border-white/25 focus:bg-white/[0.08] transition-all placeholder:text-white/20 backdrop-blur-sm" type="text" placeholder="Company / Organization (optional)" />
          <select className="w-full px-4 py-[0.8rem] bg-white/[0.05] border border-white/[0.1] text-white font-grotesk text-[0.86rem] outline-none focus:border-white/25 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer backdrop-blur-sm" defaultValue="">
            <option value="" disabled className="bg-g2">Project Type</option>
            {['AI / LLM Integration', 'Full Stack Web App', 'Backend / API', 'ML Consulting', 'Other'].map((o) => (
              <option key={o} value={o} className="bg-g2">{o}</option>
            ))}
          </select>
          <div className="flex gap-3">
            <select className="w-full px-4 py-[0.8rem] bg-white/[0.05] border border-white/[0.1] text-white font-grotesk text-[0.86rem] outline-none focus:border-white/25 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer backdrop-blur-sm" defaultValue="">
              <option value="" disabled className="bg-g2">Budget</option>
              {['Under $5k', '$5k–$15k', '$15k–$50k', '$50k+', "Let's discuss"].map((o) => (
                <option key={o} value={o} className="bg-g2">{o}</option>
              ))}
            </select>
            <select className="w-full px-4 py-[0.8rem] bg-white/[0.05] border border-white/[0.1] text-white font-grotesk text-[0.86rem] outline-none focus:border-white/25 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer backdrop-blur-sm" defaultValue="">
              <option value="" disabled className="bg-g2">Timeline</option>
              {['ASAP', '1–4 weeks', '1–3 months', '3–6 months'].map((o) => (
                <option key={o} value={o} className="bg-g2">{o}</option>
              ))}
            </select>
          </div>
          <textarea
            className="w-full px-4 py-[0.8rem] bg-white/[0.05] border border-white/[0.1] text-white font-grotesk text-[0.86rem] outline-none focus:border-white/25 focus:bg-white/[0.08] transition-all placeholder:text-white/20 backdrop-blur-sm resize-y min-h-[130px]"
            placeholder="Describe your project..."
          />
          <button type="submit"
            className="self-start px-8 py-[0.82rem] bg-white text-black border border-white font-grotesk font-bold text-[0.86rem] hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.1)] transition-all">
            Send Message →
          </button>
        </form>
      </div>

      {/* ── MAP ── */}
      <div className="max-w-[1160px] mx-auto px-14 pb-20">
        <span className="block text-[0.62rem] font-bold tracking-[0.16em] uppercase text-white/18 pt-16 mb-5">Based in Philadelphia, PA</span>
        <div className="border border-white/[0.07] h-[360px] relative overflow-hidden bg-bg2">
          <svg className="w-full h-full opacity-[0.08]" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.15)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
            <g fill="rgba(255,255,255,0.5)">
              <ellipse cx="220" cy="180" rx="115" ry="95" />
              <ellipse cx="178" cy="255" rx="58" ry="38" />
              <ellipse cx="278" cy="338" rx="58" ry="88" />
              <ellipse cx="548" cy="148" rx="58" ry="53" />
              <ellipse cx="568" cy="288" rx="68" ry="98" />
              <ellipse cx="818" cy="168" rx="175" ry="108" />
              <ellipse cx="948" cy="355" rx="68" ry="48" />
            </g>
          </svg>
          {/* Pin — Philadelphia ~26% left, 34% top */}
          <div className="absolute top-[34%] left-[27%] -translate-x-1/2 -translate-y-1/2">
            <div className="w-[18px] h-[18px] rounded-full border border-white/15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ring-pulse" />
            <div className="w-[18px] h-[18px] rounded-full border border-white/15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ring-pulse" style={{ animationDelay: '0.85s' }} />
            <div className="w-[10px] h-[10px] rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_0_3px_rgba(255,255,255,0.12)]" />
          </div>
          {/* Callout */}
          <div className="absolute top-[18%] left-[29%] bg-bg/92 border border-white/10 px-5 py-3 backdrop-blur-md">
            <div className="font-syne font-bold text-white text-[0.9rem]">Philadelphia, PA</div>
            <div className="text-[0.65rem] text-white/28 mt-[0.15rem]">EST · UTC−5 · Available globally</div>
          </div>
        </div>
      </div>

      {/* ── AVAILABILITY ── */}
      <div className="max-w-[1160px] mx-auto px-14 py-20 grid grid-cols-2 gap-20 border-t border-white/[0.07] border-b">
        <div>
          <span className="block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/18 mb-3">Availability</span>
          <h2 className="font-syne font-black text-white text-[1.9rem] tracking-[-0.04em] mb-3">When I&apos;m free</h2>
          <p className="text-[0.83rem] text-white/58 font-light leading-[1.7] mb-7">
            Working hours 9am–7pm EST. Currently open to new opportunities — available immediately.
          </p>
          <div className="flex items-center gap-4 px-5 py-4 glass-card">
            <span className="text-[1.1rem]">📅</span>
            <div>
              <div className="text-[0.6rem] font-bold tracking-[0.1em] uppercase text-white/20 mb-[0.15rem]">Next Slot</div>
              <div className="text-white text-[0.84rem]">Immediately · Taking enquiries now</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {availability.map((a) => (
            <div key={a.day} className="flex items-center justify-between px-5 py-3 glass-card">
              <span className="text-[0.76rem] text-white/62">{a.day}</span>
              <span className={`text-[0.58rem] font-bold tracking-[0.08em] uppercase px-[0.6rem] py-[0.18rem] ${statusColor[a.status]}`}>
                {statusLabel[a.status]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="max-w-[800px] mx-auto px-14 py-20">
        <span className="block text-[0.63rem] font-bold tracking-[0.18em] uppercase text-white/18 mb-3">FAQ</span>
        <h2 className="font-syne font-black text-white text-[2rem] tracking-[-0.04em] mb-8">Common Questions</h2>
        <div className="flex flex-col">
          {faq.map((f, i) => (
            <div key={i} className="border-b border-white/[0.06]">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 text-[0.88rem] font-medium transition-colors"
                style={{ color: openFaq === i ? 'white' : 'rgba(255,255,255,0.38)' }}
              >
                {f.q}
                <span className="text-[0.82rem] flex-shrink-0 transition-transform duration-300 origin-center"
                  style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)', color: openFaq === i ? 'white' : 'rgba(255,255,255,0.18)' }}>
                  +
                </span>
              </button>
              <div className="overflow-hidden transition-all duration-[380ms]"
                style={{ maxHeight: openFaq === i ? '160px' : '0' }}>
                <p className="pb-5 text-[0.8rem] text-white/25 font-light leading-[1.8]">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SOCIALS ── */}
      <div className="max-w-[1160px] mx-auto px-14 py-14 flex items-center justify-between border-t border-white/[0.07]">
        <div className="font-syne font-black text-white text-[1.3rem] tracking-[-0.03em]">Find me online</div>
        <div className="flex gap-2">
          {[
            { label: 'LinkedIn', href: personal.linkedin },
            { label: 'GitHub', href: personal.github },
            { label: 'Email', href: `mailto:${personal.email}` },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              className="px-5 py-2 border border-white/10 text-white/32 text-[0.73rem] font-medium hover:border-white/30 hover:text-white hover:bg-white/[0.04] transition-all">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
