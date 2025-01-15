const DIVISIONS = [
  { amount: 60, name: 'seconds' },
  { amount: 60, name: 'minutes' },
  { amount: 24, name: 'hours' },
  { amount: 7, name: 'days' },
  { amount: 4.35, name: 'weeks' },
  { amount: 12, name: 'months' },
  { amount: Number.POSITIVE_INFINITY, name: 'years' }
]

type RelativeTimeUnits = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year'

const formatter = new Intl.RelativeTimeFormat('zh-TW', { numeric: 'always' })

export function formatTime(date: Date) {
  let duration: number = (date.getTime() - new Date().getTime()) / 1000

  for (let i = 0; i < DIVISIONS.length; i++) {
    if (Math.abs(duration) < DIVISIONS[i].amount) {
      return formatter.format(Math.round(duration), DIVISIONS[i].name as RelativeTimeUnits)
    }

    duration /= DIVISIONS[i].amount
  }
}
