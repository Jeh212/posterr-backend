import { QuotePost } from '@/entities/QuotePost'

interface IQuotePostRepositories {
  create: ({
    userComment,
    created_at,
    userId,
    postId
  }: QuotePost) => Promise<QuotePost>
}

export { IQuotePostRepositories }
