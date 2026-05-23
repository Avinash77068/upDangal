import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'live' | 'breaking' | 'trending' | 'sponsored' | 'category'
  className?: string
  color?: string
}

export default function Badge({ children, variant = 'primary', className, color }: BadgeProps) {
  const base = 'inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide'

  const variants = {
    primary:   'bg-[var(--primary)] text-white',
    live:      'bg-red-600 text-white',
    breaking:  'bg-red-600 text-white animate-pulse',
    trending:  'bg-orange-500 text-white',
    sponsored: 'bg-gray-500 text-white',
    category:  color ? '' : 'bg-[var(--primary)] text-white',
  }

  const style = variant === 'category' && color
    ? { backgroundColor: color, color: 'white' }
    : undefined

  return (
    <span className={cn(base, variants[variant], className)} style={style}>
      {variant === 'live' && <span className="w-1.5 h-1.5 rounded-full bg-white pulse-live inline-block" />}
      {children}
    </span>
  )
}
