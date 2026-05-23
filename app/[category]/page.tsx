import { notFound } from 'next/navigation'
import { categories } from '@/data/categories'
import { articles } from '@/data/articles'
import NewsCard from '@/components/cards/NewsCard'
import Link from 'next/link'

interface Props {
  params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = categories.find((c) => c.slug === category)
  if (!cat) notFound()

  const catArticles = articles.filter((a) => a.categorySlug === category)
  const displayArticles = catArticles.length > 0 ? catArticles : articles.slice(0, 6)

  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600">होम</Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-semibold" style={{ color: 'var(--primary, #E8541A)' }}>
            {cat.nameHindi}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="w-1 h-10 rounded-full"
            style={{ background: cat.color }}
          />
          <div>
            <h1 className="text-3xl font-extrabold" style={{ color: cat.color }}>{cat.nameHindi}</h1>
            <p className="text-gray-400 text-sm">{cat.name} — Latest News</p>
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayArticles.map((article, i) => (
          <NewsCard key={article.id} article={article} index={i} />
        ))}
      </div>

      {displayArticles.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg font-medium">इस श्रेणी में अभी कोई खबर नहीं है।</p>
          <Link href="/" className="mt-4 inline-block text-sm font-bold"
            style={{ color: 'var(--primary, #E8541A)' }}>
            होम पर वापस जाएं →
          </Link>
        </div>
      )}
    </div>
  )
}
