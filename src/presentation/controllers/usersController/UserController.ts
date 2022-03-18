import { UserService } from '@/module/usecases/users/UserService'
import { Users } from '@prisma/client'
import { Request, Response } from 'express'


type RequestCreateUser = Pick<Users, "postCounter" | "name">


class UserController {

    constructor(private userService: UserService) { }

    async handleCreate(request: Request, response: Response) {

        const { name, postCounter }: RequestCreateUser = request.body

        const user = await this.userService.createUser({ name, postCounter, joinDate: new Date() })

        return response.json(user)
    }

    async handleLoadUser(request: Request, response: Response) {

        const { userId } = request.body

        const user = await this.userService.loadUser(userId);

        return response.json(user)

    }


    // async handleUpdatePostCounter({ body }: Request, { json }: Response) {
    //     const { postCounter, id: userId } = body;

    //     const count = await this.userService.updatePostCounter(postCounter, userId);
    //     return count;
    // }


}
export { UserController }