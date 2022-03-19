import { QuotePostRepositories } from '@/repositories/prisma/posts'
import { UserRepository } from '@/repositories/prisma/users'
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
      throw new Error('User not found')
    }

    if (user.postCounter >= 5) {
      throw new Error('User can not post more than 5 post a day')
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
      throw new Error('User id can not be undefined!')
    }

    const quotes = await this.quotePostRepositories.list(userId);

    return quotes
  }
}

export { QuotePostService }
