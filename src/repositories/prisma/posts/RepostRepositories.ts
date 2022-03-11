import { Reposting } from "@/entities/Repost";
import { prismaClient } from "@/infra/database/prismaClient";
import { IRepostingRepositories } from "@/repositories/protocols/posts/repositories/IRepostingRepositories";
import { InternalServerError } from "@/utils/Errors";


class RepostRepositories implements IRepostingRepositories {
    async createReposting({ userId, created_at, postId }: Reposting): Promise<Reposting> {

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