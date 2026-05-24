'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, FileText, PlusCircle, LogOut, ExternalLink } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/articles', icon: FileText, label: 'Articles' },
  { href: '/dashboard/articles/new', icon: PlusCircle, label: 'New Article' },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const logout = useAuthStore((s) => s.logout)

  const handleLogout = () => {
    logout()
    router.push('/dashboard/login')
  }

  return (
    <aside className="w-60 flex-shrink-0 flex flex-col h-full" style={{ background: 'var(--nav-bg)' }}>
      {/* Logo */}
      <div className="h-14 flex items-center px-5 border-b border-white/10 flex-shrink-0">
        <img src="/logo/logo.png" alt="UpDangal" className="h-8" />
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active ? 'text-white' : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
              style={active ? { background: 'var(--primary)' } : undefined}
            >
              <Icon size={16} />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom actions */}
      <div className="px-3 py-4 space-y-0.5 border-t border-white/10 flex-shrink-0">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-colors w-full"
        >
          <ExternalLink size={16} />
          View Site
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-red-500/20 hover:text-red-300 w-full transition-colors"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  )
}
