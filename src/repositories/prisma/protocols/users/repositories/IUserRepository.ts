import { Users } from "@prisma/client"

export interface IUserRepository {
    load: (id: string) => Promise<Users | null>
    createUser: (user: Users) => Promise<Users>
    updatePostCounter: (postCounter: number, id: string) => Promise<number>
    alreadyTakenUser: (name: string) => Promise<Users | null>;
}
