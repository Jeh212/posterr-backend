import { Reposting } from '@/entities/Repost'
import { IRepostingRepositories } from '@/repositories/protocols/posts/repositories/IRepostingRepositories'

class RepostService {
  constructor(
    private readonly repostRepositories: IRepostingRepositories
  ) { }

  async create({ userId, postId, created_at }: Reposting) {
    const createdReposting = await this.repostRepositories.createReposting({
      userId,
      postId,
      created_at
    })
    return createdReposting
  }
}
export { RepostService }
