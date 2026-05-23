import { trendingTopics } from '@/data/trending'
import { sidebarAds } from '@/data/ads'
import SidebarAd from '@/components/ads/SidebarAd'
import TrendingCard from '@/components/cards/TrendingCard'
import { navCategories } from '@/data/categories'
import Link from 'next/link'
import { Flame, Tag } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="space-y-6 sidebar-sticky">
      {/* First sidebar ad */}
      <SidebarAd ad={sidebarAds[0]} />

      {/* Trending topics */}
      <div className="bg-white rounded-xl overflow-hidden shadow-sm">
        <div
          className="px-4 py-3 flex items-center gap-2"
          style={{ background: 'var(--primary)' }}
        >
          <Flame size={16} className="text-white" />
          <h3 className="text-white font-extrabold text-sm uppercase tracking-wide">ट्रेंडिंग</h3>
        </div>
        <div className="p-3 space-y-2">
          {trendingTopics.slice(0, 8).map((topic, i) => (
            <TrendingCard key={topic.id} topic={topic} index={i} />
          ))}
        </div>
      </div>

      {/* Second sidebar ad */}
      <SidebarAd ad={sidebarAds[1]} />

      {/* Categories widget */}
      <div className="bg-white rounded-xl overflow-hidden shadow-sm">
        <div
          className="px-4 py-3 flex items-center gap-2"
          style={{ background: 'var(--nav-bg)' }}
        >
          <Tag size={16} className="text-white" />
          <h3 className="text-white font-extrabold text-sm uppercase tracking-wide">विषय</h3>
        </div>
        <div className="p-3 grid grid-cols-2 gap-2">
          {navCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
              style={{ background: cat.bgColor, color: cat.color }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat.color }} />
              {cat.nameHindi}
            </Link>
          ))}
        </div>
      </div>

      {/* Third sidebar ad */}
      <SidebarAd ad={sidebarAds[2]} />

      {/* Subscribe CTA */}
      <div
        className="rounded-xl p-5 text-center"
        style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)' }}
      >
        <div className="text-white text-2xl mb-2">🔔</div>
        <h4 className="text-white font-extrabold text-base mb-1">सूचनाएं पाएं</h4>
        <p className="text-white/80 text-xs mb-4">ताज़ा खबरें सीधे आपके फोन पर</p>
        <button className="w-full bg-white font-bold text-sm py-2.5 rounded-full hover:bg-white/90 transition-colors"
          style={{ color: 'var(--primary)' }}>
          Subscribe करें
        </button>
      </div>
    </aside>
  )
}
