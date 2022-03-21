import { prismaClient } from "@/infra/database/prismaClient";
import { IFollowRepository } from "@/repositories/prisma/protocols/users/repositories/IFollowRepository";
import { ApiError } from "@/utils/Errors";
// import { InternalServerError } from "@/utils/Errors";
import { Following, Users } from "@prisma/client";


class FollowRepository implements IFollowRepository {


    async createFollowing({ userId, followingId }: Omit<Following, 'id'>): Promise<Following> {

        try {
            const following = await prismaClient.following.create({
                data: {
                    created_at: new Date(),
                    followingId,
                    userId
                }
            })

            return following;

        } catch (err: any) {
            throw new ApiError('Internal Server Error', 500)
        }

    }

    async getFollowing(followingId: string): Promise<Following | null> {

        try {
            const following = await prismaClient.following.findFirst({
                where: {
                    followingId
                }
            })

            return following
        } catch (err) {
            throw new ApiError('Internal Server Error', 500)

        }

    };
    async removeFollowing(followingId: string): Promise<string> {

        try {
            const removeFollowing = await prismaClient.following.delete({
                where: {
                    id: followingId
                }
            })
            return removeFollowing.followingId
        } catch (err) {
            throw new ApiError('Internal Server Error', 500)
        }

    }
    async listFollowing(userId: string): Promise<Following[] | []> {

        try {
            const following = await prismaClient.following.findMany({ where: { userId } })

            return following;
        } catch (err) {
            throw new ApiError('Internal Server Error', 500)
        }

    }

    async includesFollowing(followingId: string, userId: string): Promise<Following | null> {

        try {
            const getFollowing = await prismaClient.following.findFirst({
                where: {
                    userId,
                    AND: [{ followingId }]
                }
            })
            return getFollowing;
        } catch (err) {
            throw new ApiError('Internal Server Error', 500)
        }
    }

    async listFollowers(followingId: string): Promise<Following[]> {

        try {
            const followers = await prismaClient.following.findMany({
                where: {
                    followingId
                }
            })

            return followers
        } catch (err) {
            throw new ApiError('Internal Server Error', 500)
        }
    }


}
export { FollowRepository }