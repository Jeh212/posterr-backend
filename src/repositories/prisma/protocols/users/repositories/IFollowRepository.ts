import { Following } from "@prisma/client"

export interface IFollowRepository {
    createFollowing: ({
        userId,
        followingId,
        created_at
    }: Following) => Promise<Following>

    getFollowing: (followingId: string) => Promise<Following | null>
    removeFollowing: (followingId: string) => Promise<string>
    listFollowing: (userId: string) => Promise<Following[] | []>
    listFollowers: (followingId: string) => Promise<Following[]>;
    includesFollowing: (followingId: string, userId: string) => Promise<Following | null>;

}
