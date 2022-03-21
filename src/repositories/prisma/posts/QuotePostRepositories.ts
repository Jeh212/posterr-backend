// import { InternalServerError } from "@/utils/Errors";
import { IQuotePostRepositories } from "@/repositories/prisma/protocols/posts/repositories/IQuotePostRepositories";
import { QuotePosts } from "@prisma/client";

import { prismaClient } from "@/infra/database/prismaClient";
import { ApiError } from "@/utils/Errors";


class QuotePostRepositories implements IQuotePostRepositories {


    async list(userId: string): Promise<QuotePosts[]> {

        try {
            const listQuote = await prismaClient.quotePosts.findMany({
                where: {
                    userId
                }
            });

            return listQuote

        } catch (error) {
            throw new ApiError('Internal Server Error', 500)
        }
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
            throw new ApiError('Internal Server Error', 500)
        }
    }
}

export { QuotePostRepositories }