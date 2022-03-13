import { QuotePost } from '@/entities/mockEntities/QuotePost'

interface IQuotePostRepositories {
  create: ({
    userComment,
    created_at,
    userId,
    postId
  }: QuotePost) => Promise<QuotePost>
}

export { IQuotePostRepositories }
