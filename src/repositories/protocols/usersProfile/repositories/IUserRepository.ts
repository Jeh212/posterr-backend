import { User } from '@/entities/User'

export interface IUserRepository {
  load: (userId?: string) => Promise<User | undefined>
  createUser: (user: User) => Promise<User>
}