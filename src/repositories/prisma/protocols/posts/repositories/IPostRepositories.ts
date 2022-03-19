import { Posts } from "@prisma/client"

export interface IPostRepositories {

    createPost: ({ postContent, userId }: Omit<Posts, 'id'>) => Promise<Posts>
    loadRecentPosts: (userId: string) => Promise<Posts[] | []>
    loadOlderPosts: (userId: string) => Promise<Posts[] | []>
}
