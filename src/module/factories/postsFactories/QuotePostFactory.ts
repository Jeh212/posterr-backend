import { QuotePostService } from "@/module/usecases/posts/QuotePostService";
import { QuotePostController } from "@/presentation/controllers/postController/QuotePostController";
import { QuotePostRepositories } from "@/repositories/prisma/posts";
import { UserRepository } from "@/repositories/prisma/users";


const quotePostFactory = (): QuotePostController => {

    const userRepository = new UserRepository();


    const quotePostRepositories = new QuotePostRepositories();
    const quotePostService = new QuotePostService(quotePostRepositories, userRepository);
    const quotePostController = new QuotePostController(quotePostService);


    return quotePostController

}

export { quotePostFactory }