import { User } from '@/entities/mockEntities/User'
import { UserRepositoryMock } from '@/repositories/mock/users/UserRepositoryMock'

export class UserServiceMock {

  constructor(private readonly userRespositoryMock: UserRepositoryMock) { }

  async createUser({ name, postCounter }: User): Promise<User> {
    const userCreate = User.create({ name, postCounter })

    const user = await this.userRespositoryMock.createUser(userCreate)
    return user
  }

  async loadUser(userId?: string): Promise<User | undefined> {
    if (!userId) {
      new Error('User is Required')
    }
    const loadUser = await this.userRespositoryMock.load(userId)

    if (!loadUser) {
      throw new Error('not found')
    }

    return loadUser
  }

  async updatePostCounter(postCounter: number, id: string): Promise<number> {
    const user = await this.userRespositoryMock.load(id)

    const updated = this.userRespositoryMock.updatePostCounter(
      postCounter,
      id
    )

    return updated
  }
}
