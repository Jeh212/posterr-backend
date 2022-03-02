import { IUser } from '@/entities/protocols/IUser'
import { ILoadUserRepository } from '@/repositories/protocols/users/repositories/ILoadUserRepository'

class LoadUserRepositoryMock implements ILoadUserRepository {
  async load(userId: string): Promise<IUser | undefined> {
    const user = [
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

    const foundedUser = user.find(element => element._id === userId)

    if (!foundedUser) {
      throw new Error('not found')
    }
    return foundedUser
  }
}
export { LoadUserRepositoryMock }
