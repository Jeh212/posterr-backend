import { UserService } from '@/module/tests/usecases/users'
import { Request, Response } from 'express'


class UserController {

    constructor(private userService: UserService) { }

    async handleCreate({ body }: Request, { json }: Response) {

        const { name, postCounter } = body

        const user = await this.userService.createUser({ name, postCounter })

        return json(user)
    }

    async handleLoadUser({ body }: Request, { json }: Response) {

        const { userId } = body

        const user = await this.userService.loadUser(userId);

        return json(user);

    }


    async handleUpdatePostCounter({ body }: Request, { json }: Response) {
        const { postCounter, id: userId } = body;

        const count = await this.userService.updatePostCounter(postCounter, userId);
        return count;
    }


}
export { UserController }