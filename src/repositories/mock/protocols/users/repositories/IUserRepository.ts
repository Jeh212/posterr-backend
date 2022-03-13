import { User } from "@/entities/mockEntities/User"

export interface IUserRepository {
  load: (id?: string) => Promise<User | undefined>
  createUser: (user: User) => Promise<User>
  updatePostCounter: (postCounter: number, id?: string) => Promise<number>
}
