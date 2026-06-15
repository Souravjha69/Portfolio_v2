'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Wipe enter */}
        <motion.div
          className="fixed inset-0 z-[9000] bg-black pointer-events-none"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{ duration: 0.45, ease: [0.77, 0, 0.175, 1], delay: 0.05 }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
