import { QuotePosts } from "@prisma/client"

interface IQuotePostRepositories {
    create: ({
        userComment,
        created_at,
        userId,
        postId
    }: QuotePosts) => Promise<QuotePosts>
}

export { IQuotePostRepositories }
