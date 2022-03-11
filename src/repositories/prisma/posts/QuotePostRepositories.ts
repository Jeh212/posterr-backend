import { QuotePost } from "@/entities/QuotePost";
import { prismaClient } from "@/infra/database/prismaClient";
import { IQuotePostRepositories } from "@/repositories/protocols/posts/repositories/IQuotePostRepositories";
import { InternalServerError } from "@/utils/Errors";



class QuotePostRepositories implements IQuotePostRepositories {
    async create({ userComment, created_at, userId, postId }: QuotePost): Promise<QuotePost> {

        try {
            const quote = await prismaClient.quotePosts.create({
                data: {
                    userComment,
                    created_at,
                    userId,
                    postId
                }
            })
            return quote
        } catch (error) {
            throw new InternalServerError(error)
        }
    }
}

export { QuotePostRepositories }