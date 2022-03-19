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

export function dateFormaterPosts(data: Posts[]): Promise<Posts[]> {

  let result: any = []

  data.forEach((element: Posts) => {

    let post: any = {};
    post.id = element.id,
      post.created_at = dateFormater(element.created_at),
      post.postContent = element.postContent,
      post.userId = element.userId,

      result.push(post);
  })
  return result;
}
