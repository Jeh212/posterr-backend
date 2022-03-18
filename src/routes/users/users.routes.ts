
import { followingServiceFactory } from '@/module/factories/userFactories/FollowingServiceFactory';
import { userServiceFactory } from '@/module/factories/userFactories/UserServiceFactory';
import { Request, Response, Router } from 'express'



const userRouter = Router();
const userController = userServiceFactory();
const followingController = followingServiceFactory();

userRouter.post('/create', (request: Request, response: Response) => {
    userController.handleCreate(request, response);
});

userRouter.get('/load', (request: Request, response: Response) => {
    userController.handleLoadUser(request, response);
});



/** 
    @route follow a user
*/
userRouter.post('/follow', (request: Request, response: Response) => {
    followingController.handleCreateFollowing(request, response);
})

/** 
    @route unfollow a user
*/

userRouter.delete('/unfollow/:followingId', (request: Request, response: Response) => {
    followingController.handleUnfollow(request, response);
})

/** 
    @route list following
*/
userRouter.get('/follow/list/:userId', (request, response) => {
    followingController.handleListFollowing(request, response)
})


export { userRouter }