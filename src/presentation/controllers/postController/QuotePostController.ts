import { QuotePostService } from "@/module/usecases/posts/QuotePostService";
import { QuotePosts } from "@prisma/client";
import { Request, Response } from "express";


type RequestPosts = Pick<QuotePosts, "postId" | "userComment" | "userId">



class QuotePostController {


    constructor(private quotePostService: QuotePostService) { }


    async handleCreate(request: Request, response: Response) {

        const { postId, userComment, userId }: RequestPosts = request.body;

        const quote = await this.quotePostService.createQuote({ postId, userComment, userId })

        return response.status(200).json({
            status: 'ok',
            data: quote
        })
    }

    async handleList(request: Request, response: Response) {
        const { userId } = request.params;

        const quote = await this.quotePostService.listQuote(userId);

        return response.status(200).json({
            status: 'ok',
            data: quote
        })
    }


}

export { QuotePostController }