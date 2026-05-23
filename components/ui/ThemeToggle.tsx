'use client'

import { useThemeStore } from '@/store/themeStore'
import { Leaf, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore()
  const isGreen = theme === 'green'

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-all"
    >
      {isGreen ? (
        <>
          <Sun size={15} className="text-yellow-300" />
          <span className="hidden sm:inline text-xs">Orange</span>
        </>
      ) : (
        <>
          <Leaf size={15} className="text-green-400" />
          <span className="hidden sm:inline text-xs">Green</span>
        </>
      )}
      <div className={`w-8 h-4 rounded-full relative transition-colors ${isGreen ? 'bg-green-500' : 'bg-orange-400'}`}>
        <div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-all ${isGreen ? 'left-4' : 'left-0.5'}`} />
      </div>
    </button>
  )
}
