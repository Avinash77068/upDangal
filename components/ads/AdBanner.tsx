import type { AdItem } from '@/types'

interface AdBannerProps {
  ad: AdItem
  className?: string
}

export default function AdBanner({ ad, className = '' }: AdBannerProps) {
  return (
    <div className={`w-full overflow-hidden rounded-lg border border-gray-200 ${className}`}>
      <div className="flex items-center justify-between px-3 py-1 bg-gray-50 border-b border-gray-200">
        <span className="ad-label">{ad.tagline || 'Advertisement'}</span>
        <span className="text-[10px] text-gray-400">Ad</span>
      </div>
      <div
        className="flex items-center justify-between px-6 py-4 gap-4"
        style={{ background: `linear-gradient(135deg, ${ad.bgColor || '#1a1a2e'} 0%, ${ad.bgColor || '#16213e'}dd 100%)` }}
      >
        <div className="flex-1">
          <p className="text-[10px] text-white/60 uppercase tracking-widest mb-1">{ad.sponsor}</p>
          <h3 className="text-white font-bold text-base md:text-lg leading-snug mb-1">{ad.title}</h3>
          {ad.description && (
            <p className="text-white/70 text-xs hidden md:block">{ad.description}</p>
          )}
        </div>
        <a
          href="#"
          className="flex-shrink-0 bg-white text-gray-900 font-bold text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-transform whitespace-nowrap"
        >
          {ad.ctaText}
        </a>
      </div>
    </div>
  )
}
