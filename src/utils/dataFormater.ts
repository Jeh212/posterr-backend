import { format } from 'date-fns'

export function dateFormater(date: Date) {
  const newDate = format(new Date(date), 'PPPP')
  return newDate
}
