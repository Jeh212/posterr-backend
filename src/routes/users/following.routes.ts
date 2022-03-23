
import { followingServiceFactory } from '@/module/factories/userFactories/FollowingServiceFactory';
import { Request, Response, Router } from 'express'



const followingController = followingServiceFactory();
const followingRouter = Router();


followingRouter.post('/follow', (request: Request, response: Response) => {

    followingController.handleCreateFollowing(request, response);
})

followingRouter.delete('/unfollow/:followingId', (request: Request, response: Response) => {
    followingController.handleUnfollow(request, response);
})

followingRouter.get('/following/list/:userId', (request, response) => {
    followingController.handleListFollowing(request, response)
})

followingRouter.get('/followers/list/:followingId', (request, response) => {
    followingController.handlerFollowers(request, response)
})

export { followingRouter }