import { prismaClient } from "@/infra/database/prismaClient";
import { IRepostingRepositories } from "@/repositories/prisma/protocols/posts/repositories/IRepostingRepositories";
import { InternalServerError } from "@/utils/Errors";
import { ReTweets } from "@prisma/client";


class RepostRepositories implements IRepostingRepositories {
    async createReposting({ userId, created_at, postId }: ReTweets): Promise<ReTweets> {

        try {
            const repost = await prismaClient.reTweets.create({
                data: {
                    userId,
                    created_at,
                    postId
                }
            })

            return repost
        } catch (error) {
            throw new InternalServerError(error)
        }
    }
}
export { RepostRepositories }