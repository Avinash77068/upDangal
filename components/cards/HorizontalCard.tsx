'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Article } from '@/types'
import { timeAgo } from '@/lib/utils'

interface HorizontalCardProps {
  article: Article
  index?: number
  showCategory?: boolean
}

export default function HorizontalCard({ article, index = 0, showCategory = true }: HorizontalCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.07 }}
      whileHover={{ x: 4 }}
      className="flex gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-shadow group cursor-pointer"
    >
      <Link href={`/${article.categorySlug}/${article.slug}`} className="flex gap-3 w-full">
        <div className="relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt || article.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="96px"
            unoptimized
          />
        </div>

        <div className="flex-1 min-w-0">
          {showCategory && (
            <span
              className="text-[10px] font-bold uppercase tracking-wide block mb-1"
              style={{ color: 'var(--primary)' }}
            >
              {article.category}
            </span>
          )}
          <h4 className="text-gray-900 font-semibold text-sm leading-snug line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
            {article.title}
          </h4>
          <div className="flex items-center gap-2 mt-1.5 text-gray-400 text-[11px]">
            <Clock size={10} />
            <span>{timeAgo(article.publishedAt)}</span>
            <span className="text-gray-300">·</span>
            <span>{article.readTime} मिनट</span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
