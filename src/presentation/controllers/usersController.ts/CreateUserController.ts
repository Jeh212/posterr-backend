import { Request, Response } from 'express'


class CreateUserController {


    async handle({ body }: Request, { json }: Response) {

        const { name } = body


        return json()
    }

}