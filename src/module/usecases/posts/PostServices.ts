import { PostRepositories, QuotePostRepositories } from '@/repositories/prisma/posts'
import { compareOlderDate, compareRecentDate, dateFormater } from '../../../utils/dataFormater'
import { Posts } from '@prisma/client'
import { UserRepository } from '@/repositories/prisma/users'
import { ApiError } from '@/utils/Errors'

class PostServices {

  constructor(
    private readonly postRepositories: PostRepositories,
    private readonly userRepositories: UserRepository,
  ) { }



  async createPost({ userId, postContent }: Omit<Posts, 'id'>): Promise<Posts> {

    const user = await this.userRepositories.load(userId)

    if (!user) {
      throw new ApiError('Not Found: User not found', 404)
    }

    if (user.postCounter >= 5) {
      throw new ApiError('Bad Request: User can not post more than 5 posts a day', 400)
    }

    const createPost = await this.postRepositories.createPost({
      userId,
      postContent
    })

    await this.userRepositories.updatePostCounter(user.postCounter + 1, user.id);

    return createPost

  }

  async loadRecentPosts(userId: string): Promise<Posts[] | null> {

    if (!userId) {
      throw new ApiError('Bad Request: User id required', 400)
    }

    const loadPost = await this.postRepositories.loadRecentPosts(userId)

    const sortedPost = compareRecentDate(loadPost)

    return sortedPost
  }

  async loadOlderPosts(userId: string): Promise<Posts[] | null> {

    if (!userId) {
      throw new ApiError('Bad Request: User id required', 400)
    }

    const loadPost = await this.postRepositories.loadOlderPosts(userId)

    const sortedPost = compareOlderDate(loadPost)

    return sortedPost
  }
}
export { PostServices }