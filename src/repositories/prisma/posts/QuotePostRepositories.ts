// import { InternalServerError } from "@/utils/Errors";
import { IQuotePostRepositories } from "@/repositories/prisma/protocols/posts/repositories/IQuotePostRepositories";
import { QuotePosts } from "@prisma/client";

import { prismaClient } from "@/infra/database/prismaClient";


class QuotePostRepositories implements IQuotePostRepositories {


    async list(userId: string): Promise<QuotePosts[]> {

        const listQuote = await prismaClient.quotePosts.findMany({
            where: {
                userId
            }
        });

        return listQuote
    }

    async create({ postId, userComment, userId }: Omit<QuotePosts, "id">): Promise<QuotePosts> {

        try {
            const quote = await prismaClient.quotePosts.create({
                data: {
                    postId,
                    userComment,
                    userId,
                    created_at: new Date()
                }
            })
            return quote
        } catch (error) {
            // throw new InternalServerError(error)
            throw new Error('Error creating a Quotepost')

        }
    }
}

export { QuotePostRepositories }