import { QuotePosts } from "@prisma/client"

interface IQuotePostRepositories {
    create: ({ postId, userComment, userId }: Omit<QuotePosts, "id">) => Promise<QuotePosts>
}

export { IQuotePostRepositories }
