import { QuotePost } from '@/entities/QuotePost'

interface IQuotePostRepositories {
  create: ({
    userComment,
    created_at,
    _userId,
    _postId
  }: QuotePost) => Promise<QuotePost>
}

export { IQuotePostRepositories }
