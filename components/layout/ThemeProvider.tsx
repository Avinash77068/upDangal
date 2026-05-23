'use client'

import { useEffect } from 'react'
import { useThemeStore } from '@/store/themeStore'

const THEME_VARS = {
  orange: {
    '--primary':       '#E8541A',
    '--primary-hover': '#C94315',
    '--primary-light': '#FEF3EE',
    '--primary-dark':  '#7C2D12',
    '--nav-bg':        '#1C0A00',
    '--header-bar':    '#E8541A',
    '--accent':        '#F97316',
    '--accent-gold':   '#D97706',
    '--breaking-bg':   '#DC2626',
    '--section-head':  '#1C0A00',
    '--card-badge':    '#E8541A',
  },
  green: {
    '--primary':       '#15803D',
    '--primary-hover': '#166534',
    '--primary-light': '#e4eee7',
    '--primary-dark':  '#052E16',
    '--nav-bg':        '#052E16',
    '--header-bar':    '#15803D',
    '--accent':        '#22C55E',
    '--accent-gold':   '#84CC16',
    '--breaking-bg':   '#DC2626',
    '--section-head':  '#052E16',
    '--card-badge':    '#15803D',
  },
} as const

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((s) => s.theme)

  useEffect(() => {
    const root = document.documentElement
    // Direct setProperty is bulletproof — overrides @theme static tokens
    Object.entries(THEME_VARS[theme]).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }, [theme])

  return <>{children}</>
}
