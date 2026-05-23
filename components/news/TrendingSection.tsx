'use client'

import { motion } from 'framer-motion'
import { trendingTopics } from '@/data/trending'
import { getTrendingArticles } from '@/data/articles'
import TrendingCard from '@/components/cards/TrendingCard'
import HorizontalCard from '@/components/cards/HorizontalCard'
import SectionHeader from '@/components/ui/SectionHeader'

export default function TrendingSection() {
  const trendingArticles = getTrendingArticles(4)

  return (
    <section className="max-w-screen-xl mx-auto px-4 lg:px-6 py-4">
      <div className="rounded-2xl p-5 shadow-sm" style={{ background: 'var(--primary-light)' }}>
        <SectionHeader title="Trending" titleHindi="ट्रेंडिंग" viewAllHref="/trending" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Trending topics list */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">🔥 हॉट टॉपिक्स</h3>
            <div className="space-y-2">
              {trendingTopics.slice(0, 6).map((topic, i) => (
                <TrendingCard key={topic.id} topic={topic} index={i} />
              ))}
            </div>
          </div>

          {/* Trending articles */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">📰 ट्रेंडिंग खबरें</h3>
            <div className="space-y-3">
              {trendingArticles.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <HorizontalCard article={article} index={i} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
