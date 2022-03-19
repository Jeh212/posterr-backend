import { PostServices } from "@/module/usecases/posts/PostServices";
import { dateFormaterPosts } from "@/utils/dataFormater";
import { Posts } from "@prisma/client";
import { Request, Response } from "express";


type RequestPosts = Pick<Posts, "postContent" | "userId">
type RequestLoadRecentPost = Pick<Posts, "userId">


export class PostController {

    constructor(private postServices: PostServices) { }

    async handleCreate(request: Request, response: Response) {


        const { postContent, userId }: RequestPosts = request.body;

        const createUser = await this.postServices.createPost({ postContent, userId });


        return response.status(201).json({
            result: 'ok',
            data: createUser
        })
    }

    async handleLoadRecentPosts(request: Request, response: Response) {

        const { userId }: RequestLoadRecentPost = request.body;

        const loadUserRecentPosts = await this.postServices.loadRecentPosts(userId);

        if (!loadUserRecentPosts) {
            throw new Error('There isnt recents posts')
        }

        const formatedData = dateFormaterPosts(loadUserRecentPosts)

        return response.status(201).json({
            result: 'ok',
            data: formatedData
        })

    }

    async handleOlderPosts(request: Request, response: Response) {

        const { userId } = request.body;

        const olderPost = await this.postServices.loadOlderPosts(userId);

        if (!olderPost) {
            throw new Error('Posts not found')
        }

        const formatedData = dateFormaterPosts(olderPost)


        return response.status(201).json({
            result: 'ok',
            data: formatedData
        })
    }

}
