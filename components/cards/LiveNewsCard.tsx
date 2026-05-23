'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Article } from '@/types'
import Badge from '@/components/ui/Badge'
import { timeAgo } from '@/lib/utils'

interface LiveNewsCardProps {
  article: Article
  index?: number
}

export default function LiveNewsCard({ article, index = 0 }: LiveNewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer border-l-4"
      style={{ borderLeftColor: 'var(--primary)' }}
    >
      <Link href={`/${article.categorySlug}/${article.slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt || article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 300px"
            loading="eager"
            unoptimized
          />
          <div className="absolute top-2 left-2 flex items-center gap-1.5">
            {article.isLive && <Badge variant="live">LIVE</Badge>}
            {article.isBreaking && <Badge variant="breaking">BREAKING</Badge>}
          </div>
        </div>

        <div className="p-3">
          <span
            className="text-[10px] font-bold uppercase tracking-wide block mb-1.5"
            style={{ color: 'var(--primary)' }}
          >
            {article.category}
          </span>
          <h4 className="text-gray-900 font-bold text-sm leading-snug line-clamp-2 group-hover:text-[var(--primary)] transition-colors mb-2">
            {article.title}
          </h4>
          <div className="flex items-center gap-1.5 text-gray-400 text-[11px]">
            <Clock size={10} />
            <span>{timeAgo(article.publishedAt)}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
