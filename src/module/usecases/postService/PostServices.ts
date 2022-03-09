import { Post } from '@/entities/Post'
import { IPostRepositories } from '@/repositories/protocols/posts/repositories'
import { compareOlderDate, compareRecentDate } from '@/utils/dataFormater'

export class PostServices {
  constructor(private readonly postRepositories: IPostRepositories) {}

  async createPost(post: Post): Promise<Post> {
    const createPost = await this.postRepositories.createPost(post)

    return createPost
  }
  async loadRecentPosts(userId: string): Promise<Post[] | undefined> {
    if (!userId) {
      throw new Error('User id required')
    }
    const loadPost = await this.postRepositories.loadRecentPosts(userId)

    const sortedPost = compareRecentDate(loadPost)

    return sortedPost
  }
  async loadOlderPosts(userId: string): Promise<Post[] | undefined> {
    if (!userId) {
      throw new Error('User id required')
    }
    const loadPost = await this.postRepositories.loadOlderPosts(userId)

    const sortedPost = compareOlderDate(loadPost)

    return sortedPost
  }
}
