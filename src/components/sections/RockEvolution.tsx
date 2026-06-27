'use client'
import { useRef, useEffect } from 'react'

// ── Plant geometry constants ──────────────────────────────────────────────────
const STEM_PATH =
  'M 251 612 C 249 528, 243 444, 247 360 C 251 276, 256 196, 252 112 C 251 97, 251 85, 251 76'

const BRANCHES = [
  { path: 'M 248 510 C 210 494, 172 482, 130 468', w: 4.5, lx: 130, ly: 468, lr: 148 },
  { path: 'M 248 484 C 288 466, 326 452, 368 438', w: 4.5, lx: 368, ly: 438, lr:  32 },
  { path: 'M 247 395 C 208 378, 168 363, 122 348', w:   4, lx: 122, ly: 348, lr: 143 },
  { path: 'M 247 370 C 289 350, 330 333, 374 315', w:   4, lx: 374, ly: 315, lr:  37 },
  { path: 'M 248 282 C 208 264, 168 248, 122 233', w: 3.5, lx: 122, ly: 233, lr: 138 },
  { path: 'M 249 257 C 292 237, 333 218, 378 198', w: 3.5, lx: 378, ly: 198, lr:  42 },
  { path: 'M 250 172 C 214 155, 176 137, 138 120', w:   3, lx: 138, ly: 120, lr: 133 },
  { path: 'M 251 148 C 288 128, 325 109, 366 90',  w:   3, lx: 366, ly:  90, lr:  47 },
]

// leaf: bottom at (0,0), tip at (0,-32)
const LEAF   = 'M 0 0 C -14 -8, -18 -24, 0 -32 C 18 -24, 14 -8, 0 0 Z'
const MIDRIB = 'M 0 -1 L 0 -31'
// petal: base at (0,0), tip at (0,-27)
const PETAL  = 'M 0 0 C -6 -9, -8 -20, 0 -27 C 8 -20, 6 -9, 0 0 Z'

const FX = 251, FY = 76  // flower centre in SVG space

const LEAF_COLORS   = ['#4aad28','#3d9220','#52b830','#3e9822','#44a025','#3b8e1e','#4aa527','#40961f']
const PETAL_ANGLES  = [0, 60, 120, 180, 240, 300]
const PETAL_COLORS  = ['#ffd6e8','#ffbbd9','#ffe0ee','#ffcce2','#ffd2e6','#ffbad6']

// Small grass blade positions [angle-from-vertical, x]
const GRASS = [[-30,224],[-18,237],[-8,246],[8,255],[18,264],[30,278],[-42,213],[42,290]] as const

// ── Component ─────────────────────────────────────────────────────────────────
export default function RockEvolution() {
  const sectionRef    = useRef<HTMLDivElement>(null)
  const containerRef  = useRef<HTMLDivElement>(null)
  const stemRef       = useRef<SVGPathElement>(null)
  const branchRefs    = useRef<(SVGPathElement | null)[]>([])
  const leafInnerRefs = useRef<(SVGGElement | null)[]>([])
  const petalRefs     = useRef<(SVGGElement | null)[]>([])
  const centerRef     = useRef<SVGGElement>(null)
  const glowRef       = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const init = async () => {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // Initial states
      gsap.set(leafInnerRefs.current.filter(Boolean),  { scale: 0 })
      gsap.set(petalRefs.current.filter(Boolean),      { scale: 0 })
      if (centerRef.current) gsap.set(centerRef.current, { scale: 0 })
      if (glowRef.current)   gsap.set(glowRef.current,   { opacity: 0 })

      // Background darkens to deep forest
      gsap.to(containerRef.current, {
        backgroundColor: '#020d06',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '8% top',
          end: '+=210%',
          scrub: 1.8,
        },
      })

      // Main timeline driven by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=220%',
          scrub: 1.8,
        },
      })

      // Glow brightens as plant grows
      tl.to(glowRef.current, { opacity: 1, ease: 'power1.in', duration: 6 }, 0)

      // Stem grows bottom → top (path defined in that direction)
      tl.fromTo(
        stemRef.current,
        { strokeDashoffset: 1 },
        { strokeDashoffset: 0, ease: 'none', duration: 3.5 },
        0,
      )

      // Branches + leaves — staggered
      BRANCHES.forEach((_, i) => {
        const bEl = branchRefs.current[i]
        const lEl = leafInnerRefs.current[i]
        const s   = 0.3 + i * 0.62

        if (bEl) tl.fromTo(bEl,
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, ease: 'none', duration: 0.48 },
          s,
        )
        if (lEl) tl.fromTo(lEl,
          { scale: 0 },
          { scale: 1, ease: 'back.out(2)', duration: 0.38 },
          s + 0.4,
        )
      })
      // last leaf finishes at 0.3 + 7*0.62 + 0.4 + 0.38 ≈ 5.42

      // Petals bloom
      PETAL_ANGLES.forEach((_, i) => {
        const pEl = petalRefs.current[i]
        if (pEl) tl.fromTo(pEl,
          { scale: 0 },
          { scale: 1, ease: 'back.out(3)', duration: 0.38 },
          5.85 + i * 0.3,
        )
      })
      // last petal done at 5.85 + 5*0.3 + 0.38 ≈ 7.73

      // Centre circle
      if (centerRef.current) tl.fromTo(centerRef.current,
        { scale: 0 },
        { scale: 1, ease: 'back.out(2)', duration: 0.4 },
        7.7,
      )
    }
    init()
  }, [])

  return (
    <section ref={sectionRef} style={{ height: '260vh' }}>
      <div
        ref={containerRef}
        className="sticky top-0 h-screen overflow-hidden relative"
        style={{ backgroundColor: '#060e08' }}
      >
        {/* Radial green glow — grows with plant */}
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 70% at 50% 68%, rgba(38,130,55,0.26) 0%, rgba(22,90,38,0.10) 48%, transparent 72%)',
          }}
        />

        {/* Ground gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '14%',
            background: 'linear-gradient(to top, #0c0806 0%, #141008 55%, transparent 100%)',
          }}
        />

        {/* ── SVG Plant ────────────────────────────────────────────── */}
        <svg
          viewBox="0 0 500 640"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          {/* Soil */}
          <ellipse cx="251" cy="624" rx="92" ry="16" fill="#1a1008" opacity="0.88" />
          <ellipse cx="251" cy="632" rx="66" ry="11" fill="#0f0904" opacity="0.65" />

          {/* Roots */}
          <path d="M 248 620 C 230 632, 212 642, 196 636" stroke="#1b1005" strokeWidth="3"   fill="none" strokeLinecap="round"/>
          <path d="M 253 620 C 271 632, 289 642, 304 636" stroke="#1b1005" strokeWidth="3"   fill="none" strokeLinecap="round"/>
          <path d="M 250 622 C 248 638, 246 650, 242 658" stroke="#170e04" strokeWidth="2"   fill="none" strokeLinecap="round"/>
          <path d="M 250 624 C 260 636, 268 646, 262 655" stroke="#150c03" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

          {/* Grass blades */}
          {GRASS.map(([angle, x], i) => {
            const rad = (angle * Math.PI) / 180
            const h   = 20 + (i % 3) * 4
            return (
              <path
                key={`g${i}`}
                d={`M ${x} 616 C ${x + Math.sin(rad) * h * 0.45} ${616 - h * 0.55}, ${x + Math.sin(rad) * h * 0.72} ${616 - h * 0.82}, ${x + Math.sin(rad) * h * 0.62} ${616 - h}`}
                stroke="#3a7d1f"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity="0.55"
              />
            )
          })}

          {/* Main stem */}
          <path
            ref={stemRef}
            d={STEM_PATH}
            fill="none"
            stroke="#2d6e1a"
            strokeWidth="7"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset="1"
          />

          {/* Branches */}
          {BRANCHES.map((b, i) => (
            <path
              key={`b${i}`}
              ref={el => { branchRefs.current[i] = el }}
              d={b.path}
              fill="none"
              stroke="#3a8228"
              strokeWidth={b.w}
              strokeLinecap="round"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset="1"
            />
          ))}

          {/* Leaves: outer <g> = position+rotation; inner <g> = GSAP scale */}
          {BRANCHES.map((b, i) => (
            <g key={`lo${i}`} transform={`translate(${b.lx},${b.ly}) rotate(${b.lr})`}>
              <g
                ref={el => { leafInnerRefs.current[i] = el }}
                style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
              >
                <path d={LEAF}   fill={LEAF_COLORS[i]} opacity="0.92" />
                <path d={MIDRIB} stroke="#1e5510"      strokeWidth="1.1" fill="none" opacity="0.40" />
              </g>
            </g>
          ))}

          {/* Petals: outer <g> = flower centre + angle; inner <g> = GSAP scale */}
          {PETAL_ANGLES.map((angle, i) => (
            <g key={`po${i}`} transform={`translate(${FX},${FY}) rotate(${angle})`}>
              <g
                ref={el => { petalRefs.current[i] = el }}
                style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
              >
                <path d={PETAL} fill={PETAL_COLORS[i]} opacity="0.95" />
              </g>
            </g>
          ))}

          {/* Flower centre */}
          <g
            ref={centerRef}
            transform={`translate(${FX},${FY})`}
            style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
          >
            <circle cx="0" cy="0" r="10" fill="#ffc94d" />
            <circle cx="0" cy="0" r="4.5" fill="#ff9800" opacity="0.80" />
          </g>
        </svg>

        {/* Text overlay — bottom left */}
        <div className="absolute bottom-12 sm:bottom-16 left-8 sm:left-16 pointer-events-none z-10">
          <span
            className="block text-[0.46rem] sm:text-[0.5rem] font-bold tracking-[0.28em] sm:tracking-[0.32em] uppercase mb-3 sm:mb-4"
            style={{ color: 'rgba(255,255,255,0.18)' }}
          >
            Philosophy
          </span>
          <h2
            className="font-syne font-black text-white leading-[0.88] tracking-[-0.04em]"
            style={{ fontSize: 'clamp(1.8rem,5vw,5.8rem)', maxWidth: '11ch' }}
          >
            Raw idea.<br />
            <span style={{ color: 'rgba(255,255,255,0.22)' }}>Living</span><br />
            product.
          </h2>
        </div>

        {/* Scroll cue — right */}
        <div
          className="absolute bottom-8 sm:bottom-10 right-8 sm:right-16 flex flex-col items-center gap-2 pointer-events-none"
          style={{ opacity: 0.18 }}
        >
          <div className="h-12 sm:h-14 w-px bg-white" />
          <span
            className="text-white text-[0.44rem] sm:text-[0.48rem] font-bold tracking-[0.24em] uppercase"
            style={{ writingMode: 'vertical-rl' }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}
