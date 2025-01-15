export function formatViews(views: number) {
  const viewFormatter = new Intl.NumberFormat(undefined, { notation: 'compact' })

  return viewFormatter.format(views)
}
