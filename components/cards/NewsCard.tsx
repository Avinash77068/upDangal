'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, User } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Article } from '@/types'
import Badge from '@/components/ui/Badge'
import { timeAgo } from '@/lib/utils'

interface NewsCardProps {
  article: Article
  index?: number
}

export default function NewsCard({ article, index = 0 }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
    >
      <Link href={`/${article.categorySlug}/${article.slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt || article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 400px"
            unoptimized
          />
          {article.isLive && (
            <div className="absolute top-2 left-2">
              <Badge variant="live">LIVE</Badge>
            </div>
          )}
          {article.isBreaking && !article.isLive && (
            <div className="absolute top-2 left-2">
              <Badge variant="breaking">BREAKING</Badge>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
              style={{ color: 'var(--primary)', background: 'var(--primary-light)' }}
            >
              {article.category}
            </span>
            {article.isTrending && (
              <span className="text-[10px] font-bold text-orange-500 uppercase">🔥 ट्रेंडिंग</span>
            )}
          </div>

          <h3 className="text-gray-900 font-bold text-base leading-snug line-clamp-2 mb-2 group-hover:text-[var(--primary)] transition-colors">
            {article.title}
          </h3>

          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-3 text-gray-400 text-[11px] border-t border-gray-100 pt-3">
            <span className="flex items-center gap-1">
              <User size={11} />
              {article.author.name}
            </span>
            <span className="flex items-center gap-1 ml-auto">
              <Clock size={11} />
              {timeAgo(article.publishedAt)}
            </span>
            <span className="text-gray-300">·</span>
            <span>{article.readTime} मिनट पढ़ें</span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
