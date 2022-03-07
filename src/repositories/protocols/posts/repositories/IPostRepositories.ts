import { IPost } from '@/entities/protocols/IPost'

export interface IPostRepositories {
  createPost: ({ id, created_at, postContent, userId }: IPost) => Promise<IPost>
  loadRecentPosts: (userId: string) => Promise<IPost[] | undefined>
  loadOlderPosts: (userId: string) => Promise<IPost[] | undefined>
}
