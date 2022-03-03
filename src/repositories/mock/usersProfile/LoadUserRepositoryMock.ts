import { IUser } from '@/entities/protocols/IUser'
import { IUserRepository } from '@/repositories/protocols/usersProfile/repositories/IUserRepository'

export class LoadUserRepositoryMock implements IUserRepository {
  private users: IUser[] = [
    {
      _id: '1',
      name: 'John Uno',
      joinDate: new Date(),
      followers: [],
      following: [],
      posts: [],
      postCounter: 0,
      quotePost: [],
      reTweets: []
    },
    {
      _id: '2',
      name: 'John Doe',
      joinDate: new Date(),
      followers: [],
      following: [],
      posts: [],
      postCounter: 2,
      quotePost: [],
      reTweets: []
    },
    {
      _id: '3',
      name: 'John Tee',
      joinDate: new Date(),
      followers: [],
      following: [],
      posts: [],
      postCounter: 4,
      quotePost: [],
      reTweets: []
    }
  ]

  async load(userId: string): Promise<IUser | undefined> {
    const foundedUser = this.users.find(element => element._id === userId)
    return foundedUser
  }
}
