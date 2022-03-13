import { PostServices } from "@/module/tests/usecases/users"
import { PostController } from "@/presentation/controllers/postController/PostController"
import { PostRepositories } from "@/repositories/prisma/posts"




const postFactories = (): PostController => {

    const postRepositories = new PostRepositories()
    const postServices = new PostServices(postRepositories)
    const postController = new PostController(postServices);

    return postController

}

export { postFactories }