import { Router } from 'express';
import { postRouter } from './posts/posts.routes';


export const routes = Router();


routes.use('/post', postRouter)
