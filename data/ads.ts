import type { AdItem } from '@/types'

export const leaderboardAd: AdItem = {
  id: 'lb1',
  type: 'leaderboard',
  title: 'Reliance Jio 5G - भारत का सबसे तेज़ नेटवर्क',
  description: 'अभी Jio 5G में अपग्रेड करें और 1Gbps स्पीड का अनुभव लें',
  ctaText: 'अभी जुड़ें',
  sponsor: 'Reliance Jio',
  tagline: 'Advertisement',
  bgColor: '#1e3a5f',
}

export const sidebarAds: AdItem[] = [
  {
    id: 'sb1',
    type: 'sidebar',
    title: 'SBI Life Insurance',
    description: 'अपने परिवार का भविष्य सुरक्षित करें',
    ctaText: 'जानें अधिक',
    sponsor: 'SBI Life',
    tagline: 'Sponsored',
    bgColor: '#1B4332',
  },
  {
    id: 'sb2',
    type: 'sidebar',
    title: 'HDFC Bank - Home Loan',
    description: '8.5% की दर से होम लोन पाएं',
    ctaText: 'आवेदन करें',
    sponsor: 'HDFC Bank',
    tagline: 'Advertisement',
    bgColor: '#1D1D1D',
  },
  {
    id: 'sb3',
    type: 'sidebar',
    title: 'Byju\'s - देश का सबसे बड़ा EdTech',
    description: 'अपने बच्चे को दें सर्वश्रेष्ठ शिक्षा',
    ctaText: 'Free Trial',
    sponsor: "Byju's",
    tagline: 'Promoted',
    bgColor: '#7B2D8B',
  },
]

export const inlineAds: AdItem[] = [
  {
    id: 'il1',
    type: 'inline',
    title: 'Tata Motors - नया EV लॉन्च',
    description: 'Tata Nexon EV Max अब सिर्फ ₹15.99 लाख में',
    ctaText: 'टेस्ट ड्राइव बुक करें',
    sponsor: 'Tata Motors',
    tagline: 'Advertisement',
    bgColor: '#1a3c5e',
  },
  {
    id: 'il2',
    type: 'inline',
    title: 'Amazon India - Sale शुरू',
    description: 'Great Indian Festival - 80% तक की छूट',
    ctaText: 'अभी खरीदें',
    sponsor: 'Amazon India',
    tagline: 'Sponsored',
    bgColor: '#FF9900',
  },
]

export const sponsoredArticleAd: AdItem = {
  id: 'sp1',
  type: 'sponsored',
  title: 'Adani Green Energy: भारत को बनाएंगे ऊर्जा में आत्मनिर्भर',
  description: 'कैसे Adani Group का 50,000 MW सोलर प्लांट भारत की ऊर्जा जरूरतों को पूरा करेगा',
  ctaText: 'पूरी कहानी पढ़ें',
  sponsor: 'Adani Green',
  tagline: 'Sponsored Content',
  bgColor: '#14532d',
}
