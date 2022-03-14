import { RepostService } from "@/module/usecases/posts/RepostService";
import { RepostController } from "@/presentation/controllers/postController/RepostController";
import { RepostRepositories } from "@/repositories/prisma/posts"



const repostFactory = (): RepostController => {
    const repostRepositories = new RepostRepositories();
    const repostService = new RepostService(repostRepositories);
    const repostController = new RepostController(repostService);

    return repostController


}

export { repostFactory }