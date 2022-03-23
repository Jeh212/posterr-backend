import { FollowRepository, UserRepository } from '@/repositories/prisma/users'
import { dateFormater } from '@/utils/dataFormater';
import { ApiError } from '@/utils/Errors';
import { Following, Users } from '@prisma/client'

class FollowingService {

  constructor(
    private readonly followRepository: FollowRepository,
    private readonly userRepositories: UserRepository

  ) { }

  async createFollowing({
    userId,
    followingId
  }: Omit<Following, 'id'>): Promise<Following> {

    const findUserIfExist = await this.userRepositories.load(userId);

    if (!findUserIfExist) {
      throw new ApiError('Not Found: User not found!', 400)
    }

    if (userId === followingId) {
      throw new ApiError('Bad Request: Cannot follow yourself', 400)
    }

    const alreadyFollowing = await this.followRepository.includesFollowing(followingId, userId);

    if (alreadyFollowing) {
      throw new ApiError('Bad Request: Already following this user', 400)
    }

    const follow = await this.followRepository.createFollowing({
      userId,
      followingId,
      created_at: new Date()
    })

    return follow
  }

  async unFollow(followingId: string): Promise<string> {

    const findFollowingUser = await this.followRepository.getFollowing(
      followingId
    );

    if (!findFollowingUser) {
      throw new ApiError('Not Found: Not followign this user!', 404)
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
      throw new ApiError('Bad Request: There is not any following yet!', 400)
    }

    for (let i = 0; i < following.length; i++) {

      const user = await this.userRepositories.load(following[i].followingId);


      const newObj = {
        id: following[i].id,
        userId: following[i].userId,
        created_at: dateFormater(following[i].created_at),
        followingInfo: {
          ...user,
          joinDate: dateFormater(user?.joinDate)
        }
      }

      newFollowingList.push(newObj)
    }

    return newFollowingList

  }
  async listFollowers(followingId: string): Promise<any> {

    const followers = await this.followRepository.listFollowers(followingId);

    const newFollowerList = [];

    if (followers.length === 0) {
      throw new ApiError('Bad Request: There is not any following yet!', 400)
    }

    for (let i = 0; i < followers.length; i++) {

      const user = await this.userRepositories.load(followers[i].userId);

      const newObj = {
        id: followers[i].id,
        userId: followers[i].userId,
        created_at: dateFormater(followers[i].created_at),
        followersInfo: {
          id: user?.id,
          name: user?.name,
          joinDate: dateFormater(user?.joinDate)
        }
      }

      newFollowerList.push(newObj)
    }

    return newFollowerList

  }
}
export { FollowingService }