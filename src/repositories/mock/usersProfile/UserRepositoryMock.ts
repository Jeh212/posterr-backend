import { User } from '@/entities/User'
import { IUserRepository } from '@/repositories/protocols/usersProfile/repositories/IUserRepository'
import { dateFormater } from '@/utils/dataFormater'
import { v4 as uuid } from 'uuid'

export class LoadUserRepositoryMock implements IUserRepository {
  private users: User[] = []

  async load(userId?: string): Promise<User | undefined> {
    const foundedUser = this.users.find(element => element.id === userId)
    return foundedUser
  }

  async createUser(user: User): Promise<User> {
    Object.assign(user, {
      id: uuid(),
      joinDate: dateFormater(new Date())
    })

    this.users.push(user)

    const { id, joinDate, name, postCounter } = user

    return { id, joinDate, name, postCounter }
  }

  async updatePostCounter(postCounter: number, id?: string): Promise<number> {
    const user = this.users.find(element => {
      if (element.id === id) {
        return element
      }
    })

    this.users.push({
      ...user,
      postCounter: user?.postCounter + 1
    })

    this.users.shift()

    const [updatedValue] = this.users

    return updatedValue.postCounter
  }
}
