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
}
