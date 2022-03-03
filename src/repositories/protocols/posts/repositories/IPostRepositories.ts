import { IPost } from '@/entities/protocols/IPost'

export interface IPostRepositories {
  loadRecentPosts: (userId: string) => Promise<IPost | undefined>
  loadOlderPosts: (userId: string) => Promise<IPost | undefined>
}
