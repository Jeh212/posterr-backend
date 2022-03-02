import { LoadUserRepositoryMock } from '@/repositories/mock/users/LoadUserRepositoryMock'
import { LoadUserService } from '../usecases/users/LoadUserService'

type IMakeSut = {
  sut: LoadUserService
  loadUserRepositoryMock: LoadUserRepositoryMock
}
describe('LoadUserTest', () => {
  const makeSut = (): IMakeSut => {
    const loadUserRepositoryMock = new LoadUserRepositoryMock()
    const sut = new LoadUserService(loadUserRepositoryMock)

    return { loadUserRepositoryMock, sut }
  }
  test('It should load a existing user information', async () => {
    const { sut } = makeSut()
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
    const user = await sut.execute(userFake._id)
    expect(user).toEqual(userFake)
  })

  test('It should throw an Erro in case the user not found', async () => {
    const { sut } = makeSut()

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
    const promise = sut.execute(userFake._id)

    await expect(promise).rejects.toThrow(new Error('not found'))
  })
})
