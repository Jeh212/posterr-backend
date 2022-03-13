import { User } from '@/entities/mockEntities/User'
import { IUserRepository } from '@/repositories/mock/protocols/users/repositories/IUserRepository'
import { dateFormater } from '@/utils/dataFormater'
import { v4 as uuid } from 'uuid'

export class LoadUserRepositoryMock implements IUserRepository {
  private users: User[] = []

  async load(userId: string): Promise<User | undefined> {
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

    const newUser = {
      ...user,
      postCounter: user?.postCounter + postCounter
    }

    this.users.push(newUser)

    this.users.shift()

    const [updatedValue] = this.users

    return updatedValue.postCounter
  }
}
