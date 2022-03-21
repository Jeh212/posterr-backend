import { UserService } from "@/module/usecases/users/UserService";
import { UserController } from "@/presentation/controllers/usersController/UserController";
import { FollowRepository, UserRepository } from "@/repositories/prisma/users"



const userServiceFactory = (): UserController => {
    const usersRepository = new UserRepository()
    const followRepository = new FollowRepository()

    const userService = new UserService(usersRepository, followRepository);
    const userController = new UserController(userService)

    return userController;
}

export { userServiceFactory }