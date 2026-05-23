import type { TrendingTopic } from '@/types'

export const trendingTopics: TrendingTopic[] = [
  { id: 't1', rank: 1, title: '#BJPManifesto2026', category: 'BJP', views: '82L', isHot: true },
  { id: 't2', rank: 2, title: 'KJP-Congress गठबंधन', category: 'Alliance', views: '74L', isHot: true },
  { id: 't3', rank: 3, title: 'राहुल गांधी संविधान रैली', category: 'Congress', views: '65L', isHot: true },
  { id: 't4', rank: 4, title: 'BJP उम्मीदवार सूची', category: 'BJP', views: '58L', isHot: true },
  { id: 't5', rank: 5, title: '#KJPKilankar', category: 'KJP', views: '51L' },
  { id: 't6', rank: 6, title: 'Modi Ki Guarantee', category: 'BJP', views: '44L' },
  { id: 't7', rank: 7, title: 'KJP MLA BJP छोड़ा', category: 'KJP', views: '39L' },
  { id: 't8', rank: 8, title: '#BharatJodoNyay2', category: 'Congress', views: '35L' },
  { id: 't9', rank: 9, title: 'EVM विवाद Congress', category: 'Congress', views: '28L' },
  { id: 't10', rank: 10, title: 'UP BJP बनाम KJP', category: 'KJP', views: '22L' },
]

export const breakingNews: string[] = [
  'BREAKING: BJP ने जारी की 250 उम्मीदवारों की पहली सूची — कई दिग्गजों का टिकट कटा',
  'BREAKING: KJP-Congress सीट बंटवारा तय — UP, बिहार और राजस्थान में गठबंधन',
  'BREAKING: BJP ने कांग्रेस-KJP गठबंधन को बताया "मौकापरस्तों का जोड़"',
  'BREAKING: राहुल गांधी ने पटना रैली में BJP पर जमकर किया हमला',
  'BREAKING: KJP ने BJP के 10 विधायकों को तोड़ा, सियासी हलचल तेज',
  'BREAKING: अमित शाह बोले — हर राज्य में BJP अकेले बहुमत जीतेगी',
  'BREAKING: कांग्रेस का "न्याय पत्र" जारी, 1 लाख नौकरियों का वादा',
]
