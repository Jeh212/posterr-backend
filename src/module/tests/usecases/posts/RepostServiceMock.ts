import { Reposting } from '@/entities/mockEntities/Repost'
import { IRepostingRepositories } from '@/repositories/mock/protocols/posts/repositories/IRepostingRepositories'

class RepostServiceMock {
  constructor(
    private readonly repostRepositoriesMock: IRepostingRepositories
  ) { }

  async create({ userId, postId, created_at }: Reposting) {
    const createdReposting = await this.repostRepositoriesMock.createReposting({
      userId,
      postId,
      created_at
    })
    return createdReposting
  }
}
export { RepostServiceMock }
