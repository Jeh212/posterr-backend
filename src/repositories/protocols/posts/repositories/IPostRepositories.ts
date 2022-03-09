import { Post } from '@/entities/Post'

export interface IPostRepositories {
  createPost: ({ id, created_at, postContent, userId }: Post) => Promise<Post>
  loadRecentPosts: (userId: string) => Promise<Post[] | undefined>
  loadOlderPosts: (userId: string) => Promise<Post[] | undefined>
}
