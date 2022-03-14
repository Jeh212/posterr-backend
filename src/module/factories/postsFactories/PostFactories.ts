import { PostServices } from "@/module/usecases/posts/PostServices"
import { PostController } from "@/presentation/controllers/postController/PostController"
import { PostRepositories } from "@/repositories/prisma/posts"




export const postFactories = () => {

    const postRepositories = new PostRepositories()
    const postServices = new PostServices(postRepositories)
    const postController = new PostController(postServices);

    return postController

}
