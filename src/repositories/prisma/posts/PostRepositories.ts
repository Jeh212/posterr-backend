import { IPostRepositories } from "@/repositories/prisma/protocols/posts/repositories/IPostRepositories";
import { Posts } from "@prisma/client";
import { InternalServerError } from "@/utils/Errors";

import { prismaClient } from "@/infra/database/prismaClient";

class PostRepositories implements IPostRepositories {

    async createPost({ postContent, userId }: Omit<Posts, 'id'>): Promise<Posts> {
        try {
            const post = await prismaClient.posts.create({
                data: {
                    postContent,
                    userId
                }
            })
            return post
        } catch (error) {
            throw new InternalServerError(error)
        }
    }
    async loadRecentPosts(userId: string): Promise<Posts[] | null> {
        try {
            const loadPost = await prismaClient.posts.findMany({
                where: {
                    id: userId,
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
            throw new InternalServerError(error)
        }
    }
    async loadOlderPosts(userId: string): Promise<Posts[] | null> {
        try {
            const loadPost = await prismaClient.posts.findMany({
                where: {
                    id: userId,
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
            throw new InternalServerError(error)
        }
    }
}
export { PostRepositories }