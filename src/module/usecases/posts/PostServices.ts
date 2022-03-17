import { PostRepositories } from '@/repositories/prisma/posts'
import { compareOlderDate, compareRecentDate, dateFormater } from '../../../utils/dataFormater'
import { Posts } from '@prisma/client'

class PostServices {

  constructor(private readonly postRepositories: PostRepositories) { }

  async createPost({ userId, postContent, created_at }: Omit<Posts, 'id'>): Promise<Posts> {


    const createPost = await this.postRepositories.createPost({ userId, postContent, created_at })

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