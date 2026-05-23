'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Play, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import type { VideoItem } from '@/types'
import { timeAgo } from '@/lib/utils'

interface VideoCardProps {
  video: VideoItem
  index?: number
}

export default function VideoCard({ video, index = 0 }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
    >
      <Link href={`/video/${video.id}`}>
        <div className="relative aspect-video overflow-hidden bg-gray-900">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            sizes="(max-width: 768px) 100vw, 360px"
            unoptimized
          />
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/60 group-hover:scale-110 transition-transform group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)]">
              <Play size={18} className="text-white ml-0.5" fill="white" />
            </div>
          </div>
          {/* Duration */}
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-mono px-1.5 py-0.5 rounded">
            {video.duration}
          </span>
          {/* Category */}
          <span
            className="absolute top-2 left-2 text-[10px] font-bold uppercase px-2 py-0.5 rounded text-white"
            style={{ background: 'var(--primary)' }}
          >
            {video.category}
          </span>
        </div>

        <div className="p-3">
          <h4 className="text-gray-900 font-bold text-sm leading-snug line-clamp-2 group-hover:text-[var(--primary)] transition-colors mb-2">
            {video.title}
          </h4>
          <div className="flex items-center gap-3 text-gray-400 text-[11px]">
            <span className="flex items-center gap-1">
              <Eye size={11} />
              {video.views}
            </span>
            <span className="text-gray-300">·</span>
            <span>{timeAgo(video.publishedAt)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
