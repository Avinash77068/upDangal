import type { AdItem } from '@/types'

interface InlineAdProps {
  ad: AdItem
  className?: string
}

export default function InlineAd({ ad, className = '' }: InlineAdProps) {
  return (
    <div className={`my-6 rounded-xl overflow-hidden border border-gray-200 ${className}`}>
      <div className="flex items-center justify-between px-3 py-1 bg-gray-50 border-b border-gray-200">
        <span className="ad-label">{ad.tagline || 'Sponsored'}</span>
        <span className="text-[10px] text-gray-400">{ad.sponsor}</span>
      </div>
      <div
        className="flex flex-col sm:flex-row items-center gap-4 p-5"
        style={{ background: `linear-gradient(120deg, ${ad.bgColor || '#FF9900'} 0%, ${ad.bgColor || '#FF9900'}aa 100%)` }}
      >
        <div className="flex-1 text-center sm:text-left">
          <h4 className="text-white font-bold text-lg mb-1">{ad.title}</h4>
          {ad.description && (
            <p className="text-white/80 text-sm">{ad.description}</p>
          )}
        </div>
        <a
          href="#"
          className="flex-shrink-0 bg-white text-gray-900 font-extrabold text-sm px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
        >
          {ad.ctaText}
        </a>
      </div>
    </div>
  )
}
