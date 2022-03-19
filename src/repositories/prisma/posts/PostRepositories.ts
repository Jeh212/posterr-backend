import { IPostRepositories } from "@/repositories/prisma/protocols/posts/repositories/IPostRepositories";
import { Posts } from "@prisma/client";
// import { InternalServerError } from "@/utils/Errors";

import { prismaClient } from "@/infra/database/prismaClient";

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
        } catch (error) {
            throw new Error('Error creating a post')
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
        } catch (error) {
            throw new Error('Error load recent posts')
            // throw new InternalServerError(error)
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
        } catch (error) {
            throw new Error('Error load older  posts')
            // throw new InternalServerError(error)
        }
    }

}
export { PostRepositories }