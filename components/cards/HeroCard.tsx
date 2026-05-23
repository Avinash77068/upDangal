'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, Eye, User } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Article } from '@/types'
import Badge from '@/components/ui/Badge'
import { timeAgo } from '@/lib/utils'

interface HeroCardProps {
  article: Article
}

export default function HeroCard({ article }: HeroCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
    >
      <Link href={`/${article.categorySlug}/${article.slug}`}>
        {/* Image */}
        <div className="relative aspect-[16/9] lg:aspect-[2/1] overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt || article.title}
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
            unoptimized
          />
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
          <div className="flex items-center gap-2 mb-3">
            {article.isLive && <Badge variant="live">LIVE</Badge>}
            {article.isBreaking && <Badge variant="breaking">BREAKING</Badge>}
            <Badge variant="category" color="#E8541A">{article.category}</Badge>
          </div>

          <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight mb-3 line-clamp-3">
            {article.title}
          </h1>

          <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2 hidden sm:block">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 text-white/60 text-xs">
            <span className="flex items-center gap-1">
              <User size={12} />
              {article.author.name}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {timeAgo(article.publishedAt)}
            </span>
            {article.views && (
              <span className="flex items-center gap-1">
                <Eye size={12} />
                {(article.views / 1000).toFixed(0)}K
              </span>
            )}
            <span className="ml-auto bg-[var(--primary)] text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-[var(--primary-hover)] transition-colors">
              पढ़ें →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
