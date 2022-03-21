import { PostServices } from "@/module/usecases/posts/PostServices";
import { dateFormaterPosts } from "@/utils/dataFormater";
import { ApiError } from "@/utils/Errors";
import { postsSchemaValidate } from "@/utils/schema/posts.schema";
import { Posts } from "@prisma/client";
import { Request, Response } from "express";


type RequestPosts = Pick<Posts, "postContent" | "userId">
type RequestLoadRecentPost = Pick<Posts, "userId">


export class PostController {

    constructor(private postServices: PostServices) { }

    async handleCreate(request: Request, response: Response) {


        try {
            const { postContent, userId }: RequestPosts = request.body;

            await postsSchemaValidate.validateAsync(request.body)
                .catch((reason) => { throw new ApiError(reason.message, 403) })

            const createUser = await this.postServices.createPost({ postContent, userId });

            return response.status(201).json({
                result: 'ok',
                statusCode: 201,
                data: createUser
            })

        } catch (err: any) {
            return response.status(err.statusCode).json({
                result: err
            })
        }
    }

    async handleLoadRecentPosts(request: Request, response: Response) {

        try {
            const { userId }: RequestLoadRecentPost = request.body;

            const loadUserRecentPosts = await this.postServices.loadRecentPosts(userId);

            if (!loadUserRecentPosts) {
                throw new ApiError('Not Found: Recent posts not found!', 404)
            }

            const formatedData = dateFormaterPosts(loadUserRecentPosts)

            return response.status(200).json({
                result: 'ok',
                statusCode: 200,
                data: formatedData
            })

        } catch (err: any) {
            return response.status(err.statusCode).json({
                result: err
            })
        }

    }

    async handleOlderPosts(request: Request, response: Response) {

        try {
            const { userId } = request.body;

            const olderPost = await this.postServices.loadOlderPosts(userId);

            if (!olderPost) {
                throw new Error('Posts not found')
            }

            const formatedData = dateFormaterPosts(olderPost)


            return response.status(201).json({
                result: 'ok',
                statusCode: 200,
                data: formatedData
            })

        } catch (err: any) {
            return response.status(err.statusCode).json({
                result: err
            })
        }
    }

}
