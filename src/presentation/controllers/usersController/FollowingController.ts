import { FollowingService } from "@/module/usecases/users/FollowingService";
import { Request, Response } from "express";



class FollowingController {


    constructor(private followingService: FollowingService) { }

    async handleCreateFollowing(request: Request, response: Response) {

        try {
            const { userId, followingId } = request.body

            const following = await this.followingService.createFollowing({ userId, followingId })

            return response.status(201).json({
                result: 'ok',
                statusCode: 201,
                data: following
            })

        } catch (err: any) {
            return response.status(err.statusCode).json({
                result: err
            })
        }
    }

    async handleUnfollow(request: Request, response: Response) {
        try {
            const { followingId } = request.params;


            const unfollow = await this.followingService.unFollow(followingId);

            return response.status(200).json({
                result: 'ok',
                statusCode: 200,
                data: unfollow
            });

        } catch (err: any) {
            return response.status(err.statusCode).json({
                result: err
            })
        }
    }

    async handleListFollowing(request: Request, response: Response) {
        try {
            const { userId } = request.params
            const listFollowing = await this.followingService.listFollowing(userId);

            return response.status(200).json({
                result: 'ok',
                statusCode: 200,
                data: listFollowing
            })
        } catch (err: any) {
            return response.status(err.statusCode).json({
                result: err
            })
        }
    }

    async handlerFollowers(request: Request, response: Response) {
        try {
            const { followingId } = request.params;

            const listFollowers = await this.followingService.listFollowers(followingId);

            return response.status(200).json({
                result: 'ok',
                statusCode: 200,
                data: listFollowers
            })

        } catch (err: any) {
            return response.status(err.statusCode).json({
                result: err
            })
        }
    }

}

export { FollowingController }