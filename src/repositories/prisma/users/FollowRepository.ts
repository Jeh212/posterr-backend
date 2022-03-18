import { prismaClient } from "@/infra/database/prismaClient";
import { IFollowRepository } from "@/repositories/prisma/protocols/users/repositories/IFollowRepository";
import { InternalServerError } from "@/utils/Errors";
import { Following, Users } from "@prisma/client";


class FollowRepository implements IFollowRepository {


    async createFollowing({ userId, followingId, created_at }: Omit<Following, 'id'>): Promise<Following> {

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


        const following = await prismaClient.following.findFirst({
            where: {
                followingId
            }
        })

        return following
    };

    async removeFollowing(followingId: string): Promise<string> {

        try {
            const removeFollowing = await prismaClient.following.delete({
                where: {
                    id: followingId
                }
            })
            return removeFollowing.followingId
        } catch (error) {
            console.log(error);
            throw new Error()
        }

    }
    async listFollowing(userId: string): Promise<Following[] | []> {

        return await prismaClient.following.findMany({ take: 10, where: { userId } });
    }

    async includesFollowing(followingId: string, userId: string): Promise<Following | null> {

        const getFollowing = await prismaClient.following.findFirst({
            where: {
                userId,
                AND: [{ followingId }]
            }
        })
        return getFollowing;
    }
}
export { FollowRepository }