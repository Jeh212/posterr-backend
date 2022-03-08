import { IPost } from '@/entities/protocols/IPost'
import { IPostRepositories } from '@/repositories/protocols/posts/repositories'
import { compareOlderDate, compareRecentDate } from '@/utils/dataFormater'

export class PostServices {
  constructor(private readonly postRepositories: IPostRepositories) {}

  async createPost(post: IPost): Promise<IPost> {
    const createPost = await this.postRepositories.createPost(post)

    return createPost
  }
  async loadRecentPosts(userId: string): Promise<IPost[] | undefined> {
    if (!userId) {
      throw new Error('User id required')
    }
    const loadPost = await this.postRepositories.loadRecentPosts(userId)

    const sortedPost = compareRecentDate(loadPost)

    return sortedPost
  }
  async loadOlderPosts(userId: string): Promise<IPost[] | undefined> {
    if (!userId) {
      throw new Error('User id required')
    }
    const loadPost = await this.postRepositories.loadOlderPosts(userId)

    const sortedPost = compareOlderDate(loadPost)

    return sortedPost
  }
}
