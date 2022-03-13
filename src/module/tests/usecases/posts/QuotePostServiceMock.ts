import { QuotePost } from '@/entities/mockEntities/QuotePost'
import { IQuotePostRepositories } from '@/repositories/mock/protocols/posts/repositories/IQuotePostRepositories'

class QuotePostServiceMock {
  constructor(
    private readonly quotePostRepositoriesMock: IQuotePostRepositories
  ) { }

  async createQuote({
    userComment,
    postId,
    userId,
    created_at
  }: QuotePost): Promise<QuotePost> {

    const quote = await this.quotePostRepositoriesMock.create({
      userComment,
      postId,
      userId,
      created_at
    })

    return quote
  }
}

export { QuotePostServiceMock }
