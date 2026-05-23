'use client'

import Link from 'next/link'
import { Home, Flame, Video, Newspaper, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/', icon: Home, label: 'होम' },
  { href: '/trending', icon: Flame, label: 'ट्रेंड' },
  { href: '/videos', icon: Video, label: 'वीडियो' },
  { href: '/politics', icon: Newspaper, label: 'राजनीति' },
  { href: '/profile', icon: User, label: 'प्रोफाइल' },
]

export default function MobileNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-gray-200 safe-area-pb"
      style={{ background: 'var(--nav-bg)' }}
    >
      <div className="flex items-center justify-around h-14">
        {items.map(({ href, icon: Icon, label }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 px-4 py-1 rounded-lg transition-colors ${
                active ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              <div className={`p-1 rounded-lg transition-colors ${active ? 'bg-[var(--primary)]' : ''}`}>
                <Icon size={18} />
              </div>
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
