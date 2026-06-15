import type { Metadata } from 'next'
import { Syne, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'
import Cursor from '@/components/ui/Cursor'
import Navbar from '@/components/layout/Navbar'
import PageTransition from '@/components/ui/PageTransition'
import SmoothScroll from '@/components/ui/SmoothScroll'
import ScrollProgress from '@/components/ui/ScrollProgress'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sourav Kumar Jha — AI Engineer & Full Stack Developer',
  description:
    'M.S. Machine Learning at Drexel University. Building LLM-integrated systems, REST APIs and scalable backends. Open to full-time AI engineering roles.',
  keywords: ['AI Engineer', 'Full Stack Developer', 'LLM', 'React', 'Node.js', 'Machine Learning'],
  openGraph: {
    title: 'Sourav Kumar Jha — AI Engineer',
    description: 'Building LLM-integrated systems that ship to production.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <body>
        <SmoothScroll />
        <ScrollProgress />
        <Cursor />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
