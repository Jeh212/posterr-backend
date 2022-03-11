import { QuotePostService } from "@/module/usecases/posts/QuotePostService";



class QuotePostController {


    constructor(private quotePostService: QuotePostService) { }


}

export { QuotePostController }