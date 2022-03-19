
import { userServiceFactory } from '@/module/factories/userFactories/UserServiceFactory';
import { Request, Response, Router } from 'express'

/**
 * @method routes for users
 * @argument Calling apis
 * @author Jean Carlos
 * 
 */


const userRouter = Router();
const userController = userServiceFactory();


/**
 * @method Create a user
 * @argument Call api for users
 * @author Jean Carlos
 * 
 */
userRouter.post('/create', (request: Request, response: Response) => {
    userController.handleCreate(request, response);
});

/**
 * @method Load a user
 * @argument Call api for users
 * @author Jean Carlos
 * 
 */

userRouter.get('/load', (request: Request, response: Response) => {
    userController.handleLoadUser(request, response);
});




export { userRouter }