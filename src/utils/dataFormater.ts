import { IPost } from '@/entities/protocols/IPost'
import { format } from 'date-fns'
import _ from 'lodash'

export function dateFormater(date: Date) {
  const newDate = format(new Date(date), 'PPPP')
  return newDate
}

export function compareRecentDate(data?: IPost[]): IPost[] {
  const sorted = _.orderBy(
    data,
    [element => new Date(element.created_at)],
    ['desc']
  )

  return sorted
}

export function compareOlderDate(data?: IPost[]): IPost[] {
  const sorted = _.orderBy(
    data,
    [element => new Date(element.created_at)],
    ['asc']
  )

  return sorted
}
