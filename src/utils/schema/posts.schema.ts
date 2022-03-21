import joi from 'joi';



const postsSchemaValidate = joi.object({
    userId: joi.string().required().uuid(),
    postContent: joi.string().max(777)
});

export { postsSchemaValidate };