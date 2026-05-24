'use client'

import { Bell } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'

interface Props {
  title: string
  subtitle?: string
}

export default function DashboardHeader({ title, subtitle }: Props) {
  const user = useAuthStore((s) => s.user)

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100 flex items-center justify-between px-6 h-14 flex-shrink-0">
      <div>
        <h1 className="text-base font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={17} />
        </button>
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ background: 'var(--primary)' }}
          >
            {user?.name?.[0] ?? 'A'}
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">{user?.name ?? 'Admin'}</span>
        </div>
      </div>
    </header>
  )
}
