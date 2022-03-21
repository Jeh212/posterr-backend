
import { userServiceFactory } from '@/module/factories/userFactories/UserServiceFactory';
import { Request, Response, Router, Handler, NextFunction } from 'express'


const userRouter = Router();
const userController = userServiceFactory();

userRouter.post('/create', (request: Request, response: Response) => {
    userController.handleCreate(request, response);
});

userRouter.get('/load', (request: Request, response: Response) => {
    userController.handleLoadUser(request, response);
});

export { userRouter }