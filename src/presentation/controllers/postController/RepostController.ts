import { RepostService } from "@/module/usecases/posts/RepostService";
import { ApiError } from "@/utils/Errors";
import { repostSchemaValidate } from "@/utils/schema/repost.schema";
import { ReTweets } from "@prisma/client";
import { Request, Response } from "express-serve-static-core";


type RequestRePosts = Pick<ReTweets, "postId" | "userId">



class RepostController {

    constructor(private repostService: RepostService) { }


    async handleRepostCreate(request: Request, response: Response): Promise<any> {

        try {
            const { postId, userId }: RequestRePosts = request.body;


            await repostSchemaValidate.validateAsync(request.body)
                .catch((reason) => { throw new ApiError(reason.message, 403) })

            const repost = await this.repostService.create({ postId, userId })

            return response.status(201).json({
                result: 'ok',
                statusCode: 201,
                data: repost
            })

        } catch (err: any) {

            return response.status(err.statusCode).json({
                result: err
            })
        }

    }
    async handleRepostList(request: Request, response: Response): Promise<any> {

        try {
            const { userId } = request.params;

            const listRepost = await this.repostService.list(userId)

            return response.status(200).json({
                result: 'ok',
                statusCode: 200,
                data: listRepost
            });

        } catch (err: any) {
            return response.status(err.statusCode).json({
                result: err
            })
        }
    }


}

export { RepostController }