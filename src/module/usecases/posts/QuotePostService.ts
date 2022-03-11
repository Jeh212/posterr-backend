import { QuotePost } from '@/entities/QuotePost'
import { QuotePostRepositoriesMock } from '@/repositories/mock/posts/QuotePostRepositoriesMock'
import { IQuotePostRepositories } from '@/repositories/protocols/posts/repositories/IQuotePostRepositories'

class QuotePostService {
  constructor(
    private readonly quotePostRepositories: IQuotePostRepositories
  ) { }

  async createQuote({
    userComment,
    postId,
    userId,
    created_at
  }: QuotePost): Promise<QuotePost> {

    const quote = await this.quotePostRepositories.create({
      userComment,
      postId,
      userId,
      created_at
    })

    return quote
  }
}

export { QuotePostService }
