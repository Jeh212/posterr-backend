import { Reposting } from '@/entities/mockEntities/Repost'
import { RepostRepositoriesMock } from '@/repositories/mock/posts/RepostRepositoriesMock'

class RepostServiceMock {
  constructor(
    private readonly repostRepositoriesMock: RepostRepositoriesMock
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
