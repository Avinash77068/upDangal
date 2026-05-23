'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { shorts } from '@/data/videos'
import ShortsCard from '@/components/cards/ShortsCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react'

export default function ShortsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 200 : -200, behavior: 'smooth' })
  }

  return (
    <section className="py-5">
      <div className="flex items-center justify-between mb-4">
        <div className="section-border-left flex items-center gap-2">
          <Zap size={18} style={{ color: 'var(--primary)' }} fill="currentColor" />
          <div>
            <h2 className="text-xl font-extrabold text-[var(--section-head)] leading-none">Shorts</h2>
            <span className="text-xs text-gray-500 font-medium block mt-0.5">शॉर्ट वीडियो</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {shorts.map((short, i) => (
          <motion.div
            key={short.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.07 }}
            className="snap-start"
          >
            <ShortsCard short={short} index={i} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
