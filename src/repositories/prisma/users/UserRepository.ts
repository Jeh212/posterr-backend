import { prismaClient } from "@/infra/database/prismaClient";
import { IUserRepository } from "@/repositories/prisma/protocols/users/repositories/IUserRepository";
import { ApiError } from "@/utils/Errors";
import { Users } from "@prisma/client";


class UserRepository implements IUserRepository {
    async createUser({ name, postCounter }: Omit<Users, 'id'>): Promise<Users> {

        try {

            const user = await prismaClient.users.create({
                data: {
                    name,
                    postCounter,
                    joinDate: new Date()
                }
            })

            return user
        } catch (err: any) {
            throw new ApiError('Internal Server Error', 500)
        }
    }

    async load(userId: string): Promise<Users | null> {
        try {
            const user = await prismaClient.users.findUnique({
                where: {
                    id: userId
                }
            })
            return user
        } catch (err: any) {
            throw new ApiError('Internal Server Error', 500)
        }



    }
    async updatePostCounter(postCounter: number, id: string): Promise<number> {
        try {

            const updateCount = await prismaClient.users.update({ data: { postCounter }, where: { id } })

            if (updateCount.postCounter !== postCounter) {
                throw new ApiError('Bad Request: Was not able to count!', 500)
            };

            return updateCount.postCounter
        } catch (err: any) {
            throw new ApiError('Internal Server Error', 500)
        }

    }

    async alreadyTakenUser(name: string): Promise<Users | null> {

        try {
            const user = await prismaClient.users.findFirst({
                where: {
                    name
                }
            });

            return user
        } catch (err: any) {
            throw new ApiError('Internal Server Error', 500)
        }

    }
}

export { UserRepository }