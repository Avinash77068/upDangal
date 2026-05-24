'use client'

import DashboardHeader from '@/components/dashboard/DashboardHeader'
import ArticleForm from '@/components/dashboard/ArticleForm'

export default function NewArticlePage() {
  return (
    <div className="flex flex-col min-h-full">
      <DashboardHeader title="New Article" subtitle="Create and publish a new article" />

      <div className="p-6">
        <ArticleForm />
      </div>
    </div>
  )
}
