import { QuotePost } from '@/entities/QuotePost'
import { QuotePostRepositoriesMock } from '@/repositories/mock/posts/QuotePostRepositoriesMock'

class QuotePostService {
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

export { QuotePostService }
