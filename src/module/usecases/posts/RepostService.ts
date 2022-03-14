
import { RepostRepositories } from '@/repositories/prisma/posts'
import { ReTweets } from '@prisma/client'

class RepostService {
  constructor(
    private readonly repostRepositories: RepostRepositories
  ) { }

  // async create({ userId, postId, created_at }: ReTweets) {
  //   const createdReposting = await this.repostRepositories.createReposting({
  //     userId,
  //     postId,
  //     created_at
  //   })
  //   return createdReposting
  // }
}
export { RepostService }
