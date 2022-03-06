import { User } from '@/entities/User'
import { FollowingService } from '@/module/usecases/usersProfile'
import { UserService } from '@/module/usecases/usersProfile/UserService'
import { FollowRepositoryMock } from '@/repositories/mock/usersProfile/FollowRepositoryMock'
import { LoadUserRepositoryMock } from '@/repositories/mock/usersProfile/UserRepositoryMock'

type IMakeSut = {
  sutUserService: UserService
  userRepositoryMock: LoadUserRepositoryMock
}
type IFollowSut = {
  followRepositoryMock: FollowRepositoryMock
  followSut: FollowingService
}
describe('LoadUserTest', () => {
  const makeSut = (): IMakeSut => {
    const userRepositoryMock = new LoadUserRepositoryMock()
    const sutUserService = new UserService(userRepositoryMock)

    return { userRepositoryMock, sutUserService }
  }

  const makeFollowSut = (): IFollowSut => {
    const followRepositoryMock = new FollowRepositoryMock()
    const followSut = new FollowingService(followRepositoryMock)
    return { followRepositoryMock, followSut }
  }

  it('Should create a new User', async () => {
    const { sutUserService, userRepositoryMock } = makeSut()

    const userFake: User = {
      name: 'John_test',
      postCounter: 0
    }

    const newUser = await sutUserService.createUser(userFake)
    expect(newUser?.id).toBe(newUser.id)
  })
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

  it('Should create a follow', async () => {
    const { sutUserService } = makeSut()
    const { followSut } = makeFollowSut()

    const userFake: User = {
      name: 'John_test',
      postCounter: 0
    }
    const secondUserFake: User = {
      name: 'new_dude',
      postCounter: 0
    }
    const { id: userId } = await sutUserService.createUser(userFake)
    const { id: followingId } = await sutUserService.createUser(secondUserFake)

    const follow = await followSut.createFollowing({
      userId,
      followingId
    })

    expect(follow.id).toBe(follow.id)
  })

  it('Should throw not to follow themselves', async () => {
    const { sutUserService } = makeSut()
    const { followSut } = makeFollowSut()

    const userFake: User = {
      name: 'John_test',
      postCounter: 0
    }

    const { id: userId } = await sutUserService.createUser(userFake)

    const follow = followSut.createFollowing({
      userId,
      followingId: userId
    })

    await expect(follow).rejects.toThrow(new Error('Cannot follow yourself'))
  })

  it('Should unfollow a user', async () => {
    const { sutUserService } = makeSut()
    const { followSut } = makeFollowSut()

    const userFake: User = {
      name: 'John_test',
      postCounter: 0
    }
    const secondUserFake: User = {
      name: 'new_dude',
      postCounter: 0
    }
    const { id: userId } = await sutUserService.createUser(userFake)
    const { id: followingId } = await sutUserService.createUser(secondUserFake)

    await followSut.createFollowing({
      userId,
      followingId
    })
    const unfollow = await followSut.unFollow(followingId)
    expect(unfollow).toBe(followingId)
  })

  it('Should list following users', async () => {
    const { sutUserService } = makeSut()
    const { followSut } = makeFollowSut()

    const MainuserFake: User = {
      name: 'John_test',
      postCounter: 0
    }
    const { id: userId } = await sutUserService.createUser(MainuserFake)

    for (let i = 0; i < 5; i++) {
      const fakeUser: User = {
        name: `John_test${i}`,
        postCounter: 0
      }

      const { id: followingId } = await sutUserService.createUser(fakeUser)
      await followSut.createFollowing({ userId, followingId })
    }

    const listFollowing = await followSut.listFollowing(userId)

    expect(listFollowing?.length).toBeGreaterThan(0)
  })
})
