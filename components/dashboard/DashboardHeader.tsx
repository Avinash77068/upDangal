'use client'

import { Bell } from 'lucide-react'
import { useAuthStore, type UserRole } from '@/store/authStore'

interface Props {
  title: string
  subtitle?: string
}

const ROLE_CONFIG: Record<UserRole, { label: string; color: string; bg: string }> = {
  admin:    { label: 'Admin',    color: '#fff',     bg: 'var(--primary)' },
  editor:   { label: 'Editor',   color: '#fff',     bg: '#2563EB'        },
  reporter: { label: 'Reporter', color: '#fff',     bg: '#16A34A'        },
}

export default function DashboardHeader({ title, subtitle }: Props) {
  const user = useAuthStore((s) => s.user)
  const role = user?.role ?? 'reporter'
  const badge = ROLE_CONFIG[role]

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
            style={{ background: badge.bg }}
          >
            {user?.name?.[0] ?? 'A'}
          </div>
          <div className="hidden sm:flex flex-col items-start">
            <span className="text-sm font-semibold text-gray-700 leading-tight">{user?.name ?? 'Admin'}</span>
            <span
              className="text-[10px] font-bold px-1.5 py-px rounded uppercase tracking-wide leading-tight"
              style={{ background: badge.bg, color: badge.color }}
            >
              {badge.label}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
