import { Post } from '@/entities/Post'

export interface IPostRepositories {
  createPost: ({ created_at, postContent, userId }: Post) => Promise<Post>
  loadRecentPosts: (userId: string) => Promise<Post[] | null>
  loadOlderPosts: (userId: string) => Promise<Post[] | null>
}
