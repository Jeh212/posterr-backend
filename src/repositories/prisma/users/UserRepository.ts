import { User } from "@/entities/User";
import { prismaClient } from "@/infra/database/prismaClient";
import { IUserRepository } from "@/repositories/protocols/users/repositories";
import { InternalServerError } from "@/utils/Errors";


class PrismaUserRepository implements IUserRepository {
    async createUser({ name, postCounter }: User): Promise<User> {

        try {
            const user = await prismaClient.users.create({
                data: {
                    name,
                    postCounter
                }
            })

            return user
        } catch (error) {
            throw new InternalServerError(error)

        }
    }
    async load(userid: string): Promise<User | null> {
        try {
            const user = await prismaClient.users.findUnique({
                where: {
                    id: userid
                }
            })
            return user
        } catch (error) {
            throw new InternalServerError(error)
        }



    }
    async updatePostCounter(postCounter: number, id?: string | undefined): Promise<number> {
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

export { PrismaUserRepository }