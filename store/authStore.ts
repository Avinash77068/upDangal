'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const CREDENTIALS = { username: 'admin', password: 'updangal@123' }

interface AuthUser {
  name: string
  email: string
  username: string
}

interface AuthStore {
  user: AuthUser | null
  isAuthenticated: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (username, password) => {
        if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
          set({
            isAuthenticated: true,
            user: { name: 'Admin', email: 'admin@updangal.com', username },
          })
          return true
        }
        return false
      },
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: 'updangal-auth' }
  )
)
