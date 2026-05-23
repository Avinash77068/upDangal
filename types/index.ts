export interface Author {
  name: string
  avatar: string
  role?: string
}

export interface Article {
  id: string
  title: string
  excerpt: string
  slug: string
  category: string
  categorySlug: string
  image: string
  imageAlt?: string
  author: Author
  publishedAt: string
  readTime: number
  isLive?: boolean
  isTrending?: boolean
  isSponsored?: boolean
  isBreaking?: boolean
  views?: number
  tags?: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  nameHindi: string
  color: string
  bgColor: string
}

export interface VideoItem {
  id: string
  title: string
  thumbnail: string
  duration: string
  views: string
  publishedAt: string
  category: string
  isShort?: boolean
  author: Author
}

export interface AdItem {
  id: string
  type: 'leaderboard' | 'sidebar' | 'inline' | 'sponsored' | 'mobile-sticky'
  title: string
  description?: string
  ctaText: string
  sponsor: string
  tagline?: string
  bgColor?: string
}

export interface TrendingTopic {
  id: string
  rank: number
  title: string
  category: string
  views: string
  isHot?: boolean
}

export type Theme = 'orange' | 'green'
