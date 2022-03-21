import { QuotePostService } from "@/module/usecases/posts/QuotePostService";
import { ApiError } from "@/utils/Errors";
import { quoteSchemaValidate } from "@/utils/schema/quote.schema";
import { QuotePosts } from "@prisma/client";
import { Request, Response } from "express";


type RequestPosts = Pick<QuotePosts, "postId" | "userComment" | "userId">



class QuotePostController {


    constructor(private quotePostService: QuotePostService) { }


    async handleCreate(request: Request, response: Response) {

        try {

            const { postId, userComment, userId }: RequestPosts = request.body;


            await quoteSchemaValidate.validateAsync(request.body)
                .catch((reason) => { throw new ApiError(reason.message, 403) })

            const quote = await this.quotePostService.createQuote({ postId, userComment, userId })

            return response.status(201).json({
                result: 'ok',
                statusCode: 201,
                data: quote
            })

        } catch (err: any) {
            return response.status(err.statusCode).json({
                result: err
            })
        }
    }

    async handleList(request: Request, response: Response) {
        try {
            const { userId } = request.params;

            const quote = await this.quotePostService.listQuote(userId);

            return response.status(200).json({
                result: 'ok',
                statusCode: 201,
                data: quote
            })

        } catch (err: any) {
            return response.status(err.statusCode).json({
                result: err
            })
        }
    }


}

export { QuotePostController }