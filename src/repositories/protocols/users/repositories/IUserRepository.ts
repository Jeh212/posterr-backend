import { User } from '@/entities/User'

export interface IUserRepository {
  load: (id: string) => Promise<User | null>
  createUser: (user: User) => Promise<User>
  updatePostCounter: (postCounter: number, id: string) => Promise<number>
}
