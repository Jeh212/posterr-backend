import { UserService } from '@/module/usecases/users'
import { Request, Response } from 'express'


class UserController {

    constructor(private userService: UserService) { }
    async handle({ body }: Request, { json }: Response) {

        const { name } = body


        return json()
    }

}
export { UserController }