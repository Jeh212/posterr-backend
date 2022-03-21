import { Router, Request, Response, Handler, NextFunction } from 'express';

import { postRouter } from './posts/posts.routes';
import { followingRouter } from './users/following.routes';
import { quoteRouter } from './posts/quotepost.routes'
import { repostRouter } from './posts/repost.routes'
import { userRouter } from './users/users.routes';


/**
 * @method routes
 * @argument Entrace to call a specific api router
 * @author Jean Carlos
 * 
 */

export const routes = Router();


/**
 * @name Users
 * @argument Call api for users
 * @author Jean Carlos
 * 
 */

routes.use('/users', followingRouter)
routes.use('/users', userRouter)

/**
 * @name Posts
 * @argument Call api for users
 * @author Jean Carlos
 * 
 */
routes.use('/post', postRouter)
routes.use('/post/quote-post', quoteRouter)
routes.use('/post/retweet', repostRouter)

