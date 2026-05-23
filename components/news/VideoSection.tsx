'use client'

import { motion } from 'framer-motion'
import { videos } from '@/data/videos'
import VideoCard from '@/components/cards/VideoCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { Play, Radio } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function VideoSection() {
  const featured = videos[0]
  const rest = videos.slice(1)

  return (
    <section className="py-5">
      <SectionHeader title="Videos" titleHindi="वीडियो" viewAllHref="/videos" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Featured video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 bg-gray-900 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
        >
          <Link href={`/video/${featured.id}`}>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={featured.thumbnail}
                alt={featured.title}
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 600px"
                unoptimized
              />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-white/60 group-hover:scale-110 transition-transform group-hover:border-[var(--primary)]"
                  style={{ background: 'var(--primary)' }}
                >
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
              </div>

              {/* LIVE badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 bg-white rounded-full pulse-live" />
                  LIVE
                </span>
              </div>

              {/* Duration */}
              <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-mono px-2 py-1 rounded">
                {featured.duration}
              </span>
            </div>

            <div className="p-4">
              <span
                className="inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-2 text-white"
                style={{ background: 'var(--primary)' }}
              >
                {featured.category}
              </span>
              <h3 className="text-white font-bold text-base leading-snug line-clamp-2 group-hover:text-orange-300 transition-colors">
                {featured.title}
              </h3>
              <p className="text-gray-400 text-xs mt-2">{featured.views} views · {featured.author.name}</p>
            </div>
          </Link>
        </motion.div>

        {/* Video grid */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {rest.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
