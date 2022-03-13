import { Post } from '@/entities/mockEntities/Post'
import { PostRepositoriesMock } from '@/repositories/mock/posts/PostRepositoriesMock'
import { compareOlderDate, compareRecentDate } from '@/utils/dataFormater'

class PostServicesMock {
  constructor(private readonly postRepositoriesMock: PostRepositoriesMock) { }

  async createPost(post: Post): Promise<Post> {
    const createPost = await this.postRepositoriesMock.createPost(post)

    return createPost
  }
  async loadRecentPosts(userId: string): Promise<Post[] | undefined> {
    if (!userId) {
      throw new Error('User id required')
    }
    const loadPost = await this.postRepositoriesMock.loadRecentPosts(userId)

    const sortedPost = compareRecentDate(loadPost)

    return sortedPost
  }
  async loadOlderPosts(userId: string): Promise<Post[] | undefined> {
    if (!userId) {
      throw new Error('User id required')
    }
    const loadPost = await this.postRepositoriesMock.loadOlderPosts(userId)

    const sortedPost = compareOlderDate(loadPost)

    return sortedPost
  }
}
export { PostServicesMock }