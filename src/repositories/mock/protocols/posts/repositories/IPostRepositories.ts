import { Post } from '@/entities/mockEntities/Post'

export interface IPostRepositories {
  createPost: ({ created_at, postContent, userId }: Post) => Promise<Post>
  loadRecentPosts: (userId: string) => Promise<Post[] | undefined>
  loadOlderPosts: (userId: string) => Promise<Post[] | undefined>
}
