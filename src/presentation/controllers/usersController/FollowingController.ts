import { FollowingService } from "@/module/tests/usecases/users";
import { Request, Response } from "express";



class FollowingController {


    constructor(private followingService: FollowingService) { }

    async handleCreateFollowing({ body }: Request, { json }: Response) {
        const { userId, created_at, followingId } = body

        const following = await this.followingService.createFollowing({ userId, created_at, followingId })

        return json(following)
    }

    async handleUnfollow({ body }: Request, { json }: Response) {
        const { followingId } = body;

        const unfollow = await this.followingService.unFollow(followingId);

        return json(unfollow);
    }

    async handleListFollowing({ body }: Request, { json }: Response) {
        const { userId } = body
        const listFollowing = await this.followingService.listFollowing(userId);

        return json(listFollowing)
    }

}

export { FollowingController }