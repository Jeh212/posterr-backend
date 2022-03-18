import { PostServices } from "@/module/usecases/posts/PostServices"
import { PostController } from "@/presentation/controllers/postController/PostController"
import { PostRepositories } from "@/repositories/prisma/posts"
import { UserRepository } from "@/repositories/prisma/users";




export const postFactories = () => {
    const userRepository = new UserRepository();

    const postRepositories = new PostRepositories()
    const postServices = new PostServices(postRepositories, userRepository)
    const postController = new PostController(postServices);

    return postController

}
