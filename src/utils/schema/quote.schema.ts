import joi from 'joi';



const quoteSchemaValidate = joi.object({
    userId: joi.string().required().uuid(),
    userComment: joi.string().max(777),
    postId: joi.string().required().uuid()
});

export { quoteSchemaValidate };