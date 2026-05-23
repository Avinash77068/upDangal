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

export default function HomePage() {
  return (
    <>
      {/* Leaderboard ad */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 pt-3">
        <AdBanner ad={leaderboardAd} />
      </div>

      {/* Hero */}
      <Suspense fallback={
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-5" style={{ color: 'var(--primary)' }}>
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

            {/* BJP Section */}
            <div className=" rounded-2xl p-5 shadow-sm" style={{ color: 'var(--primary)' }}>
              <CategorySection categorySlug="bjp" />
            </div>

            <InlineAd ad={inlineAds[0]} />

            {/* Congress Section */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <CategorySection categorySlug="congress" />
            </div>

            {/* Video section */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <VideoSection />
            </div>

            <InlineAd ad={inlineAds[1]} />

            {/* KJP Section */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <CategorySection categorySlug="kjp" />
            </div>

            {/* Shorts */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <ShortsSection />
            </div>

            {/* Sponsored content */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Sponsored Content
                </span>
                <div className="flex-1 h-px bg-gray-100" />
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

            {/* BJP + Congress Alliance Watch */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
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
