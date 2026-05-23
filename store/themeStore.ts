'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Theme } from '@/types'

interface ThemeStore {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'orange',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'orange' ? 'green' : 'orange',
        })),
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'updangal-theme' }
  )
)
