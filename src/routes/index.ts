import { Router } from 'express';
import { postRouter } from './posts/posts.routes';
import { userRouter } from './users/users.routes';


export const routes = Router();


routes.use('/post', postRouter)

routes.use('/users', userRouter)

