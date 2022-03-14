import { QuotePostRepositories } from '@/repositories/prisma/posts'
import { QuotePosts } from '@prisma/client'

class QuotePostService {
  constructor(
    private readonly quotePostRepositories: QuotePostRepositories
  ) { }

  // async createQuote({
  //   userComment,
  //   postId,
  //   userId,
  //   created_at
  // }: QuotePosts): Promise<QuotePosts> {

  //   const quote = await this.quotePostRepositoriesMock.create({
  //     userComment,
  //     postId,
  //     userId,
  //     created_at
  //   })

  //   return quote
  // }
}

export { QuotePostService }
