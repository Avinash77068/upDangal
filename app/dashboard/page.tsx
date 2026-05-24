'use client'

import Link from 'next/link'
import { FileText, Radio, Zap, PlusCircle, TrendingUp } from 'lucide-react'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import StatsCard from '@/components/dashboard/StatsCard'
import { useArticlesStore } from '@/store/articlesStore'
import { articles as staticArticles } from '@/data/articles'

export default function DashboardPage() {
  const userArticles = useArticlesStore((s) => s.articles)
  const all = [...staticArticles, ...userArticles]

  const liveCount = all.filter((a) => a.isLive).length
  const breakingCount = all.filter((a) => a.isBreaking).length
  const trendingCount = all.filter((a) => a.isTrending).length

  return (
    <div className="flex flex-col min-h-full">
      <DashboardHeader title="Dashboard" subtitle="Welcome back, Admin" />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Articles"
            value={all.length}
            subtitle={`${userArticles.length} posted by you`}
            color="#E8541A"
            icon={<FileText size={18} />}
          />
          <StatsCard
            title="Live"
            value={liveCount}
            subtitle="currently live"
            color="#DC2626"
            icon={<Radio size={18} />}
          />
          <StatsCard
            title="Breaking"
            value={breakingCount}
            color="#EA580C"
            icon={<Zap size={18} />}
          />
          <StatsCard
            title="Trending"
            value={trendingCount}
            color="#2563EB"
            icon={<TrendingUp size={18} />}
          />
        </div>

        {/* Quick actions */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Quick Actions</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/dashboard/articles/new"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-bold hover:opacity-90 transition-opacity"
              style={{ background: 'var(--primary)' }}
            >
              <PlusCircle size={15} />
              New Article
            </Link>
            <Link
              href="/dashboard/articles"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-gray-700 text-sm font-medium bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <FileText size={15} />
              Manage Articles
            </Link>
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-gray-700 text-sm font-medium bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              View Live Site ↗
            </Link>
          </div>
        </div>

        {/* Recent user posts */}
        {userArticles.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Your Recent Posts</p>
            <div className="space-y-2">
              {userArticles.slice(0, 5).map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg px-4 py-3 border border-gray-100 flex items-center gap-3 shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{article.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {article.category} &middot;{' '}
                      {new Date(article.publishedAt).toLocaleDateString('en-IN')}
                    </p>
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0">
                    {article.isLive && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-bold">
                        LIVE
                      </span>
                    )}
                    {article.isBreaking && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 font-bold">
                        BREAKING
                      </span>
                    )}
                    {article.isTrending && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 font-bold">
                        TRENDING
                      </span>
                    )}
                    {!article.isLive && !article.isBreaking && !article.isTrending && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-600 font-bold">
                        Published
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {userArticles.length === 0 && (
          <div className="bg-white rounded-xl p-10 text-center border border-dashed border-gray-200">
            <p className="text-gray-400 text-sm">No articles posted yet.</p>
            <Link
              href="/dashboard/articles/new"
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: 'var(--primary)' }}
            >
              <PlusCircle size={14} /> Create your first article
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
