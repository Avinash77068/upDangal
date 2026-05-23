'use client'

import { motion } from 'framer-motion'
import { articles } from '@/data/articles'
import HeroCard from '@/components/cards/HeroCard'
import LiveNewsCard from '@/components/cards/LiveNewsCard'
import { sidebarAds } from '@/data/ads'
import SidebarAd from '../ads/SidebarAd'

export default function HeroSection() {
  const featured = articles[0]
  const sideArticles = articles.slice(1, 2)
  const liveArticles = articles.filter((a) => a.isLive || a.isBreaking).slice(0, 3)

  return (
    <section className="max-w-screen-xl mx-auto px-4 lg:px-6 py-5" style={{ color: 'var(--primary)' }}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Featured hero article */}
        <div className="lg:col-span-2">
          <HeroCard article={featured} />
        </div>

        {/* Side cards */}
        <div className="hidden sm:flex sm:flex-col gap-3">
          {/* {sideArticles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            >
              <LiveNewsCard article={article} index={i} />
            </motion.div>
          ))} */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + sideArticles.length * 0.08 }}
          >
            <SidebarAd image={sidebarAds[1].image} />
          </motion.div>
        </div>
      </div>

      {/* Live/Breaking strip */}
      {liveArticles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {liveArticles.map((article, i) => (
            <LiveNewsCard key={article.id} article={article} index={i} />
          ))}
        </motion.div>
      )}
    </section>
  )
}
