'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X, ChevronDown, Bell, Bookmark, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navCategories } from '@/data/categories'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Image from 'next/image'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-xl' : ''}`}>
      {/* Top utility bar */}
      <div className="bg-gray-950 text-gray-400 text-[11px] hidden md:flex items-center justify-between px-6 py-1.5">
        <span>शनिवार, 23 मई 2026 | नई दिल्ली: 29°C ☀️</span>
        <div className="flex items-center gap-5">
          <span className="hover:text-white cursor-pointer">हिंदी</span>
          <span className="hover:text-white cursor-pointer">English</span>
          <span className="text-gray-700">|</span>
          <span className="hover:text-white cursor-pointer">E-Paper</span>
          <span className="hover:text-white cursor-pointer">TV</span>
          <span className="hover:text-white cursor-pointer">Subscribe</span>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{ background: 'var(--nav-bg)' }} className="px-4 lg:px-6">
        <div className="max-w-screen-xl mx-auto flex items-center h-14 gap-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="text-white">
              <img className='w-10 rounded-full object-cover scale-110' src="/logo/logo.png" alt="UpDangal" />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1 ml-6 flex-1">
            {navCategories.slice(0, 7).map((cat) => (
              <Link
                key={cat.id}
                href={`/${cat.slug}`}
                className="text-white/80 hover:text-white text-sm font-medium px-3 py-1 rounded hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {cat.nameHindi}
              </Link>
            ))}
            <button className="text-white/80 hover:text-white text-sm font-medium px-3 py-1 rounded hover:bg-white/10 transition-colors flex items-center gap-1">
              और <ChevronDown size={12} />
            </button>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Search */}
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="खोजें..."
                    className="w-full bg-white/10 text-white placeholder-white/50 text-sm px-3 py-1.5 rounded-lg border border-white/20 outline-none focus:border-white/50"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Search"
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>

            <button className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors hidden sm:flex" aria-label="Notifications">
              <Bell size={18} />
            </button>

            <button className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors hidden sm:flex" aria-label="Bookmarks">
              <Bookmark size={18} />
            </button>

            <ThemeToggle />

            <button
              className="hidden md:flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30 hover:bg-white hover:text-gray-900 transition-all"
              aria-label="Sign in"
            >
              <User size={14} />
              लॉगिन
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Category ribbon (desktop) */}
      <div
        className="hidden lg:block border-t"
        style={{ background: 'var(--primary)', borderColor: 'rgba(255,255,255,0.15)' }}
      >
        <div className="max-w-screen-xl mx-auto flex items-center gap-0 overflow-x-auto h-9 px-6">
          {navCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              className="text-white/90 hover:text-white hover:bg-white/20 text-xs font-semibold px-4 h-full flex items-center transition-colors whitespace-nowrap"
            >
              {cat.nameHindi}
            </Link>
          ))}
          <Link href="/elections" className="text-yellow-300 hover:text-yellow-200 hover:bg-white/20 text-xs font-bold px-4 h-full flex items-center transition-colors whitespace-nowrap">
            🗳️ चुनाव 2026
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed left-0 top-0 bottom-0 w-72 z-50 lg:hidden overflow-y-auto"
              style={{ background: 'var(--nav-bg)' }}
            >
              <div
                className="flex items-center justify-between p-4 border-b"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <div className="text-white font-black text-xl">UpDangal</div>
                <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white">
                  <X size={22} />
                </button>
              </div>

              <div className="p-4">
                <input
                  type="text"
                  placeholder="खोजें..."
                  className="w-full bg-white/10 text-white placeholder-white/50 text-sm px-4 py-2.5 rounded-xl border border-white/20 outline-none mb-4"
                />

                <nav className="space-y-1">
                  {navCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/${cat.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: cat.color }}
                      />
                      {cat.nameHindi}
                      <span className="text-white/40 text-xs ml-auto">{cat.name}</span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/60 text-sm">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
