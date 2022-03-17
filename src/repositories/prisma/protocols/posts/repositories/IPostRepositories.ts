import { Posts } from "@prisma/client"

export interface IPostRepositories {
    createPost: ({ created_at, postContent, userId }: Omit<Posts, 'id'>) => Promise<Posts>
    loadRecentPosts: (userId: string) => Promise<Posts[] | null>
    loadOlderPosts: (userId: string) => Promise<Posts[] | null>
}
