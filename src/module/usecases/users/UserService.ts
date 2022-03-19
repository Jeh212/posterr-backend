import { UserRepository } from '@/repositories/prisma/users'
import { Users } from '@prisma/client'

class UserService {

  constructor(private readonly userRespository: UserRepository) { }

  async createUser({ name, postCounter }: Omit<Users, 'id'>): Promise<Users> {

    const user = await this.userRespository.createUser({ name, postCounter })
    return user
  }

  async loadUser(userId: string): Promise<Users | undefined> {
    if (!userId) {
      new Error('User is Required')
    }
    const loadUser = await this.userRespository.load(userId);

    if (!loadUser) {
      throw new Error('not found')
    }

    return loadUser
  }

  async updatePostCounter(postCounter: number, id: string): Promise<number> {

    const updated = this.userRespository.updatePostCounter(
      postCounter,
      id
    )

    return updated
  }
}
export { UserService }