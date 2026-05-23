'use client'

import Link from 'next/link'
import { Home, Newspaper, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { navCategories } from '@/data/categories'

const items = [
  { href: '/', icon: Home, label: 'होम', color: undefined },
  ...navCategories.slice(0, 3).map((cat) => ({
    href: `/${cat.slug}`,
    icon: Newspaper,
    label: cat.nameHindi,
    color: cat.color,
  })),
  { href: '/profile', icon: User, label: 'प्रोफाइल', color: undefined },
]

export default function MobileNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-gray-200 safe-area-pb"
      style={{ background: 'var(--nav-bg)' }}
    >
      <div className="flex items-center justify-around h-14">
        {items.map(({ href, icon: Icon, label, color }) => {
          const active = pathname === href
          const activeColor = color ?? 'var(--primary)'
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 px-4 py-1 rounded-lg transition-colors ${
                active ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              <div
                className="p-1 rounded-lg transition-colors"
                style={active ? { background: activeColor } : undefined}
              >
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
