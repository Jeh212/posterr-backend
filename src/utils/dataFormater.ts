import { Posts } from '@prisma/client'
import { format } from 'date-fns'
import _ from 'lodash'

export function dateFormater(date: Date) {
  const newDate = format(new Date(date), 'PPPP')
  return newDate
}

export function compareRecentDate(data: Posts[] | null): Posts[] {
  const sorted: Posts[] = _.orderBy(
    data,
    [element => element.created_at],
    ['desc']
  )

  return sorted
}

export function compareOlderDate(data: Posts[] | null): Posts[] {
  const sorted: Posts[] = _.orderBy(
    data,
    [element => element.created_at],
    ['asc']
  )

  return sorted
}
