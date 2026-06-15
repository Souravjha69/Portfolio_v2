'use client'
import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any
    let tickerFn: ((time: number) => void) | undefined

    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const LenisModule = await import('lenis')
      const Lenis = LenisModule.default

      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: true,
      })

      lenis.on('scroll', ScrollTrigger.update)

      tickerFn = (time: number) => lenis.raf(time * 1000)
      gsap.ticker.add(tickerFn)
      gsap.ticker.lagSmoothing(0)

      // Animate all section entrance lines globally
      document.querySelectorAll<HTMLElement>('.section-line').forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: 'power3.inOut',
            transformOrigin: 'left',
            scrollTrigger: {
              trigger: line,
              start: 'top 98%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }

    init()

    return () => {
      if (tickerFn) {
        import('gsap').then(({ gsap }) => gsap.ticker.remove(tickerFn!))
      }
      lenis?.destroy()
    }
  }, [])

  return null
}
