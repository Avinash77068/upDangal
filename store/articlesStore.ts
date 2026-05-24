'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Article } from '@/types'

interface ArticlesStore {
  articles: Article[]
  addArticle: (article: Article) => void
  deleteArticle: (id: string) => void
  updateArticle: (id: string, partial: Partial<Article>) => void
}

export const useArticlesStore = create<ArticlesStore>()(
  persist(
    (set) => ({
      articles: [],
      addArticle: (article) =>
        set((state) => ({ articles: [article, ...state.articles] })),
      deleteArticle: (id) =>
        set((state) => ({ articles: state.articles.filter((a) => a.id !== id) })),
      updateArticle: (id, partial) =>
        set((state) => ({
          articles: state.articles.map((a) => (a.id === id ? { ...a, ...partial } : a)),
        })),
    }),
    { name: 'updangal-articles' }
  )
)
