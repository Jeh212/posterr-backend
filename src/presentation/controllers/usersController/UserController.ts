import { UserService } from '@/module/usecases/users/UserService'
import { dateFormater } from '@/utils/dataFormater'
import { ApiError } from '@/utils/Errors'
import { userSchemaValidate } from '@/utils/schema/users.schema'
import { Users } from '@prisma/client'
import { NextFunction, Request, Response } from 'express'


type RequestCreateUser = Pick<Users, "postCounter" | "name">


class UserController {

    constructor(private userService: UserService) { }

    async handleCreate(request: Request, response: Response) {

        try {

            const { name, postCounter }: RequestCreateUser = request.body

            await userSchemaValidate.validateAsync(request.body)
                .catch((reason) => { throw new ApiError(reason.message, 403) })


            const user = await this.userService.createUser({ name: `@${name}`, postCounter, joinDate: new Date() })

            return response.status(201).json({
                result: 'ok',
                statusCode: 201,
                data: {
                    ...user,
                    joinDate: dateFormater(user.joinDate)
                }
            });

        } catch (err: any) {
            return response.status(err.statusCode).json({
                result: err
            })
        }
    }

    async handleLoadUser(request: Request, response: Response) {

        try {

            const { userId } = request.body

            const user = await this.userService.loadUser(userId);

            return response.status(200).json({
                result: 'ok',
                statusCode: 200,
                data: {
                    ...user,
                    joinDate: dateFormater(user?.joinDate)
                }
            });

        } catch (err: any) {
            return response.status(err.statusCode).json({
                result: err
            })
        }

    }
}
export { UserController }