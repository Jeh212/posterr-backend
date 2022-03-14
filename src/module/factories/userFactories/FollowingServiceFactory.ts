import { FollowingService } from "@/module/usecases/users/FollowingService"
import { FollowingController } from "@/presentation/controllers/usersController/FollowingController"
import { FollowRepository } from "@/repositories/prisma/users"



const followingServiceFactory = (): FollowingController => {

    const followRepository = new FollowRepository()
    const followService = new FollowingService(followRepository)
    const followingController = new FollowingController(followService)

    return followingController
}
export { followingServiceFactory }