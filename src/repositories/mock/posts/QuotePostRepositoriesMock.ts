import { QuotePost } from '@/entities/QuotePost'
import { IQuotePostRepositories } from '@/repositories/protocols/posts/repositories/IQuotePostRepositories'
import { v4 as uuid } from 'uuid'

class QuotePostRepositoriesMock implements IQuotePostRepositories {
  private quotePosting: QuotePost[] = []

  async create(quotePosting: QuotePost): Promise<QuotePost> {
    Object.assign(quotePosting, {
      id: uuid(),
      created_at: new Date()
    })
    this.quotePosting.push(quotePosting)
    return quotePosting
  }
}

export { QuotePostRepositoriesMock }
