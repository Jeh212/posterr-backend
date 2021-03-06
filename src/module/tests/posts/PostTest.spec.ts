import { Post } from '@/entities/mockEntities/Post'
import { User } from '@/entities/mockEntities/User'

import { UserServiceMock } from '@/module/tests/usecases/users'
import { PostRepositoriesMock } from '@/repositories/mock/posts/PostRepositoriesMock'
import { UserRepositoryMock } from '@/repositories/mock/users'
import { PostServicesMock } from '../usecases/posts/PostServicesMock'

describe('PostTest', () => {
  type PostSut = {
    postRepoMock: PostRepositoriesMock
    sutPostServicesMock: PostServicesMock
  }

  type IMakeSut = {
    sutUserService: UserServiceMock
    userRepositoryMock: UserRepositoryMock
  }

  const makeSut = (): IMakeSut => {
    const userRepositoryMock = new UserRepositoryMock()
    const sutUserService = new UserServiceMock(userRepositoryMock)

    return { userRepositoryMock, sutUserService }
  }

  const postSut = (): PostSut => {
    const postRepoMock = new PostRepositoriesMock()

    const sutPostServicesMock = new PostServicesMock(postRepoMock)

    return {
      postRepoMock,
      sutPostServicesMock
    }
  }
  beforeAll(async () => {
    defaultUser()
  })

  async function defaultUser(): Promise<User> {
    const { sutUserService, userRepositoryMock } = makeSut()

    const defaultUser: User = {
      id: '',
      name: 'John_test',
      postCounter: 0
    }
    const newUser = await sutUserService.createUser(defaultUser)

    return newUser
  }

  it('Should be able to create a post', async () => {
    const { sutPostServicesMock } = postSut()

    const { id: userId } = await defaultUser()

    const post: Post = {
      id: '',
      postContent: 'My first post',
      userId,
      created_at: new Date()
    }

    const createPost = await sutPostServicesMock.createPost(post)

    expect(createPost.id).toBe(createPost.id)
  })

  it('Should be able to load 5 recents post', async () => {
    const { sutPostServicesMock } = postSut()

    const mockUser = {
      id: 'b056d610-6bfe-4956-b88d-83609fcef908',
      joinDate: 'Sunday, March 6th, 2022',
      name: 'John_test',
      postCounter: 0
    }

    const loadPost = await sutPostServicesMock.loadRecentPosts(mockUser.id)

    expect(loadPost?.length).toEqual(5)
  })

  it('Should be able to load 5 older post', async () => {
    const { sutPostServicesMock } = postSut()

    const mockUser = {
      id: 'b056d610-6bfe-4956-b88d-83609fcef908',
      joinDate: 'Sunday, March 6th, 2022',
      name: 'John_test',
      postCounter: 0
    }

    const loadPost = await sutPostServicesMock.loadRecentPosts(mockUser.id)

    expect(loadPost?.length).toEqual(5)
  })
})
