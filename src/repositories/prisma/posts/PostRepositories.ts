import { Post } from "@/entities/Post";
import { prismaClient } from "@/infra/database/prismaClient";
import { IPostRepositories } from "@/repositories/protocols/posts/repositories";
import { InternalServerError } from "@/utils/Errors";


class PostRepositories implements IPostRepositories {

    async createPost({ created_at, postContent, userId }: Post): Promise<Post> {
        try {
            const post = await prismaClient.posts.create({
                data: {
                    created_at,
                    postContent,
                    userId
                }
            })
            return post
        } catch (error) {
            throw new InternalServerError(error)
        }
    }
    async loadRecentPosts(userId: string): Promise<Post[] | null> {
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
    async loadOlderPosts(userId: string): Promise<Post[] | null> {
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