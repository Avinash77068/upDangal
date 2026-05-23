'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { articles, getArticlesByCategory } from '@/data/articles'
import { categories } from '@/data/categories'
import NewsCard from '@/components/cards/NewsCard'
import HorizontalCard from '@/components/cards/HorizontalCard'
import SectionHeader from '@/components/ui/SectionHeader'
import Image from 'next/image'
import Link from 'next/link'
import { timeAgo } from '@/lib/utils'
import { Clock, User } from 'lucide-react'

interface CategorySectionProps {
  categorySlug: string
  className?: string
}

export default function CategorySection({ categorySlug, className = '' }: CategorySectionProps) {
  const cat = categories.find((c) => c.slug === categorySlug)

  const catArticles = useMemo(() => {
    const byCategory = getArticlesByCategory(categorySlug)
    if (byCategory.length >= 4) return byCategory

    // Fill with global articles offset by category index to ensure variety
    const catIdx = categories.findIndex((c) => c.slug === categorySlug)
    const offset = (catIdx * 3) % articles.length
    const cycled = [...articles.slice(offset), ...articles.slice(0, offset)]
    return cycled.slice(0, 7)
  }, [categorySlug])

  if (!cat || catArticles.length === 0) return null

  const featured = catArticles[0]
  const gridArticles = catArticles.slice(1, 5)
  const listArticles = catArticles.slice(0, 3)

  return (
    <section className={`py-5 ${className}`}>
      <SectionHeader
        title={cat.name}
        titleHindi={cat.nameHindi}
        viewAllHref={`/${cat.slug}`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Featured article */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-1 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
        >
          <Link href={`/${featured.categorySlug}/${featured.slug}`}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.imageAlt || featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span
                  className="inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded mb-2 text-white"
                  style={{ background: cat.color }}
                >
                  {cat.nameHindi}
                </span>
                <h3 className="text-white font-bold text-sm leading-snug line-clamp-3">
                  {featured.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-white/60 text-xs">
                  <User size={10} />
                  <span>{featured.author.name}</span>
                  <Clock size={10} className="ml-1" />
                  <span>{timeAgo(featured.publishedAt)}</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.article>

        {/* Grid articles */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {gridArticles.map((article, i) => (
            <NewsCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </div>

      {/* Horizontal mini-list */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {listArticles.map((article, i) => (
          <HorizontalCard key={article.id} article={article} index={i} showCategory={false} />
        ))}
      </div>
    </section>
  )
}
