import { notFound } from 'next/navigation'
import { articles } from '@/data/articles'
import { categories } from '@/data/categories'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, User, Eye, ArrowLeft } from 'lucide-react'
import { timeAgo } from '@/lib/utils'
import HorizontalCard from '@/components/cards/HorizontalCard'

interface Props {
  params: Promise<{ category: string; slug: string }>
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params
  const article = articles.find((a) => a.categorySlug === category && a.slug === slug)

  if (!article) notFound()

  const cat = categories.find((c) => c.slug === category)
  const related = articles.filter((a) => a.id !== article.id && a.categorySlug === category).slice(0, 4)

  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article */}
        <article className="lg:col-span-2">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-600">होम</Link>
            <span>/</span>
            <Link href={`/${category}`} className="hover:text-gray-600"
              style={{ color: cat?.color }}>
              {cat?.nameHindi || category}
            </Link>
          </div>

          {/* Category + badges */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-xs font-extrabold uppercase px-3 py-1 rounded-full text-white"
              style={{ background: cat?.color || 'var(--primary, #E8541A)' }}
            >
              {cat?.nameHindi || category}
            </span>
            {article.isLive && (
              <span className="text-xs font-bold bg-red-600 text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                LIVE
              </span>
            )}
            {article.isBreaking && (
              <span className="text-xs font-bold bg-red-600 text-white px-2 py-0.5 rounded-full animate-pulse">
                BREAKING
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-6 pb-4 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              <span className="font-medium text-gray-700">{article.author.name}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {timeAgo(article.publishedAt)}
            </span>
            {article.views && (
              <span className="flex items-center gap-1.5 ml-auto">
                <Eye size={14} />
                {(article.views / 1000).toFixed(0)}K views
              </span>
            )}
          </div>

          {/* Hero image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
            <Image
              src={article.image}
              alt={article.imageAlt || article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed font-medium mb-4">
              {article.excerpt}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              यह खबर विकसित हो रही है। हमारे संवाददाता घटनास्थल पर मौजूद हैं और अपडेट भेज रहे हैं।
              भारतीय राजनीति में यह घटनाक्रम काफी महत्वपूर्ण माना जा रहा है, क्योंकि इसका असर
              आने वाले विधानसभा और लोकसभा चुनावों पर पड़ सकता है।
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              राजनीतिक विशेषज्ञों का मानना है कि यह कदम चुनावी रणनीति का हिस्सा है।
              पार्टी के वरिष्ठ नेताओं ने इस बारे में कोई आधिकारिक बयान नहीं दिया है,
              लेकिन सूत्रों के अनुसार जल्द ही विस्तृत जानकारी दी जाएगी।
            </p>
          </div>

          {/* Tags */}
          {article.tags && (
            <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-100">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full font-medium cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ background: cat?.bgColor || '#FEF3EE', color: cat?.color || 'var(--primary)' }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6">
            <Link
              href={`/${category}`}
              className="inline-flex items-center gap-2 text-sm font-bold hover:opacity-80 transition-opacity"
              style={{ color: 'var(--primary, #E8541A)' }}
            >
              <ArrowLeft size={16} />
              {cat?.nameHindi || category} की सभी खबरें
            </Link>
          </div>
        </article>

        {/* Sidebar: related */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <h3 className="text-base font-extrabold mb-3 section-border-left"
              style={{ color: 'var(--section-head, #1C0A00)' }}>
              संबंधित खबरें
            </h3>
            <div className="space-y-3">
              {related.map((a, i) => (
                <HorizontalCard key={a.id} article={a} index={i} showCategory />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
