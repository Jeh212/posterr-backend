import { FollowingService } from "@/module/usecases/users/FollowingService"
import { FollowingController } from "@/presentation/controllers/usersController/FollowingController"
import { FollowRepository, UserRepository } from "@/repositories/prisma/users"



const followingServiceFactory = (): FollowingController => {

    const usersRepository = new UserRepository()

    const followRepository = new FollowRepository()
    const followService = new FollowingService(followRepository, usersRepository)
    const followingController = new FollowingController(followService)

    return followingController
}
export { followingServiceFactory }