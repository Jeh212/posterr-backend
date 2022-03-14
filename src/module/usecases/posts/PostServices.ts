import { PostRepositories } from '@/repositories/prisma/posts'
import { compareOlderDate, compareRecentDate } from '@/utils/dataFormater'
import { Posts } from '@prisma/client'

class PostServices {
  constructor(private readonly postRepositories: PostRepositories) { }

  // async createPost(post: Post): Promise<Posts> {
  //   const createPost = await this.postRepositories.createPost(post)

  //   return createPost
  // }
  // async loadRecentPosts(userId: string): Promise<Post[] | undefined> {
  //   if (!userId) {
  //     throw new Error('User id required')
  //   }
  //   const loadPost = await this.postRepositories.loadRecentPosts(userId)

  //   const sortedPost = compareRecentDate(loadPost)

  //   return sortedPost
  // }
  // async loadOlderPosts(userId: string): Promise<Post[] | undefined> {
  //   if (!userId) {
  //     throw new Error('User id required')
  //   }
  //   const loadPost = await this.postRepositories.loadOlderPosts(userId)

  //   const sortedPost = compareOlderDate(loadPost)

  //   return sortedPost
  // }
}
export { PostServices }