'use client'

import Link from 'next/link'
import { PlusCircle } from 'lucide-react'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import ArticleTable from '@/components/dashboard/ArticleTable'

export default function ArticlesPage() {
  return (
    <div className="flex flex-col min-h-full">
      <DashboardHeader title="Articles" subtitle="Manage your published content" />

      <div className="p-6 space-y-5">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Articles you've posted appear on the home page.</p>
          <Link
            href="/dashboard/articles/new"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-bold hover:opacity-90 transition-opacity flex-shrink-0"
            style={{ background: 'var(--primary)' }}
          >
            <PlusCircle size={14} />
            New Article
          </Link>
        </div>

        <ArticleTable />
      </div>
    </div>
  )
}
