import { PostRepositories } from '@/repositories/prisma/posts'
import { compareOlderDate, compareRecentDate, dateFormater } from '../../../utils/dataFormater'
import { Posts } from '@prisma/client'
import { UserRepository } from '@/repositories/prisma/users'

class PostServices {

  constructor(
    private readonly postRepositories: PostRepositories,
    private readonly userRepositories: UserRepository
  ) { }

  async createPost({ userId, postContent, created_at }: Omit<Posts, 'id'>): Promise<Posts> {

    const findUserIfExists = await this.userRepositories.load(userId)
    console.log(findUserIfExists);

    if (!findUserIfExists) {
      throw new Error('User not found')
    }
    if (findUserIfExists.postCounter >= 5) {
      throw new Error('User can not post more than 5 post a day')
    }

    const createPost = await this.postRepositories.createPost({ userId, postContent, created_at })



    const result = await this.userRepositories.updatePostCounter(findUserIfExists.postCounter + 1, findUserIfExists.id)


    return createPost
  }

  async loadRecentPosts(userId: string): Promise<Posts[] | null> {

    if (!userId) {
      throw new Error('User id required')
    }
    const loadPost = await this.postRepositories.loadRecentPosts(userId)

    const sortedPost = compareRecentDate(loadPost)

    return sortedPost
  }

  async loadOlderPosts(userId: string): Promise<Posts[] | null> {
    if (!userId) {
      throw new Error('User id required')
    }
    const loadPost = await this.postRepositories.loadOlderPosts(userId)

    const sortedPost = compareOlderDate(loadPost)

    return sortedPost
  }
}
export { PostServices }