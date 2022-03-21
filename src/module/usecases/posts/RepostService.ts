
import { RepostRepositories } from '@/repositories/prisma/posts'
import { UserRepository } from '@/repositories/prisma/users'
import { ApiError } from '@/utils/Errors'
import { ReTweets } from '@prisma/client'

class RepostService {
  constructor(
    private readonly repostRepositories: RepostRepositories,
    private readonly userRepositories: UserRepository
  ) { }

  async create({ userId, postId }: Omit<ReTweets, 'id'>) {

    const user = await this.userRepositories.load(userId)

    if (!user) {
      throw new ApiError('Not Found: User not found', 404)

    }

    if (user.postCounter >= 5) {
      throw new Error('User can not post more than 5 post a day')
    }

    const createdReposting = await this.repostRepositories.createReposting({
      userId,
      postId
    })

    await this.userRepositories.updatePostCounter(user.postCounter + 1, user.id);

    return createdReposting
  }
  async list(userId: string): Promise<ReTweets[]> {


    const list = await this.repostRepositories.listRetweets(userId);

    if (list === []) {
      throw new ApiError('Not Found: There is nothing to show', 404)
    }

    return list;
  }
}
export { RepostService }
