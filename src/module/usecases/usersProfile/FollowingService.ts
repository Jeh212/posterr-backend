import { FollowRepositoryMock } from '@/repositories/mock/usersProfile/FollowRepositoryMock'

export class FollowingService {
  constructor(private readonly followRepositoryMock: FollowRepositoryMock) {}

  async createFollowing({
    userId,
    followingId,
    created_at = new Date()
  }: Following): Promise<Following> {
    if (userId === followingId) {
      throw new Error('Cannot follow yourself')
    }
    const follow = await this.followRepositoryMock.createFollowing({
      userId,
      followingId,
      created_at
    })

    return follow
  }

  async unFollow(followingId?: string): Promise<string> {
    const findFollowingUser = await this.followRepositoryMock.getFollowing(
      followingId
    )
    if (findFollowingUser) {
      const unfollow = await this.followRepositoryMock.removeFollow(followingId)
      return unfollow
    } else {
      throw Error('User not Found')
    }
  }

  async listFollowing(userId?: string): Promise<Following[] | undefined> {
    const list = this.followRepositoryMock.listFollowing(userId)

    return list
  }
}