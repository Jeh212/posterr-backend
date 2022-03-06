import { IFollowRepository } from '@/repositories/protocols/usersProfile/repositories'
import { dateFormater } from '@/utils/dataFormater'
import { v4 as uuid } from 'uuid'

export class FollowRepositoryMock implements IFollowRepository {
  private following: Following[] = []

  async createFollowing(following: Following): Promise<Following> {
    Object.assign(following, {
      id: uuid(),
      created_at: dateFormater(new Date())
    })

    this.following.push(following)

    return following
  }

  async getFollowing(followingId?: string): Promise<Following | undefined> {
    const user = this.following.find(
      (element: Following) => element.followingId === followingId
    )
    return user
  }

  async removeFollowing(followingId?: string): Promise<string> {
    this.following.pop()
    return `${followingId}`
  }

  async listFollowing(userId?: string): Promise<Following[] | undefined> {
    const list: Following[] = []

    this.following.forEach((element: Following) => {
      if (element.userId === userId) list.push(element)
    })

    return list
  }
}
