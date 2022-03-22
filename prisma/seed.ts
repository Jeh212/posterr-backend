import { users } from './users'
import { PrismaClient } from '@prisma/client'



const prismaClient = new PrismaClient();




async function main() {


    for (let user of users) {
        await prismaClient.users.create({
            data: user
        })
    }
}


main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(() => {
    prismaClient.$disconnect()
})