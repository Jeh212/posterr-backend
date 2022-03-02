describe('LoadUserTest', () => {
  class LoadUserService {
    constructor(private readonly loadUser: ILoadUserRepository) {}

    async execute(userId: string): Promise<IUser | undefined> {
      return await this.loadUser.load(userId)
    }
  }

  interface ILoadUserRepository {
    load(userId: string): Promise<IUser | undefined>
  }

  interface IUser {
    _id: string
    name: string
    joinDate: Date
    followers: any
    following: any
    posts: any
    postCounter: number
    quotePost: any
    reTweets: any
  }

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

  test('It should load a existing user information', async () => {
    const loadUserRepository = new LoadUserRepositoryMock()
    const loadUserService = new LoadUserService(loadUserRepository)

    const userFake = {
      _id: '1',
      name: 'John Uno',
      joinDate: new Date(),
      followers: [],
      following: [],
      posts: [],
      postCounter: 0,
      quotePost: [],
      reTweets: []
    }
    const user = await loadUserService.execute(userFake._id)
    expect(user).toEqual(userFake)
  })

  test('It should throw an Erro in case the user not found', async () => {
    const loadUserRepository = new LoadUserRepositoryMock()
    const loadUserService = new LoadUserService(loadUserRepository)

    const userFake = {
      _id: 'dont_exist',
      name: 'John Uno',
      joinDate: new Date(),
      followers: [],
      following: [],
      posts: [],
      postCounter: 0,
      quotePost: [],
      reTweets: []
    }
    const promise = loadUserService.execute(userFake._id)

    await expect(promise).rejects.toThrow(new Error('not found'))
  })
})
