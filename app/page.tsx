import { Suspense } from 'react'
import HeroSection from '@/components/news/HeroSection'
import TrendingSection from '@/components/news/TrendingSection'
import CategorySection from '@/components/news/CategorySection'
import VideoSection from '@/components/news/VideoSection'
import ShortsSection from '@/components/news/ShortsSection'
import Sidebar from '@/components/layout/Sidebar'
import AdBanner from '@/components/ads/AdBanner'
import InlineAd from '@/components/ads/InlineAd'
import SponsoredCard from '@/components/ads/SponsoredCard'
import { SkeletonHeroCard, SkeletonNewsCard } from '@/components/ui/SkeletonCard'
import { leaderboardAd, inlineAds, sponsoredArticleAd } from '@/data/ads'

const sectionStyle = { background: 'var(--primary-light)' }

export default function HomePage() {
  return (
    <>
      {/* Leaderboard ad */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 pt-3">
        <AdBanner ad={leaderboardAd} />
      </div>

      {/* Hero */}
      <Suspense fallback={
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2"><SkeletonHeroCard /></div>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => <SkeletonNewsCard key={i} />)}
            </div>
          </div>
        </div>
      }>
        <HeroSection />
      </Suspense>

      {/* Main content + Sidebar */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-4">

            {/* Trending */}
            <TrendingSection />

            {/* BJP */}
            <div className="rounded-2xl p-5 shadow-sm" style={sectionStyle}>
              <CategorySection categorySlug="bjp" />
            </div>

            <InlineAd ad={inlineAds[0]} />

            {/* Congress */}
            <div className="rounded-2xl p-5 shadow-sm" style={sectionStyle}>
              <CategorySection categorySlug="congress" />
            </div>

            {/* Video */}
            <div className="rounded-2xl p-5 shadow-sm" style={sectionStyle}>
              <VideoSection />
            </div>

            <InlineAd ad={inlineAds[1]} />

            {/* KJP */}
            <div className="rounded-2xl p-5 shadow-sm" style={sectionStyle}>
              <CategorySection categorySlug="kjp" />
            </div>

            {/* Shorts */}
            <div className="rounded-2xl p-5 shadow-sm" style={sectionStyle}>
              <ShortsSection />
            </div>

            {/* Sponsored content */}
            <div className="rounded-2xl p-5 shadow-sm" style={sectionStyle}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--primary)' }}>
                  Sponsored Content
                </span>
                <div className="flex-1 h-px" style={{ background: 'var(--primary-light)' }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SponsoredCard ad={sponsoredArticleAd} />
                <SponsoredCard ad={{
                  ...sponsoredArticleAd,
                  id: 'sp2',
                  title: 'भारत की सबसे तेज़ राजनीतिक न्यूज़ App — UpDangal',
                  description: 'Download the UpDangal app for real-time breaking news, LIVE debates & election results',
                  sponsor: 'UpDangal',
                }} />
              </div>
            </div>

            {/* Alliance Watch */}
            <div className="rounded-2xl p-5 shadow-sm" style={sectionStyle}>
              <CategorySection categorySlug="alliance" />
            </div>

            {/* Bottom leaderboard */}
            <AdBanner ad={{
              ...leaderboardAd,
              id: 'lb2',
              title: 'HDFC Bank: आपका सपना, हमारी जिम्मेदारी',
              description: 'Home Loan 8.5% से शुरू | Personal Loan 48 घंटों में',
              ctaText: 'अभी अप्लाई करें',
              sponsor: 'HDFC Bank',
              bgColor: '#003399',
            }} />
          </div>

          <aside className="lg:col-span-1 hidden lg:block">
            <Sidebar />
          </aside>
        </div>
      </div>
    </>
  )
}
