import { RepostService } from "@/module/usecases/posts/RepostService";
import { ReTweets } from "@prisma/client";
import { Request, Response } from "express-serve-static-core";


type RequestRePosts = Pick<ReTweets, "postId" | "userId">



class RepostController {

    constructor(private repostService: RepostService) { }


    async handleRepostCreate(request: Request, response: Response): Promise<any> {

        const { postId, userId }: RequestRePosts = request.body;

        const repost = await this.repostService.create({ postId, userId })

        return response.status(201).json({
            result: 'ok',
            data: repost
        })

    }
    async handleRepostList(request: Request, response: Response): Promise<any> {

        const { userId } = request.params;

        const listRepost = await this.repostService.list(userId)

        return response.status(200).json({
            result: 'ok',
            data: listRepost
        })
    }


}

export { RepostController }