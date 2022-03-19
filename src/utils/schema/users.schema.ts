import joi from 'joi';


const userSchemaValidate = joi.object({
    name: joi.string().max(14).alphanum().required(),
    postCounter: joi.number().required().less(1)
})
export { userSchemaValidate }