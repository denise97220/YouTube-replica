const formatter = new Intl.NumberFormat('zh-TW', { minimumIntegerDigits: 2 })

export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 60 / 60)
  const minutes = Math.floor((duration - hours * 60 * 60) / 60)
  const seconds = duration % 60

  if (hours > 0) {
    return `${hours}:${formatter.format(minutes)}:${formatter.format(seconds)}`
  }

  return `${minutes}:${formatter.format(seconds)}`
}
