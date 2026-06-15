'use client'
import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const GREEN = '#8bc34a'

function Scene({ scroll }: { scroll: React.RefObject<{ y: number }> }) {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    const sy = scroll.current.y

    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.09
      outerRef.current.rotation.x += delta * 0.035
      // scroll tilts Z axis for a satisfying spin feel
      outerRef.current.rotation.z = sy * 0.0007
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.055
      innerRef.current.rotation.x -= delta * 0.02
      innerRef.current.rotation.z = -sy * 0.0004
    }
  })

  return (
    // Slight rightward offset so sphere sits behind the empty right half
    // but still bleeds into the left text area for depth
    <group position={[0.6, 0, 0]}>
      {/* Outer sparse shell — very translucent */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.5, 3]} />
        <meshBasicMaterial
          color={GREEN}
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Inner dense shell — main visual */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.85, 5]} />
        <meshBasicMaterial
          color={GREEN}
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>
    </group>
  )
}

export default function HeroSphere() {
  const scroll = useRef({ y: 0 })

  useEffect(() => {
    const onScroll = () => { scroll.current.y = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <Scene scroll={scroll} />
    </Canvas>
  )
}
