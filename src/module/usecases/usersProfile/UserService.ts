import { User } from '@/entities/User'
import { IUserRepository } from '@/repositories/protocols/usersProfile/repositories/IUserRepository'

export class UserService {
  constructor(private readonly userRespository: IUserRepository) {}

  async loadUser(userId?: string): Promise<User | undefined> {
    const loadUser = await this.userRespository.load(userId)

    if (!loadUser) {
      throw new Error('not found')
    }

    return loadUser
  }

  async createUser({ name, postCounter }: User): Promise<User> {
    const userCreate = User.create({ name, postCounter })
    const user = await this.userRespository.createUser(userCreate)
    return user
  }
}
