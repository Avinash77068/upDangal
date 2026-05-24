'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useArticlesStore } from '@/store/articlesStore'
import { navCategories } from '@/data/categories'
import type { Article } from '@/types'

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60)
}

export default function ArticleForm() {
  const router = useRouter()
  const addArticle = useArticlesStore((s) => s.addArticle)

  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    slug: '',
    categorySlug: navCategories[0].slug,
    image: '',
    readTime: 3,
    isLive: false,
    isBreaking: false,
    isTrending: false,
  })
  const [error, setError] = useState('')

  const handleTitleChange = (val: string) => {
    setForm((f) => ({ ...f, title: val, slug: slugify(val) }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.title.trim()) return setError('Title is required')
    if (!form.excerpt.trim()) return setError('Excerpt is required')

    const cat = navCategories.find((c) => c.slug === form.categorySlug)!
    const article: Article = {
      id: `user-${Date.now()}`,
      title: form.title.trim(),
      excerpt: form.excerpt.trim(),
      slug: form.slug || slugify(form.title),
      category: cat.nameHindi,
      categorySlug: cat.slug,
      image: form.image || '/ads/rohit.png',
      author: { name: 'Admin', avatar: '' },
      publishedAt: new Date().toISOString(),
      readTime: Number(form.readTime),
      isLive: form.isLive,
      isBreaking: form.isBreaking,
      isTrending: form.isTrending,
      views: 0,
    }

    addArticle(article)
    router.push('/dashboard/articles')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm space-y-5 max-w-2xl">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2.5 rounded-lg">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Title *</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="Article title..."
          className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Slug</label>
        <input
          type="text"
          value={form.slug}
          onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
          placeholder="auto-generated-from-title"
          className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm font-mono text-gray-500 focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Excerpt *</label>
        <textarea
          value={form.excerpt}
          onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
          placeholder="Short summary of the article..."
          rows={3}
          className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Category</label>
          <select
            value={form.categorySlug}
            onChange={(e) => setForm((f) => ({ ...f, categorySlug: e.target.value }))}
            className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
          >
            {navCategories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.nameHindi} ({cat.name})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Read Time (mins)</label>
          <input
            type="number"
            min={1}
            max={60}
            value={form.readTime}
            onChange={(e) => setForm((f) => ({ ...f, readTime: Number(e.target.value) }))}
            className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Image URL</label>
        <input
          type="url"
          value={form.image}
          onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
          placeholder="https://example.com/image.jpg"
          className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
        />
        <p className="text-xs text-gray-400 mt-1">Leave blank to use a default image</p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2.5">Flags</label>
        <div className="flex gap-5">
          {(
            [
              { key: 'isLive', label: 'LIVE', color: '#DC2626' },
              { key: 'isBreaking', label: 'BREAKING', color: '#EA580C' },
              { key: 'isTrending', label: 'TRENDING', color: '#2563EB' },
            ] as const
          ).map(({ key, label, color }) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form[key]}
                onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.checked }))}
                className="w-4 h-4 rounded border-gray-300"
                style={{ accentColor: color }}
              />
              <span className="text-sm font-semibold" style={{ color }}>
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg text-white text-sm font-bold transition-opacity hover:opacity-90"
          style={{ background: 'var(--primary)' }}
        >
          Publish Article
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2.5 rounded-lg text-gray-600 text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
