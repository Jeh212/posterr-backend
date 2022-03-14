import { UserRepository } from '@/repositories/prisma/users'
import { Users } from '@prisma/client'

class UserService {

  constructor(private readonly userRespository: UserRepository) { }

  // async createUser({ name, postCounter }: Users): Promise<Users> {
  //   const userCreate = User.create({ name, postCounter })

  //   const user = await this.userRespository.createUser(userCreate)
  //   return user
  // }

  // async loadUser(userId?: string): Promise<User | undefined> {
  //   if (!userId) {
  //     new Error('User is Required')
  //   }
  //   const loadUser = await this.userRespository.load(userId)

  //   if (!loadUser) {
  //     throw new Error('not found')
  //   }

  //   return loadUser
  // }

  // async updatePostCounter(postCounter: number, id?: string): Promise<number> {
  //   const user = await this.userRespository.load(id)

  //   const updated = this.userRespository.updatePostCounter(
  //     postCounter,
  //     id
  //   )

  //   return updated
  // }
}
export { UserService }