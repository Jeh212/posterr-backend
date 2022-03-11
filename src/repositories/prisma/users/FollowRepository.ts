import { prismaClient } from "@/infra/database/prismaClient";
import { IFollowRepository } from "@/repositories/protocols/users/repositories";
import { InternalServerError } from "@/utils/Errors";


class FollowRepository implements IFollowRepository {


    async createFollowing({ userId, followingId, created_at }: Following): Promise<Following> {

        try {
            const following = await prismaClient.following.create({
                data: {
                    created_at,
                    followingId,
                    userId
                }
            })

            return following;

        } catch (error) {
            throw new InternalServerError(error)
        }

    }

    async getFollowing(followingId: string): Promise<Following | null> {

        const following = await prismaClient.following.findUnique({
            where: {
                id: followingId
            }
        })
        return following
    }
    async removeFollowing(followingId: string): Promise<string> {

        const removeFollowing = await prismaClient.following.delete({ where: { id: followingId } })

        return removeFollowing.followingId

    }
    async listFollowing(userId: string): Promise<Following[] | undefined> {

        return await prismaClient.following.findMany({ take: 10 })

    }
}
export { FollowRepository }