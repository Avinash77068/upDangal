'use client'

import { motion } from 'framer-motion'
import { useArticlesStore } from '@/store/articlesStore'
import LiveNewsCard from '@/components/cards/LiveNewsCard'

export default function UserArticlesSection() {
  const articles = useArticlesStore((s) => s.articles)

  if (articles.length === 0) return null

  return (
    <section className="max-w-screen-xl mx-auto px-4 lg:px-6 py-4">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: 'var(--primary)' }}
        >
          Admin Posts
        </span>
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">{articles.length} article{articles.length !== 1 ? 's' : ''}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <LiveNewsCard article={article} index={i} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
