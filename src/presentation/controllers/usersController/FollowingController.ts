import { FollowingService } from "@/module/usecases/users/FollowingService";
import { Request, Response } from "express";



class FollowingController {


    constructor(private followingService: FollowingService) { }

    async handleCreateFollowing(request: Request, response: Response) {
        const { userId, created_at, followingId } = request.body

        const following = await this.followingService.createFollowing({ userId, created_at, followingId })

        return response.json(following)
    }

    async handleUnfollow(request: Request, response: Response) {
        const { followingId } = request.params;


        const unfollow = await this.followingService.unFollow(followingId);

        return response.status(200).json(unfollow);
    }

    async handleListFollowing(request: Request, response: Response) {
        const { userId } = request.params
        const listFollowing = await this.followingService.listFollowing(userId);

        return response.status(200).json(listFollowing)
    }

}

export { FollowingController }