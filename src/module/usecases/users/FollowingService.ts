import { FollowRepository, UserRepository } from '@/repositories/prisma/users'
import { Following, Users } from '@prisma/client'

class FollowingService {

  constructor(
    private readonly followRepository: FollowRepository,
    private readonly userRepositories: UserRepository

  ) { }

  async createFollowing({
    userId,
    followingId,
    created_at = new Date
  }: Omit<Following, 'id'>): Promise<Following> {

    if (userId === followingId) {
      throw new Error('Cannot follow yourself')
    }

    const alreadyFollowing = await this.followRepository.includesFollowing(followingId, userId);

    if (alreadyFollowing) {
      throw new Error('Already following this user')
    }

    const follow = await this.followRepository.createFollowing({
      userId,
      followingId,
      created_at
    })

    return follow
  }

  async unFollow(followingId: string): Promise<string> {

    const findFollowingUser = await this.followRepository.getFollowing(
      followingId
    );

    if (!findFollowingUser) {
      throw new Error('User not Found')
    }

    const unfollowed = await this.followRepository.removeFollowing(
      findFollowingUser.id
    );

    const getUnfollowedUser = await this.userRepositories.load(unfollowed);


    return unfollowed ? `You stopped following ${getUnfollowedUser?.name}` : 'Something happened while unfollow this user!'

  };

  async listFollowing(userId: string): Promise<any> {

    const following = await this.followRepository.listFollowing(userId)

    const newFollowingList = [];

    if (following.length === 0) {
      throw new Error('There is not any following yet!')
    }

    for (let i = 0; i < following.length; i++) {

      const user = await this.userRepositories.load(following[i].followingId);

      const newObj = {
        ...following[i],
        followingId: user
      }

      newFollowingList.push(newObj)
    }

    return newFollowingList

  }
}
export { FollowingService }