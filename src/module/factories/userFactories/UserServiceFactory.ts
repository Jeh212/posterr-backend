import { UserController } from "@/presentation/controllers/usersController/UserController";
import { UserRepository } from "@/repositories/prisma/users"
import { UserService } from "../../usecases/users";



const userServiceFactory = (): UserController => {
    const usersRepository = new UserRepository()
    const userService = new UserService(usersRepository);
    const userController = new UserController(userService)

    return userController;
}

export { userServiceFactory }