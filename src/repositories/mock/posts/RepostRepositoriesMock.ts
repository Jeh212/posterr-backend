import { Reposting } from '@/entities/Repost'
import { IRepostingRepositories } from '@/repositories/protocols/posts/repositories/IRepostingRepositories'
import { v4 as uuid } from 'uuid'

class RepostRepositoriesMock implements IRepostingRepositories {
  private rePosting: Reposting[] = []

  async createReposting(rePosting: Reposting): Promise<Reposting> {
    Object.assign(rePosting, {
      id: uuid(),
      created_at: new Date()
    })
    this.rePosting.push(rePosting)
    return rePosting
  }
}
export { RepostRepositoriesMock }
