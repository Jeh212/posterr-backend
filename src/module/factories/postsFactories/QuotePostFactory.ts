import { QuotePostService } from "@/module/usecases/posts/QuotePostService";
import { QuotePostController } from "@/presentation/controllers/postController/QuotePostController";
import { QuotePostRepositories } from "@/repositories/prisma/posts";


const quotePostFactory = (): QuotePostController => {

    const quotePostRepositories = new QuotePostRepositories();
    const quotePostService = new QuotePostService(quotePostRepositories);
    const quotePostController = new QuotePostController(quotePostService);


    return quotePostController

}

export { quotePostFactory }