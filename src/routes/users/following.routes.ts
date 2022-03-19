
import { followingServiceFactory } from '@/module/factories/userFactories/FollowingServiceFactory';
import { Request, Response, Router } from 'express'






const followingController = followingServiceFactory();
const followingRouter = Router();


/** 
    @route follow a user
*/
followingRouter.post('/follow', (request: Request, response: Response) => {
    followingController.handleCreateFollowing(request, response);
})

/** 
    @route unfollow a user
*/

followingRouter.delete('/unfollow/:followingId', (request: Request, response: Response) => {
    followingController.handleUnfollow(request, response);
})

/** 
    @route list following
*/
followingRouter.get('/follow/list/:userId', (request, response) => {
    followingController.handleListFollowing(request, response)
})

export { followingRouter }