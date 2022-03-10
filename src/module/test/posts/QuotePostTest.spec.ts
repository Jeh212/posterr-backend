import { Post } from '@/entities/Post'
import { QuotePost } from '@/entities/QuotePost'
import { QuotePostService } from '@/module/usecases/posts/QuotePostService'
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
      _postId: '147',
      _userId: '789',
      created_at: new Date()
    }

    const createQuote = await quotePostSut.createQuote(quotePost)

    console.log(createQuote)

    expect(createQuote.id).toBe(createQuote.id)
    expect(createQuote._userId).toBe(userPost.userId)
    expect(createQuote._postId).toBe(userPost.id)
  })
})
