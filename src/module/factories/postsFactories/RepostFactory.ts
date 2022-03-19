import { RepostService } from "@/module/usecases/posts/RepostService";
import { RepostController } from "@/presentation/controllers/postController/RepostController";
import { RepostRepositories } from "@/repositories/prisma/posts"
import { UserRepository } from "@/repositories/prisma/users";



const repostFactory = (): RepostController => {

    const userRepository = new UserRepository();

    const repostRepositories = new RepostRepositories();
    const repostService = new RepostService(repostRepositories, userRepository);
    const repostController = new RepostController(repostService);

    return repostController


}

export { repostFactory }