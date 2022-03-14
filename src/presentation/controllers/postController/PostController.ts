import { PostServices } from "@/module/usecases/posts/PostServices";
import { Posts } from "@prisma/client";
import { Request, Response } from "express";


type RequestPosts = Pick<Posts, "postContent" | "userId">
type RequestLoadRecentPost = Pick<Posts, "userId">


class PostController {

    constructor(private postServices: PostServices) { }

    async handleCreate({ body }: Request, { json }: Response) {

        const { postContent, userId }: RequestPosts = body;

        const createUser = await this.postServices.createPost({ postContent, userId });


        return json(createUser)
    }

    async handleLoadRecentPosts({ body }: Request, { json }: Response) {

        const { userId }: RequestLoadRecentPost = body;

        const loadUser = await this.postServices.loadRecentPosts(userId);

        return json(loadUser)

    }

    async handleOlderPosts({ body }: Request, { json }: Response) {

        const { userId } = body;

        const olderPost = await this.postServices.loadOlderPosts(userId);

        return json(olderPost)

    }

}

export { PostController }