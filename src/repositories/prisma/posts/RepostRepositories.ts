import { prismaClient } from "@/infra/database/prismaClient";
import { IRepostingRepositories } from "@/repositories/prisma/protocols/posts/repositories/IRepostingRepositories";
import { ApiError } from "@/utils/Errors";
import { ReTweets } from "@prisma/client";


class RepostRepositories implements IRepostingRepositories {

    async createReposting({ userId, postId }: Omit<ReTweets, 'id'>): Promise<ReTweets> {
        try {
            const repost = await prismaClient.reTweets.create({
                data: {
                    userId,
                    created_at: new Date(),
                    postId
                }
            })
            return repost
        } catch (err) {
            throw new ApiError('Internal Server Error', 500)
        }
    }

    async listRetweets(userId: string): Promise<ReTweets[]> {
        try {
            const repost = await prismaClient.reTweets.findMany({
                where: {
                    userId
                }
            });
            return repost
        } catch (err) {
            throw new ApiError('Internal Server Error', 500)
        }
    }
}
export { RepostRepositories }