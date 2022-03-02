import { IUser } from '@/entities/protocols/IUser'
import { ILoadUserRepository } from '@/repositories/protocols/users/repositories/ILoadUserRepository'

class LoadUserService {
  constructor(private readonly loadUser: ILoadUserRepository) {}

  async execute(userId: string): Promise<IUser | undefined> {
    return await this.loadUser.load(userId)
  }
}
export { LoadUserService }
