'use client'

import Link from 'next/link'
import { Flame, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import type { TrendingTopic } from '@/types'

interface TrendingCardProps {
  topic: TrendingTopic
  index?: number
}

export default function TrendingCard({ topic, index = 0 }: TrendingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ x: 4 }}
      className="flex items-center gap-3 p-3 rounded-xl bg-white hover:shadow-md transition-shadow group cursor-pointer border border-gray-100"
    >
      <Link href={`/trending/${topic.id}`} className="flex items-center gap-3 w-full">
        {/* Rank */}
        <span className={`text-2xl font-black w-8 text-center leading-none ${
          topic.rank <= 3 ? 'text-[var(--primary)]' : 'text-gray-300'
        }`}>
          {topic.rank}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[10px] text-gray-400 uppercase font-medium">{topic.category}</span>
            {topic.isHot && <Flame size={10} style={{ color: 'var(--primary)' }} fill="currentColor" />}
          </div>
          <h4 className="text-gray-800 font-semibold text-sm leading-tight group-hover:text-[var(--primary)] transition-colors line-clamp-1">
            {topic.title}
          </h4>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-400 text-xs flex-shrink-0">
          <TrendingUp size={11} style={topic.isHot ? { color: 'var(--primary)' } : {}} />
          <span>{topic.views}</span>
        </div>
      </Link>
    </motion.div>
  )
}
