import { FollowRepositoryMock } from '@/repositories/mock/users/FollowRepositoryMock'
import { IFollowRepository } from '@/repositories/protocols/users/repositories'

export class FollowingService {
  constructor(private readonly followRepository: IFollowRepository) { }

  async createFollowing({
    userId,
    followingId,
    created_at = new Date()
  }: Following): Promise<Following> {
    if (userId === followingId) {
      throw new Error('Cannot follow yourself')
    }
    const follow = await this.followRepository.createFollowing({
      userId,
      followingId,
      created_at
    })

    return follow
  }

  async unFollow(followingId?: string): Promise<string> {
    const findFollowingUser = await this.followRepository.getFollowing(
      followingId
    )
    if (findFollowingUser) {
      const unfollow = await this.followRepository.removeFollowing(
        followingId
      )
      return unfollow
    } else {
      throw new Error('User not Found')
    }
  }

  async listFollowing(userId?: string): Promise<Following[] | undefined> {
    const list = this.followRepository.listFollowing(userId)

    return list
  }
}
