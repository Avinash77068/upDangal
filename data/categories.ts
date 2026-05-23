import type { Category } from '@/types'

export const categories: Category[] = [
  { id: '1', name: 'BJP', slug: 'bjp', nameHindi: 'भाजपा', color: '#E8541A', bgColor: '#FEF3EE' },
  { id: '2', name: 'Congress', slug: 'congress', nameHindi: 'कांग्रेस', color: '#1B6CA8', bgColor: '#EFF6FF' },
  { id: '3', name: 'KJP', slug: 'kjp', nameHindi: 'KJP', color: '#16A34A', bgColor: '#F0FDF4' },
  { id: '4', name: 'Elections', slug: 'elections', nameHindi: 'चुनाव 2026', color: '#7C3AED', bgColor: '#F5F3FF' },
  { id: '5', name: 'Parliament', slug: 'parliament', nameHindi: 'संसद', color: '#DC2626', bgColor: '#FEF2F2' },
  { id: '6', name: 'Alliance', slug: 'alliance', nameHindi: 'गठबंधन', color: '#D97706', bgColor: '#FFFBEB' },
  { id: '7', name: 'Analysis', slug: 'analysis', nameHindi: 'विश्लेषण', color: '#0891B2', bgColor: '#ECFEFF' },
  { id: '8', name: 'Opinion', slug: 'opinion', nameHindi: 'विचार', color: '#9333EA', bgColor: '#FAF5FF' },
]

export const navCategories = categories
