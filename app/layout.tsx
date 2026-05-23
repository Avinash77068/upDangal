import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/layout/ThemeProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BreakingTicker from '@/components/layout/BreakingTicker'
import MobileNav from '@/components/layout/MobileNav'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | UpDangal - भारत की आवाज़',
    default: 'UpDangal - भारत की आवाज़ | ताज़ा खबरें, राजनीति, खेल, मनोरंजन',
  },
  description:
    'UpDangal - भारत का सबसे विश्वसनीय डिजिटल समाचार मंच। ताज़ा खबरें, राजनीति, चुनाव, खेल, मनोरंजन और विश्व समाचार।',
  keywords: ['Hindi News', 'ताज़ा खबरें', 'राजनीति', 'भारत समाचार', 'चुनाव', 'खेल'],
  authors: [{ name: 'UpDangal Editorial Team' }],
  creator: 'UpDangal',
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    siteName: 'UpDangal',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E8541A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className={`${geist.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <BreakingTicker />
          <main className="flex-1 pb-16 lg:pb-0">
            {children}
          </main>
          <Footer />
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  )
}
