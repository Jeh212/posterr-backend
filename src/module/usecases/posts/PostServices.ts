import { PostRepositories } from '@/repositories/prisma/posts'
import { compareOlderDate, compareRecentDate } from '@/utils/dataFormater'
import { Posts } from '@prisma/client'

class PostServices {

  constructor(private readonly postRepositories: PostRepositories) { }

  async createPost({ postContent, userId }: Omit<Posts, 'id'>): Promise<Posts> {

    const createPost = await this.postRepositories.createPost({ postContent, userId })

    return createPost
  }

  async loadRecentPosts(userId: string): Promise<Posts[] | null> {

    if (!userId) {
      throw new Error('User id required')
    }
    const loadPost = await this.postRepositories.loadRecentPosts(userId)

    if (!loadPost) {
      throw new Error('Post not found')
    }

    const sortedPost = compareRecentDate(loadPost)

    return sortedPost
  }

  async loadOlderPosts(userId: string): Promise<Posts[] | null> {
    if (!userId) {
      throw new Error('User id required')
    }
    const loadPost = await this.postRepositories.loadOlderPosts(userId)

    if (!loadPost) {
      throw new Error('User not found')
    }

    const sortedPost = compareOlderDate(loadPost)

    return sortedPost
  }
}
export { PostServices }