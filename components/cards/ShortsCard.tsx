'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Play, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import type { VideoItem } from '@/types'

interface ShortsCardProps {
  short: VideoItem
  index?: number
}

export default function ShortsCard({ short, index = 0 }: ShortsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      whileHover={{ scale: 1.04 }}
      className="group cursor-pointer flex-shrink-0 w-36 sm:w-44"
    >
      <Link href={`/shorts/${short.id}`}>
        <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-md" style={{ aspectRatio: '9/16' }}>
          <Image
            src={short.thumbnail}
            alt={short.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="176px"
            unoptimized
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/60">
              <Play size={16} className="text-white ml-0.5" fill="white" />
            </div>
          </div>

          {/* Duration badge */}
          <span className="absolute top-2 right-2 bg-black/70 text-white text-[10px] font-mono px-1.5 py-0.5 rounded-full">
            {short.duration}
          </span>

          {/* Category */}
          <span
            className="absolute top-2 left-2 text-[9px] font-bold uppercase px-1.5 py-0.5 rounded text-white"
            style={{ background: 'var(--primary)' }}
          >
            {short.category}
          </span>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-2.5">
            <h4 className="text-white text-xs font-bold leading-tight line-clamp-2">
              {short.title}
            </h4>
            <span className="flex items-center gap-1 text-white/70 text-[10px] mt-1">
              <Eye size={9} />
              {short.views}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
