import { QuotePost } from '@/entities/mockEntities/QuotePost'
import { QuotePostRepositoriesMock } from '@/repositories/mock/posts/QuotePostRepositoriesMock'

class QuotePostServiceMock {
  constructor(
    private readonly quotePostRepositoriesMock: QuotePostRepositoriesMock
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
