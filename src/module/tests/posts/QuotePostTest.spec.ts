import { Post } from '@/entities/mockEntities/Post'
import { QuotePost } from '@/entities/mockEntities/QuotePost'
import { QuotePostService } from '@/module/tests/usecases/posts/QuotePostService'
import { QuotePostRepositoriesMock } from '@/repositories/mock/posts/QuotePostRepositoriesMock'

describe('QuotePostTest', () => {
  it('Should be able to repost another user post and put a quote', async () => {
    const quoteMockRepo = new QuotePostRepositoriesMock()
    const quotePostSut = new QuotePostService(quoteMockRepo)

    const userPost: Post = {
      id: '147',
      created_at: new Date(),
      postContent: 'I feel nice, when i am coding',
      userId: '789'
    }

    const quotePost: QuotePost = {
      userComment: 'Code is Fun',
      postId: '147',
      userId: '789',
      created_at: new Date()
    }

    const createQuote = await quotePostSut.createQuote(quotePost)


    expect(createQuote.id).toBe(createQuote.id)
    expect(createQuote._userId).toBe(userPost.userId)
    expect(createQuote._postId).toBe(userPost.id)
  })
})
