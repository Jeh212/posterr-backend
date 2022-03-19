import { quotePostFactory } from '@/module/factories/postsFactories/QuotePostFactory';
import { Request, Response, Router } from 'express';



const quoteRouter = Router();

const quotePostController = quotePostFactory();

quoteRouter.post('/create', (request: Request, response: Response) =>
    quotePostController.handleCreate(request, response));

quoteRouter.get('/list/:userId', (request: Request, response: Response) =>
    quotePostController.handleList(request, response));

export { quoteRouter }