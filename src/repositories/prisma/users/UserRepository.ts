import { prismaClient } from "@/infra/database/prismaClient";
import { IUserRepository } from "@/repositories/prisma/protocols/users/repositories/IUserRepository";
// import { InternalServerError } from "@/utils/Errors";
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
        } catch (error) {
            throw new InternalServerError(error)
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
        } catch (error) {
            throw new InternalServerError(error)
        }



    }
    async updatePostCounter(postCounter: number, id: string): Promise<number> {
        try {

            const updateCount = await prismaClient.users.update({ data: { postCounter }, where: { id } })

            if (updateCount.postCounter !== postCounter) {
                throw Error('Was not able to count!')
            }
            return updateCount.postCounter
        } catch (error) {
            throw new InternalServerError(error)
        }

    }

}

export { UserRepository }