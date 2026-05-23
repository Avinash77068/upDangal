import Link from 'next/link'

interface SectionHeaderProps {
  title: string
  titleHindi?: string
  viewAllHref?: string
  className?: string
}

export default function SectionHeader({ title, titleHindi, viewAllHref, className = '' }: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <div className="section-border-left">
        <h2 className="text-xl font-extrabold text-[var(--section-head)] leading-none">
          {titleHindi || title}
        </h2>
        {titleHindi && (
          <span className="text-xs text-gray-500 font-medium mt-0.5 block">{title}</span>
        )}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-xs font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)] flex items-center gap-1 transition-colors"
        >
          सभी देखें
          <span className="text-base leading-none">→</span>
        </Link>
      )}
    </div>
  )
}
