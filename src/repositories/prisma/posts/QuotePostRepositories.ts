import { InternalServerError } from "@/utils/Errors";
import { IQuotePostRepositories } from "@/repositories/prisma/protocols/posts/repositories/IQuotePostRepositories";
import { QuotePosts } from "@prisma/client";

import { prismaClient } from "@/infra/database/prismaClient";


class QuotePostRepositories implements IQuotePostRepositories {
    async create({ userComment, created_at, userId, postId }: QuotePosts): Promise<QuotePosts> {

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