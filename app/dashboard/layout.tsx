'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const router = useRouter()
  const pathname = usePathname()
  const isLoginPage = pathname === '/dashboard/login'

  useEffect(() => {
    if (!isAuthenticated && !isLoginPage) {
      router.replace('/dashboard/login')
    }
  }, [isAuthenticated, isLoginPage, router])

  return (
    // Full-screen overlay that sits above the main site layout
    <div className="fixed inset-0 z-[200] bg-gray-100 overflow-hidden flex">
      {isLoginPage ? (
        <div className="flex-1 overflow-auto">{children}</div>
      ) : isAuthenticated ? (
        <>
          <DashboardSidebar />
          <div className="flex-1 overflow-y-auto">{children}</div>
        </>
      ) : null}
    </div>
  )
}
