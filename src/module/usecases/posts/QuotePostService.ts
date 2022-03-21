import { QuotePostRepositories } from '@/repositories/prisma/posts'
import { UserRepository } from '@/repositories/prisma/users'
import { ApiError } from '@/utils/Errors'
import { QuotePosts } from '@prisma/client'

class QuotePostService {
  constructor(
    private readonly quotePostRepositories: QuotePostRepositories,
    private readonly userRepositories: UserRepository
  ) { }

  async createQuote({
    userComment,
    postId,
    userId
  }: Omit<QuotePosts, "id">): Promise<QuotePosts> {

    const user = await this.userRepositories.load(userId)

    if (!user) {
      throw new ApiError('Not Found: User not found', 404)
    }

    if (user.postCounter >= 5) {
      throw new ApiError('Bad Request: User can not post more than 5 posts a day', 400)
    }

    const quote = await this.quotePostRepositories.create({
      userComment,
      postId,
      userId,
    })

    await this.userRepositories.updatePostCounter(user.postCounter + 1, user.id);

    return quote
  }

  async listQuote(userId: string): Promise<QuotePosts[]> {

    if (!userId) {
      throw new ApiError('Not Found: User not found', 404)
    }

    const quotes = await this.quotePostRepositories.list(userId);

    return quotes
  }
}

export { QuotePostService }
