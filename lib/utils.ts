export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('hi-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function timeAgo(dateString: string): string {
  const now = new Date()
  const date = new Date(dateString)
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMins < 1) return 'अभी'
  if (diffMins < 60) return `${diffMins} मिनट पहले`
  if (diffHours < 24) return `${diffHours} घंटे पहले`
  if (diffDays === 1) return 'कल'
  return `${diffDays} दिन पहले`
}

export function imageUrl(seed: number, width = 800, height = 450): string {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
