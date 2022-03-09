import { User } from '@/entities/User'
import { IUserRepository } from '@/repositories/protocols/users/repositories/IUserRepository'

export class UserService {
  constructor(private readonly userRespository: IUserRepository) {}

  async loadUser(userId?: string): Promise<User | undefined> {
    if (!userId) {
      new Error('User is Required')
    }
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

  async updatePostCounter(postCounter: number, id?: string): Promise<number> {
    const user = await this.userRespository.load(id)

    if (!user) {
      throw new Error('User not found')
    }

    const updated = this.userRespository.updatePostCounter(postCounter, user.id)

    return updated
  }
}
