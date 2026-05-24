'use client'

import { Trash2, Radio, TrendingUp, Zap } from 'lucide-react'
import { useArticlesStore } from '@/store/articlesStore'
import { useAuthStore } from '@/store/authStore'
import { timeAgo } from '@/lib/utils'

export default function ArticleTable() {
  const { articles, deleteArticle } = useArticlesStore()
  const role = useAuthStore((s) => s.user?.role)
  const canDelete = role === 'admin' || role === 'editor'

  if (articles.length === 0) {
    return (
      <div className="bg-white rounded-xl p-12 text-center border border-gray-100 shadow-sm">
        <p className="text-gray-400 text-sm">No articles yet.</p>
        <p className="text-gray-300 text-xs mt-1">Create your first article to see it here.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50/80">
            <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Title</th>
            <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Category</th>
            <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
            <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Published</th>
            {canDelete && <th className="px-5 py-3 w-10" />}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {articles.map((article) => (
            <tr key={article.id} className="hover:bg-gray-50/60 transition-colors">
              <td className="px-5 py-3.5 max-w-xs">
                <p className="font-semibold text-gray-800 line-clamp-1">{article.title}</p>
                <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{article.excerpt}</p>
              </td>
              <td className="px-5 py-3.5">
                <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium whitespace-nowrap">
                  {article.category}
                </span>
              </td>
              <td className="px-5 py-3.5">
                <div className="flex gap-1 flex-wrap">
                  {article.isLive && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded bg-red-100 text-red-600 font-bold">
                      <Radio size={8} /> LIVE
                    </span>
                  )}
                  {article.isBreaking && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded bg-orange-100 text-orange-600 font-bold">
                      <Zap size={8} /> BREAKING
                    </span>
                  )}
                  {article.isTrending && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-600 font-bold">
                      <TrendingUp size={8} /> TREND
                    </span>
                  )}
                  {!article.isLive && !article.isBreaking && !article.isTrending && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-100 text-green-600 font-bold">
                      Published
                    </span>
                  )}
                </div>
              </td>
              <td className="px-5 py-3.5 text-xs text-gray-400 whitespace-nowrap">
                {timeAgo(article?.publishedAt)}
              </td>
              {canDelete && (
                <td className="px-5 py-3.5">
                  <button
                    onClick={() => deleteArticle(article.id)}
                    className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete article"
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
