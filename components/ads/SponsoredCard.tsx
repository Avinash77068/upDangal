import type { AdItem } from '@/types'
import { imageUrl } from '@/lib/utils'
import Image from 'next/image'

interface SponsoredCardProps {
  ad: AdItem
}

export default function SponsoredCard({ ad }: SponsoredCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl(999, 640, 360)}
          alt={ad.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 640px"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <span className="absolute top-3 left-3 bg-gray-600/80 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">
          {ad.tagline}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white/70 text-xs mb-1">{ad.sponsor}</p>
          <h4 className="text-white font-bold text-sm leading-snug line-clamp-2">{ad.title}</h4>
        </div>
      </div>
      <div className="p-4">
        {ad.description && (
          <p className="text-gray-500 text-sm mb-3 line-clamp-2">{ad.description}</p>
        )}
        <a
          href="#"
          className="inline-block text-[var(--primary)] font-bold text-sm hover:underline"
        >
          {ad.ctaText} →
        </a>
      </div>
    </div>
  )
}
