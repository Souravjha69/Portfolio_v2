'use client'
import dynamic from 'next/dynamic'

const RockEvolution = dynamic(
  () => import('./RockEvolution'),
  { ssr: false },
)

export default function RockEvolutionLoader() {
  return <RockEvolution />
}
