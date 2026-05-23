import type { AdItem } from '@/types'

interface SidebarAdProps {
  ad?: AdItem
  image?: string
  className?: string
}

export default function SidebarAd({ ad, image, className }: SidebarAdProps) {
  return (
    <>
      {
        image ? (
          <div className={`overflow-hidden hidden sm:flex rounded-lg border border-gray-200 shadow-sm ${className}`}>
            <img src={image} alt="Ad" className={`w-full h-full shadow-lg`} />
          </div>
        ) : ad ? (
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between px-3 py-1.5 bg-gray-50 border-b border-gray-200">
              <span className="ad-label">{ad.tagline || 'Ad'}</span>
            </div>
            <div
              className="p-5 flex flex-col gap-3 min-h-[200px] items-center justify-center text-center"
              style={{ background: `linear-gradient(160deg, ${ad.bgColor || '#1a1a2e'} 0%, #000 100%)` }}
            >
              <span className="text-white/50 text-xs uppercase tracking-widest">{ad.sponsor}</span>
              <h4 className="text-white font-bold text-base leading-snug">{ad.title}</h4>
              {ad.description && (
                <p className="text-white/60 text-xs leading-relaxed">{ad.description}</p>
              )}
              <a
                href="#"
                className="mt-2 inline-block bg-white text-gray-900 font-bold text-xs px-5 py-2 rounded-full hover:scale-105 transition-transform"
              >
                {ad.ctaText}
              </a>
            </div>
          </div>
        ) : null
      }
    </>
  )
}
