import joi from 'joi';



const repostSchemaValidate = joi.object({
    userId: joi.string().required().uuid(),
    postId: joi.string().required().uuid()
});

export { repostSchemaValidate };