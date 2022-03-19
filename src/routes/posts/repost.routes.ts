import { repostFactory } from '@/module/factories/postsFactories/RepostFactory';
import { Request, Response, Router } from 'express';



const repostRouter = Router();

const quotePostController = repostFactory();

repostRouter.post('/create', (request: Request, response: Response) =>
    quotePostController.handleRepostCreate(request, response));

repostRouter.get('/list/:userId', (request: Request, response: Response) =>
    quotePostController.handleRepostList(request, response));

export { repostRouter }