'use client'

import { Zap } from 'lucide-react'
import { breakingNews } from '@/data/trending'

export default function BreakingTicker() {
  // Double the items so the seamless loop works
  const items = [...breakingNews, ...breakingNews]

  return (
    <div className="bg-gray-900 border-b border-gray-800 h-9 flex items-center overflow-hidden">
      {/* Label */}
      <div
        className="flex items-center gap-1.5 px-4 h-full flex-shrink-0 z-10"
        style={{ background: 'var(--breaking-bg)' }}
      >
        <Zap size={13} className="text-white" fill="white" />
        <span className="text-white text-[11px] font-extrabold uppercase tracking-widest whitespace-nowrap">
          ब्रेकिंग
        </span>
      </div>

      {/* Scrolling ticker */}
      <div className="flex-1 overflow-hidden relative">
        <div className="ticker-animate">
          {items.map((item, i) => (
            <span key={i} className="inline-flex items-center text-gray-200 text-xs font-medium px-6 whitespace-nowrap">
              <span className="text-[var(--primary)] mr-2 font-bold">●</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
