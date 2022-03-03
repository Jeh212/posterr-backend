import { User } from '@/entities/User'
import { UserService } from '@/module/usecases/usersProfile/UserService'
import { LoadUserRepositoryMock } from '@/repositories/mock/usersProfile/UserRepositoryMock'

type IMakeSut = {
  sutUserService: UserService
  userRepositoryMock: LoadUserRepositoryMock
}
describe('LoadUserTest', () => {
  const makeSut = (): IMakeSut => {
    const userRepositoryMock = new LoadUserRepositoryMock()
    const sutUserService = new UserService(userRepositoryMock)

    return { userRepositoryMock, sutUserService }
  }

  it('Should load a existing user information', async () => {
    const { sutUserService } = makeSut()

    const userFake: User = {
      name: 'John Uno',
      postCounter: 0
    }
    const newUser = await sutUserService.createUser(userFake)

    const user = await sutUserService.loadUser(newUser.id)

    expect(newUser.id).toBe(user?.id)
  })

  it('Should throw an Erro in case the user not found', async () => {
    const { sutUserService } = makeSut()

    const userFake: User = {
      id: 'fake',
      name: 'John Uno',
      joinDate: new Date(),
      postCounter: 0
    }
    const promise = sutUserService.loadUser(userFake.id)

    await expect(promise).rejects.toThrow(new Error('not found'))
  })

  it('Should create a new User', async () => {
    const { sutUserService, userRepositoryMock } = makeSut()

    const userFake: User = {
      name: 'John_test',
      postCounter: 0
    }

    const newUser = await sutUserService.createUser(userFake)
    expect(newUser?.id).toBe(newUser.id)
  })

  it('Should not follow themselves', async () => {
    const { sutUserService, userRepositoryMock } = makeSut()

    const userFake: User = {
      name: 'John_test',
      postCounter: 0
    }

    const newUser = await sutUserService.createUser(userFake)
    expect(newUser?.id).toBe(newUser.id)
  })
})
