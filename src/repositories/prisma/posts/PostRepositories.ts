import { IPostRepositories } from "@/repositories/prisma/protocols/posts/repositories/IPostRepositories";
import { Posts } from "@prisma/client";
// import { InternalServerError } from "@/utils/Errors";

import { prismaClient } from "@/infra/database/prismaClient";
import { ApiError } from "@/utils/Errors";

class PostRepositories implements IPostRepositories {

    async createPost({ userId, postContent }: Omit<Posts, 'id'>): Promise<Posts> {
        try {
            const post = await prismaClient.posts.create({
                data: {
                    userId,
                    postContent,
                    created_at: new Date()
                }
            })

            return post
        } catch (err: any) {
            throw new ApiError('Internal Server Error', 500)
        }
    }
    async loadRecentPosts(userId: string): Promise<Posts[] | []> {
        try {
            const loadPost = await prismaClient.posts.findMany({
                where: {
                    userId,
                    AND: [
                        {
                            created_at: {
                                gte: new Date()
                            }
                        }
                    ]
                }
            })
            return loadPost
        } catch (err: any) {
            throw new ApiError('Internal Server Error', 500)
        }
    }

    async loadOlderPosts(userId: string): Promise<Posts[] | []> {

        try {
            const loadPost = await prismaClient.posts.findMany({
                where: {
                    userId,
                    AND: [
                        {
                            created_at: {
                                lte: new Date()
                            }
                        }
                    ]
                }
            })
            return loadPost
        } catch (err: any) {
            throw new ApiError('Internal Server Error', 500)
        }
    }

}
export { PostRepositories }