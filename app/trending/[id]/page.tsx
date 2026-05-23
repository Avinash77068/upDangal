import Link from 'next/link'
import { trendingTopics } from '@/data/trending'
import { articles } from '@/data/articles'
import HorizontalCard from '@/components/cards/HorizontalCard'
import { TrendingUp, Flame } from 'lucide-react'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ id: string }>
}

export default async function TrendingTopicPage({ params }: Props) {
  const { id } = await params
  const topic = trendingTopics.find((t) => t.id === id)

  if (!topic) notFound()

  // Find related articles based on topic category or title keywords
  const related = articles.slice(0, 6)

  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600">होम</Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm" style={{ color: 'var(--primary, #E8541A)' }}>ट्रेंडिंग</span>
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-bold text-sm mb-4"
          style={{ background: 'var(--primary, #E8541A)' }}
        >
          {topic.isHot ? <Flame size={14} fill="white" /> : <TrendingUp size={14} />}
          #{topic.rank} ट्रेंडिंग
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{topic.title}</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span className="px-2 py-0.5 rounded text-xs font-bold text-white"
            style={{ background: 'var(--primary, #E8541A)' }}>
            {topic.category}
          </span>
          <span>{topic.views} views</span>
        </div>
      </div>

      {/* Related articles */}
      <div>
        <h2 className="text-xl font-extrabold mb-4" style={{ color: 'var(--section-head, #1C0A00)' }}>
          संबंधित खबरें
        </h2>
        <div className="space-y-3">
          {related.map((article, i) => (
            <HorizontalCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-full text-white font-bold transition-opacity hover:opacity-90"
          style={{ background: 'var(--primary, #E8541A)' }}
        >
          ← होम पर वापस जाएं
        </Link>
      </div>
    </div>
  )
}
