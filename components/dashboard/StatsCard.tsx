interface Props {
  title: string
  value: number | string
  subtitle?: string
  color: string
  icon: React.ReactNode
}

export default function StatsCard({ title, value, subtitle, color, icon }: Props) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{title}</p>
          <p className="text-3xl font-black mt-1.5" style={{ color }}>{value}</p>
          {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
        </div>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
          style={{ background: color }}
        >
          {icon}
        </div>
      </div>
    </div>
  )
}
