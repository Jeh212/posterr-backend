import { FollowRepository, UserRepository } from '@/repositories/prisma/users'
import { ApiError } from '@/utils/Errors'
import { Users } from '@prisma/client'

class UserService {

  constructor(
    private readonly userRespository: UserRepository,
    private readonly followRepository: FollowRepository,

  ) { }

  async createUser({ name, postCounter }: Omit<Users, 'id'>): Promise<Users> {

    const takenUserName = await this.userRespository.alreadyTakenUser(name);

    if (takenUserName) {
      throw new ApiError(`Bad Request: This name '${name}' has been already taken, try another one!`, 400)
    }

    const user = await this.userRespository.createUser({ name, postCounter, joinDate: new Date() })

    return user
  }

  async loadUser(userId: string): Promise<Users | undefined> {

    if (!userId) {
      throw new ApiError('Bad Request: UserId required', 400)
    }

    const loadUser = await this.userRespository.load(userId);

    if (!loadUser) {
      throw new ApiError('Not Found: User not Found', 404)
    }

    const loadFollowing = await this.followRepository.listFollowing(userId)

    const loadFollowers = await this.followRepository.listFollowers(userId)


    const user = {

      ...loadUser,
      following: loadFollowing ? loadFollowing.length : 0,
      followers: loadFollowers ? loadFollowers.length : 0

    }

    return user
  }

  async updatePostCounter(postCounter: number, id: string): Promise<number> {

    const updated = this.userRespository.updatePostCounter(
      postCounter,
      id
    )

    return updated
  }
}
export { UserService }