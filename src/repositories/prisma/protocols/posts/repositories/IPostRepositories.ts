import { Posts } from "@prisma/client"

export interface IPostRepositories {
    createPost: ({ created_at, postContent, userId }: Posts) => Promise<Posts>
    loadRecentPosts: (userId: string) => Promise<Posts[] | null>
    loadOlderPosts: (userId: string) => Promise<Posts[] | null>
}
