'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type UserRole = 'admin' | 'editor' | 'reporter'

interface Credential {
  username: string
  password: string
  name: string
  email: string
  role: UserRole
}

const USERS: Credential[] = [
  { username: 'admin',    password: 'updangal@123',  name: 'Admin',         email: 'admin@updangal.com',    role: 'admin'    },
  { username: 'editor',   password: 'editor@123',    name: 'Editor',        email: 'editor@updangal.com',   role: 'editor'   },
  { username: 'reporter', password: 'reporter@123',  name: 'Reporter',      email: 'reporter@updangal.com', role: 'reporter' },
]

export interface AuthUser {
  name: string
  email: string
  username: string
  role: UserRole
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
        const match = USERS.find(
          (u) => u.username === username && u.password === password
        )
        if (match) {
          set({
            isAuthenticated: true,
            user: { name: match.name, email: match.email, username: match.username, role: match.role },
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
