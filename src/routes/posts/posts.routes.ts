
import { postFactories } from '../../module/factories/postsFactories/PostFactories'
import { Router } from 'express'



const postRouter = Router();


postRouter.post('/creatPost', (request, response) => {
    console.log('hi')
    // postFactories().handleCreate(request.body, response.json())
})

export { postRouter }