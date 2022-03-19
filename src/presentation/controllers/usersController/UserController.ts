import { UserService } from '@/module/usecases/users/UserService'
import { userSchemaValidate } from '@/utils/schema/users.schema'
import { Users } from '@prisma/client'
import { Request, Response } from 'express'


type RequestCreateUser = Pick<Users, "postCounter" | "name">


class UserController {

    constructor(private userService: UserService) { }

    async handleCreate(request: Request, response: Response) {

        const { name, postCounter }: RequestCreateUser = request.body

        const validateUser = await userSchemaValidate.validateAsync(request.body)

        console.log(validateUser);

        const user = await this.userService.createUser({ name, postCounter, joinDate: new Date() })

        return response.status(201).json({
            result: 'ok',
            data: user
        })
    }

    async handleLoadUser(request: Request, response: Response) {

        const { userId } = request.body

        const user = await this.userService.loadUser(userId);

        return response.status(201).json({
            result: 'ok',
            data: user
        })

    }
}
export { UserController }