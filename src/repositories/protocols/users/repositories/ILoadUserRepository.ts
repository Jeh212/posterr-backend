import { IUser } from '@/entities/protocols/IUser'

interface ILoadUserRepository {
  load(userId: string): Promise<IUser | undefined>
}

export { ILoadUserRepository }
