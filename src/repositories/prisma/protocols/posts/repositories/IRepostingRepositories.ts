import { ReTweets } from "@prisma/client"

interface IRepostingRepositories {
    createReposting: ({
        userId,
        created_at,
        postId,
    }: ReTweets) => Promise<ReTweets>
    listRetweets: (userId: string) => Promise<ReTweets[]>
}

export { IRepostingRepositories }
