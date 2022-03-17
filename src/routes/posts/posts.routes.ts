
import { postFactories } from '../../module/factories/postsFactories/PostFactories'
import { Request, Response, Router } from 'express'



const postRouter = Router();

const postController = postFactories();

postRouter.get('/live', (request: Request, response: Response) => {
    response.json({
        status: 200,
        data: 'Livee!'
    })
})

postRouter.post('/create', (request, response) => {
    postController.handleCreate(request, response)
})

postRouter.get('/older', (request, response) => {
    postController.handleOlderPosts(request, response);
});

postRouter.get('/recent', (request, response) => {
    postController.handleLoadRecentPosts(request, response);
});


export { postRouter }