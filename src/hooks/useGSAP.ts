'use client'
import { useEffect, useRef } from 'react'

export function useGSAPReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let ctx: { revert: () => void } | undefined
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // Standard fade/slide reveals — play once, never reverse
        const elements = ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        elements?.forEach((el) => {
          const isLeft  = el.classList.contains('reveal-left')
          const isRight = el.classList.contains('reveal-right')
          const isScale = el.classList.contains('reveal-scale')

          gsap.to(el, {
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
            opacity: 1,
            x: isLeft ? 0 : isRight ? 0 : undefined,
            y: isLeft || isRight || isScale ? undefined : 0,
            scale: isScale ? 1 : undefined,
            duration: 1.0,
            ease: 'power3.out',
          })
        })

        // Staggered grid reveals — play once, gentle cascade
        const grids = ref.current?.querySelectorAll('.reveal-grid')
        grids?.forEach((grid) => {
          const items = Array.from(grid.children)
          gsap.fromTo(
            items,
            { opacity: 0, y: 28 },
            {
              scrollTrigger: {
                trigger: grid,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: 'power3.out',
            }
          )
        })

      }, ref)
    }

    initGSAP()
    return () => ctx?.revert()
  }, [])

  return ref
}

export function useScrollReveal(selector: string, options?: {
  stagger?: number
  duration?: number
  ease?: string
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let ctx: { revert: () => void } | undefined
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.to(selector, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          y: 0,
          duration: options?.duration ?? 1.0,
          stagger: options?.stagger ?? 0,
          ease: options?.ease ?? 'power3.out',
        })
      })
    }
    init()
    return () => ctx?.revert()
  }, [selector, options?.duration, options?.stagger, options?.ease])

  return ref
}
