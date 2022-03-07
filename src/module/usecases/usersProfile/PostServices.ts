import { IPost } from '@/entities/protocols/IPost'
import { PostRepositoriesMock } from '@/repositories/mock/posts/PostRepositoriesMock'
import { compareOlderDate, compareRecentDate } from '@/utils/dataFormater'

export class PostServices {
  constructor(private readonly postRepositoriesMock: PostRepositoriesMock) {}

  async createPost(post: IPost): Promise<IPost> {
    const createPost = await this.postRepositoriesMock.createPost(post)

    return createPost
  }
  async loadRecentPosts(userId: string): Promise<IPost[] | undefined> {
    if (!userId) {
      throw new Error('User id required')
    }
    const loadPost = await this.postRepositoriesMock.loadRecentPosts(userId)

    const sortedPost = compareRecentDate(loadPost)

    return sortedPost
  }
  async loadOlderPosts(userId: string): Promise<IPost[] | undefined> {
    if (!userId) {
      throw new Error('User id required')
    }
    const loadPost = await this.postRepositoriesMock.loadOlderPosts(userId)

    const sortedPost = compareOlderDate(loadPost)

    return sortedPost
  }
}
